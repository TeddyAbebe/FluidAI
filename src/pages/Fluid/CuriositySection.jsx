import { Heading, Text } from "../../components";
import CuriosityWonderAweSection from "../../components/CuriosityWonderAweSection";
import { Suspense } from "react";

const curiosityBenefitsList = [
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
  { headlineText: "What can curiosity, wonder, and awe do for you?" },
];

export default function CuriosityAndAweSection() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-start justify-center lg:px-5 md:flex-col md:px-5">
        <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
          <Text
            size="text13xl"
            as="p"
            className="w-[68%] text-[56px] font-normal leading-[110%] tracking-[-1.12px] text-white lg:w-full lg:text-[47px] md:w-full md:text-[36px] sm:text-[30px]"
          >
            What can curiosity, wonder, and awe do for you?
          </Text>
          <Heading
            as="h2"
            className="w-[76%] text-[18px] font-medium leading-[130%] tracking-[-0.41px] text-color_white-a700_7f lg:w-full lg:text-[15px] md:w-full"
          >
            Research shows that experiencing curiosity and awe can immensely
            benefit our mental, physical, and professional health. Here is a
            brief overview of what curiosity and awe can do for you.
          </Heading>
        </div>

        <div className="flex flex-1 flex-col gap-[30px] self-center md:self-stretch">
          <Suspense fallback={<div>Loading feed...</div>}>
            {curiosityBenefitsList.map((d, index) => (
              <CuriosityWonderAweSection {...d} key={"benefitsList" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
