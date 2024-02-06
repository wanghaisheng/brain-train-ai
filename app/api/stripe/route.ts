import { auth, currentUser } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { NextResponse } from "next/server";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();
    if (!user || !userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    // If the user has a subscription, we can create a billing portal session and return the URL
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      })

      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    }

    const stripeSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: user.emailAddresses[0].emailAddress,
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "ZenMelody Pro",
              description: "Unlock unlimited API requests and more",
            },
            unit_amount: 1000, // $10.00
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],

      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (e) {
    console.log("ERROR:STRIPE - ", e);
    return new NextResponse("Internal error", { status: 500 });
  }
}
