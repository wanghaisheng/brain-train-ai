import React from "react";
import Heading from "@/components/heading";
import {
  checkSubscription,
  getSubscriptionPeriodEnd,
} from "@/lib/subscription";
import SubscriptionButton from "@/components/subscription-button";

export default async function SettingsPage() {
  const isPro = await checkSubscription();
  const subscriptionPeriodEnd = await getSubscriptionPeriodEnd();

  return (
    <div>
      <Heading>Settings</Heading>
      
      <div
        className="bg-indigo-100 border-l-4 border-indigo-500 text-blue-500 p-4"
        role="alert"
      >
        <p className="font-bold">Coming Soon!</p>
        <p>
          The Pro version is currently under development. Stay tuned for
          updates!
        </p>
      </div>

      <div className="mt-8 px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
          <br />
          <br />

          {subscriptionPeriodEnd && (
            <span>
              Your subscription will renew on{" "}
              {subscriptionPeriodEnd.toLocaleDateString()}
            </span>
          )}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
}
