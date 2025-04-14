// Desktop: min 768
// Tablet: 375 - 768
// Mobile: max 375

import { type CTAProps, CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema: z.ZodType<CTAProps> = z.object({
  label: z.string(),
  title: z.string(),
  bodyCopy: z.string().optional(),
  button: z
    .object({
      text: z.string(),
      url: z.string(),
    })
    .optional(),
  blocks: z
    .object({
      id: z.string(),
      imageUrl: z.string(),
      url: z.string(),
      title: z.string(),
      subTitle: z.string(),
    })
    .array(),
});

export const App = () => {
  const [CTAValues, setCTAValues] = useState<CTAProps>({
    label: "Label",
    title: "Call-to-action title",
    bodyCopy: "Optional body copy goes here.",
    button: {
      text: "Optional button",
      url: "/",
    },
    blocks: [
      {
        id: "Block1",
        imageUrl: "/image.png",
        url: "/",
        title: "Title",
        subTitle: "Supporting text about the call-to-action goes here.",
      },
      {
        id: "Block2",
        imageUrl: "/image.png",
        url: "/",
        title: "Title 2",
        subTitle: "Supporting text about the call-to-action goes here.",
      },
    ],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "Label",
      title: "Call-to-action title",
      bodyCopy: "Optional body copy goes here.",
      button: {
        text: "Optional button",
        url: "/",
      },
      blocks: [
        {
          id: "Block1",
          imageUrl: "/image.png",
          url: "/",
          title: "Title",
          subTitle: "Supporting text about the call-to-action goes here.",
        },
        {
          id: "Block2",
          imageUrl: "/image.png",
          url: "/",
          title: "Title 2",
          subTitle: "Supporting text about the call-to-action goes here.",
        },
      ],
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    setCTAValues(values);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <Collapsible className="w-96">
          <CollapsibleTrigger>Edit values</CollapsibleTrigger>
          <CollapsibleContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="label"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Label</FormLabel>
                      <FormControl>
                        <Input placeholder="Label" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bodyCopy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body copy</FormLabel>
                      <FormControl>
                        <Input placeholder="Body copy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="px-5 py-12 tablet:px-6 tablet:py-16 desktop:p-16">
        <CTA {...CTAValues} />
      </div>
    </>
  );
};
