// Desktop: min 768
// Tablet: 375 - 768
// Mobile: max 375

import { type CTAProps, CTA } from "@/components/cta";

const CTAValues: CTAProps = {
  label: "Label",
  title: "This is the call to action",
  bodyCopy: "This is an optional body",
  button: {
    text: "This is an optional button",
    url: "/",
  },
  blocks: [
    { id: "Block1", imageUrl: "/image.png", url: "/", title: "Title", subTitle: "Support title" },
    { id: "Block2", imageUrl: "/image.png", url: "/", title: "Title 2", subTitle: "Support title 2" },
  ],
};

export const App = () => {
  return (
    <div className="px-5 py-12 tablet:px-6 tablet:py-16 desktop:p-16">
      <CTA {...CTAValues} />
    </div>
  );
};
