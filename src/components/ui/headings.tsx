import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export const H1 = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "font-semibold text-[48px] tablet:text-[80px] leading-[48px] tablet:leading-[80px] tracking-[-3%] tablet:tracking-[-4%]",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "font-semibold text-[36px] tablet:text-[40px] leading-[40px] tablet:leading-[48px] tracking-[-2%] tablet:tracking-[-3%]",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "font-semibold text-[28px] tablet:text-[34px] leading-[32px] tablet:leading-[40px] tracking-[-2%]",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "font-semibold text-[23px] tablet:text-[28px] leading-[24px] tablet:leading-[32px] tracking-[-2%]",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
