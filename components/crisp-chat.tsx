"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("98b56e5a-a77b-4d73-954f-65eebe256192");
  }, []);

  return null;
};
