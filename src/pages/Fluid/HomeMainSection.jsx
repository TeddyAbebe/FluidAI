import { Img, Text, Button } from "../../components";

export default function HomeMainSection() {
  return (
    <div className="flex flex-col items-center gap-[60px] sm:gap-[30px]">
      <div className="container-xs flex flex-col items-start lg:px-5 md:px-5">
        <Text
          size="text13xl"
          as="p"
          className="w-[54%] text-[56px] font-normal leading-[110%] tracking-[-1.12px] text-white lg:w-full lg:text-[47px] md:w-full md:text-[36px] sm:text-[30px]"
        >
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </Text>
      </div>

      <div className="relative h-[900px] self-stretch lg:h-auto md:h-auto">
        <Img
          src="images/img_rectangle_831139.png"
          alt="Decorative Image"
          className="absolute bottom-[12%] left-0 m-auto h-[520px] w-[52%] object-contain"
        />
        <Img
          src="images/img/rectangle_831142.png"
          alt="Product Image"
          className="mt-[230px] h-[358px] w-[66%] object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[900px] flex-1 bg-[url(/public/images/img_group_71.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div className="h-[900px] bg-[url(/public/images/img_group_72.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="relative h-[900px] bg-[url(/public/images/img_group_73.png)] bg-cover bg-no-repeat">
              <div className="absolute bottom-px left-0 right-0 m-auto flex flex-1 flex-col items-center">
                <div className="container-xs relative z-[36] flex flex-col items-end pl-14 pr-[328px] lg:px-5 md:px-5">
                  <Button
                    color="gray-700"
                    size="3xl"
                    variant="fill"
                    className="w-[58px] rounded-[28px] border border-solid border-white px-4"
                  >
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                </div>

                <div className="relative mt-[-58px] flex flex-col items-center self-stretch">
                  <div className="container-xs relative z-[35] flex flex-col items-start pl-[348px] pr-14 lg:px-5 md:px-5">
                    <Button
                      color="gray-700"
                      size="3xl"
                      variant="fill"
                      className="w-[58px] rotate-[-180deg] rounded-[28px] border border-solid border-white px-4"
                    >
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                  </div>

                  <div className="relative mt-[-44px] flex justify-center self-stretch bg-gradient2 py-[140px] lg:py-8 md:py-5 sm:py-4">
                    <div className="container-xs mt-[180px] flex justify-center px-14 lg:px-5 md:px-5">
                      <div className="flex w-[8%] justify-between gap-5 lg:w-full md:w-full">
                        <div className="ml-5 h-[6px] w-[6px] rounded-[3px] bg-white" />
                        <div className="h-[6px] w-[6px] rounded-[3px] bg-white-a700-7f" />
                        <div className="h-[6px] w-[6px] rounded-[3px] bg-white-a700-7f" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 top-0 z-[37] m-auto flex h-max w-[36%] flex-col items-start gap-[342px] rounded-[32px] border border-solid border-white_40 bg-gradient1 px-[30px] py-[22px] lg:gap-64 md:gap-64 sm:gap-[171px] sm:p-4">
                    <Text
                      size="text9xl"
                      as="p"
                      className="mt-1.5 w-[60%] text-[24px] font-medium leading-[120%] tracking-[-0.48px] text-white lg:w-full lg:text-[20px] md:w-full"
                    >
                      Fluid has Internet access, so you can get up-to-date
                      information from it.
                    </Text>
                    <Text
                      size="text13xl"
                      as="p"
                      className="text-[56px] font-normal tracking-[-1.12px] text-white lg:text-[47px] md:text-[36px] sm:text-[30px]"
                    >
                      Time for work
                    </Text>
                  </div>

                  <Img
                    src="images/img_mask_group.png"
                    alt="Image"
                    className="absolute right-[18%] top-0 z-[38] m-auto h-[192px] w-[34%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
