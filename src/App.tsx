import { type CTAProps, CTA } from "@/components/cta";

const CTAValues: CTAProps = {
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
};

export const App = () => {
  return (
    <div className="px-5 py-12 tablet:px-6 tablet:py-16 desktop:p-16">
      <CTA {...CTAValues} />
    </div>
  );
};
