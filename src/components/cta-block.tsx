import { Button } from "@/components/ui/button";
import { H4 } from "@/components/ui/headings";
import { ArrowRight } from "lucide-react";

export type CTABlockProps = {
  id: string;
  title: string;
  subTitle: string;
  url: string;
  imageUrl: string;
};

export const CTABlock = ({ imageUrl, subTitle, title, url }: CTABlockProps) => {
  return (
    <div className="relative tablet:aspect-2/3 desktop:aspect-auto rounded-lg overflow-hidden">
      <img className="size-full object-cover" src={imageUrl} alt={title} />
      <div className="absolute bottom-0 top-1/2 w-full bg-linear-to-t from-[#141414] to-[#141414]/0" />
      <div className="absolute flex flex-row bottom-0 p-4 w-full items-end">
        <div className="flex flex-col flex-1 gap-2">
          <H4 className="text-white">{title}</H4>
          <span className="font-450 text-[17px] tablet:text-[19px] leading-[24px] tracking-[0] text-[#FAFAFA]/50">
            {subTitle}
          </span>
        </div>
        <Button asChild size="icon" variant="icon">
          <a href={url}>
            <ArrowRight className="size-6" />
          </a>
        </Button>
      </div>
    </div>
  );
};
