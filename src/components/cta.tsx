import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export type CTAProps = {
  label: string;
  title: string;
  bodyCopy?: string;
  button?: {
    text: string;
    url: string;
  };
  blocks: {
    id: string;
    title: string;
    subTitle: string;
    url: string;
    imageUrl: string;
  }[];
};

export const CTA = ({ label, title, bodyCopy, button, blocks }: CTAProps) => {
  return (
    <div className="flex flex-col items-center">
      <Label>{label}</Label>
      <span>{title}</span>
      {bodyCopy && <span>{bodyCopy}</span>}
      {button && (
        <Button asChild>
          <a href={button.url}>
            {button.text} <ArrowRight />
          </a>
        </Button>
      )}
      <div className="grid grid-cols-2">
        {blocks.map(({ id, imageUrl, subTitle, title, url }) => (
          <div key={id} className="relative">
            <img className="size-full" src={imageUrl} alt={title} />
            <div className="absolute flex flex-row bottom-0 m-4">
              <div className="flex flex-col flex-1">
                <span>{title}</span>
                <span>{subTitle}</span>
              </div>
              <Button asChild>
                <a href={url}>
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
