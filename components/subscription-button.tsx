"use client"

import React, {useState} from 'react'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import axios from 'axios'

interface SubscriptionButtonProps {
  isPro: boolean;
}

export default function SubscriptionButton(
  isPro: SubscriptionButtonProps
) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
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
    <Button
    disabled={loading}
    onClick={onClick}
    className="w-full md:w-auto md:px-3 text-white bg-gradient-to-r from-indigo-400 to-pink-500 hover:bg-indigo-500 hover:scale-110 px-4 py-2 rounded-lg font-bold transition-transform duration-150 ease-in-out"
  >
    {isPro? "Manage Subscription" : "Unlock Pro"}
    {!isPro && 
      <Zap className="h-5 w-5 ml-1" />
}
  </Button>
  )
}
