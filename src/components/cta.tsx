import { CTABlock, type CTABlockProps } from "@/components/cta-block";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/headings";
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
    <div className="flex flex-col gap-8 tablet:gap-12 items-center desktop:gap-20">
      <div className="flex flex-col items-center gap-4 tablet:gap-6 tablet:w-[864px]">
        <div className="flex flex-col gap-2 items-center tablet:w-[642px]">
          <Label>{label}</Label>
          <H2 className="text-center text-wrap">{title}</H2>
        </div>
        {bodyCopy && (
          <span className="font-450 text-[17px] tablet:text-[19px] leading-[24px] tracking-[0]">{bodyCopy}</span>
        )}
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
