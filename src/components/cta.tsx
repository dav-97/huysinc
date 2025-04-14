import { CTABlock, type CTABlockProps } from "@/components/cta-block";
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
  blocks: CTABlockProps[];
};

export const CTA = ({ label, title, bodyCopy, button, blocks }: CTAProps) => {
  return (
    <div className="flex flex-col gap-8 tablet:gap-12 desktop:gap-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 items-center">
          <Label>{label}</Label>
          <span>{title}</span>
        </div>
        {bodyCopy && <span>{bodyCopy}</span>}
        {button && (
          <Button asChild>
            <a href={button.url}>
              {button.text} <ArrowRight />
            </a>
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        {blocks.map((block) => (
          <CTABlock {...block} key={block.id} />
        ))}
      </div>
    </div>
  );
};
