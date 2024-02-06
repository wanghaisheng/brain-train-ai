import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const checkSubscription = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    return false;
  }

  const isValid = userSubscription.stripePriceId && 
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now(); // 1 day grace period
  return !!isValid;
}

export const getSubscriptionPeriodEnd = async () => {
  const { userId } = auth();
  if (!userId) {
    return null;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeCurrentPeriodEnd: true,
    },
  });

  return userSubscription?.stripeCurrentPeriodEnd;
}