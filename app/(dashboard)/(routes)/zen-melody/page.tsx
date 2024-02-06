"use client";

import React from "react";
import axios from "axios";
import Heading from "@/components/heading";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import Empty from "@/components/empty";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ZenMelody() {
  const router = useRouter();
  const [music, setMusic] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onsubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(null);

      const response = await axios.post("/api/zen-melody", values);
      console.log(response);

      setMusic(response.data);
      form.reset();
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      router.refresh(); // all components will be re-rendered
    }
  };

  return (
    <div>
      <Heading>Zen Music Generator</Heading>
      <div className="mx-8 space-y-4 px-4 lg:px-8 bg-indigo-50 mb-6 py-4 border rounded-xl">
        <h3 className="text-2xl font-bold text-indigo-400">Instructions</h3>
        <p className="text-muted-foreground ">
          Enter your prompt for generating meditation music.
          <br />{" "}
          <span className="text-indigo-400 font-semibold">
            ZenMelody AI
          </span>{" "}
          will generate a unique ambient music for you.
        </p>
      </div>
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onsubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter Prompt: Create an ambient meditation music for deep relaxation"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="col-span-12 w-full lg:col-span-2 bg-indigo-400 hover:bg-indigo-500 text-white rounded-lg p-2"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}
        {!music && !isLoading && (
          <Empty imageUrl="/music.svg" label="No music generated." />
        )}
        {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
      </div>
    </div>
  );
}
