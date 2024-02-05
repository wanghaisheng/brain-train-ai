import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

import { MAX_FREE_COUNTS } from "@/constants";

export const incrementApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  // If the user has not used the API before, create a new record
  if (!userApiLimit) {
    await prismadb.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  } else {
    // If the user has used the API before, increment the count
    await prismadb.userApiLimit.update({
      where: {
        userId, 
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return true;
  }

  return userApiLimit.count < MAX_FREE_COUNTS;
}
