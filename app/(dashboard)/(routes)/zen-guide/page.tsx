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
import { useProModal } from "@/hooks/pro-modal";
import { Bot } from "lucide-react";

export default function ZenGuide() {
  const router = useRouter();
  const proModal = useProModal();
  const [guide, setGuide] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const sampleText = `Create a meditation guide for deep relaxation           your companion towards deeper peace and mindfulness. Enter your prompt
  for generating personalized meditation guide. For example, "Create a
  meditation guide for deep relaxation" and click on Generate.           your companion towards deeper peace and mindfulness. Enter your prompt
  for generating personalized meditation guide. For example, "Create a
  meditation guide for deep relaxation" and click on Generate.`;

  const isLoading = form.formState.isSubmitting;

  const onsubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setGuide(null);
      const response = await axios.post("/api/zen-guide", values);
      setGuide(response.data.choices[0].message.content);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.open();
        return;
      }
      toast.error("An error occurred. Please try again later.");
    } finally {
      router.refresh();
    }
  };

  const formatGuideText = (text: string) => {
    return text.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index !== array.length - 1 && <br />} {/* Add a <br> element except after the last line */}
      </React.Fragment>
    ));
  };

  return (
    <div>
      <Heading>Zen Guide Generator</Heading>
      <div className="mx-8 space-y-4 px-4 lg:px-8 bg-indigo-50 mb-6 py-4 border rounded-xl">
        <h3 className="text-2xl font-bold text-indigo-400">Instructions</h3>
        <p className="text-muted-foreground ">
          Ready to enhance your meditation journey with personalized guidance?
          <br /> <br /> Let{" "}
          <span className="text-indigo-400 font-semibold">Zen Guide AI</span> be
          your companion towards deeper peace and mindfulness. Enter your prompt
          for generating personalized meditation guide. For example, "Create a
          meditation guide for deep relaxation" and click on Generate.
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
                        placeholder="Enter Prompt: What techniques can help me focus better during meditation?"
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
        {!guide && !isLoading && (
          <Empty imageUrl="/mindfulness.svg" label="No guide generated." />
        )}
        {guide && (
          <blockquote className="p-4 mt-6 italic border-l-4 bg-neutral-100 text-neutral-600 border-indigo-400 quote">
            <div className="inline-block mb-2 p-2 rounded-full bg-indigo-400">
              {" "}
              <Bot className="text-white" size={32} />{" "}
            </div>
            <p className="mb-2 ml-2">{formatGuideText(guide)}</p>
          </blockquote>
        )}
      </div>
    </div>
  );
}
