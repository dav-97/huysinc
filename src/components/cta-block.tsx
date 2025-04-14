import { Button } from "@/components/ui/button";
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
    <div className="relative">
      <img className="size-full" src={imageUrl} alt={title} />
      <div className="absolute flex flex-row bottom-0 p-4 w-full items-end">
        <div className="flex flex-col flex-1 gap-2">
          <span className="font-semibold text-white text-[22px] tablet:text-[28px]">{title}</span>
          <span className="font-[450] text-[17px] tablet:text-[19px] text-[#FAFAFA]/50">{subTitle}</span>
        </div>
        <Button asChild size="icon" variant="icon">
          <a href={url}>
            <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  );
};
