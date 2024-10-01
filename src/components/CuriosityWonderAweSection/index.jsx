import { Img, Heading } from "./..";
import React from "react";

export default function CuriosityWonderAweSection({
  headlineText = "What can curiosity, wonder, and awe do for you?",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-3 flex-1`}
    >
      <div className="self-stretch">
        <div className="flex items-center justify-between gap-5">
          <Heading
            as="p"
            className="text-[18px] font-medium tracking-[-0.36px] text-white sm:text-[15px]"
          >
            {headlineText}
          </Heading>
          <Img
            src="images/img_icons_34x34.svg"
            alt="Decorative Image"
            className="h-[24px] w-[24px]"
          />
        </div>
      </div>
      <div className="h-px w-full self-stretch bg-white_40" />
    </div>
  );
}
