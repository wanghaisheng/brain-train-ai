"use client";

import React, { useState} from "react";
import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/pro-modal";
import { AudioLines } from "lucide-react";
import { Zap } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function ProModal() {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe")
      window.location.href = response.data.url;

    } catch (error: any) {
      console.error("STRIPE Client Error: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.close}>
      {/* <DialogOverlay /> */}
      <DialogContent>
        <div className="mx-auto">
          <Link href="/dashboard" className="flex items-center">
            <div className="flex items-center">
              <AudioLines className="h-10 w-10 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-bold text-cyan-400">ZenMelody</h1>
          </Link>
        </div>

        <div className="flex flex-col items-center p-8">
          <h2 className="text-2xl font-bold">Unlock Pro Features</h2>
          <p className="text-gray-500 mt-4 mb-8">
            Upgrade to unlock premium features and unlimited access to
            ZenMelody.
          </p>
          <Button 
            onClick={onSubscribe}
          className="text-white bg-gradient-to-r from-indigo-400 to-pink-500 hover:bg-indigo-500 hover:scale-110 px-4 py-2 rounded-lg font-bold transition-transform duration-150 ease-in-out">
            Unlock Pro
            <Zap className="h-5 w-5 ml-1" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
