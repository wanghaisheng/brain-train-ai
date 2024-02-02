"use client";

import React from "react";
import Heading from "@/components/heading";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface Quote {
  quote: string;
  author: string;
}

export default function ZenQuotes() {
  // Example quote and author. Replace with dynamic data if needed.
  const [quotes, setQuotes] = React.useState<Quote[]>([]);
  const isLoading = false;

  const onsubmit = async () => {
    try {
      const response = await axios.get("/api/zen-quotes");
      const data = response.data[0];
      const newQuote = {
        quote: data.q,
        author: data.a,
      };

      setQuotes((prevQuotes) => [...prevQuotes, newQuote]);
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Heading>Zen Quotes</Heading>
      <div className="mx-8 space-y-4 px-4 lg:px-8 bg-indigo-50 mb-6 py-4 border rounded-xl">
        <h3 className="text-2xl font-bold text-indigo-400">Instructions</h3>
        <p className="text-muted-foreground ">
          Click the button below to see a Zen quote.
        </p>
      </div>
      <div className="px-4 lg:px-8">
        <div className="flex justify-end px-4 lg:px-8">
          {/* This container helps align the button as needed on larger screens */}
          <div className="md:w-auto w-full">
            <Button
              onClick={onsubmit}
              className="w-full md:w-auto md:px-6 bg-indigo-400 hover:bg-indigo-500 text-white rounded-lg p-2"
            >
              Generate
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 mx-8 my-6 px-4 lg:px-8">
        {quotes.map((quote, index) => (
          <blockquote key={index} className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-indigo-400 quote">
          <p className="mb-2">{quote.quote}</p>
          <cite className="block text-right font-semibold">— {quote.author}</cite>
        </blockquote>
        ))}
      </div>
    </div>
  );
}
