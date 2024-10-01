import UserProfile from "../../components/UserProfile";
import { Heading, Text, Img } from "../../components";

export default function HomeSection1() {
  return (
    <>
      {/* Home Section */}
      <div className="relative z-[5] mt-[-6px] flex flex-col items-center">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="ml-5 flex items-center md:ml-0 md:flex-col">
            <div className="flex flex-1 flex-col gap-20 lg:gap-20 md:gap-[60px] md:self-stretch sm:gap-10">
              <div className="relative h-[782px] content-center lg:h-auto md:h-auto">
                <div className="absolute bottom-0 right-[1.76px] top-0 my-auto h-[782px] w-[42%] rounded-[50px] border-[1.07px] border-solid border-gray-800" />
                <Img
                  src="images/img_buttons.png"
                  alt="Button Icons"
                  className="absolute right-[-1px] top-[20%] m-auto h-[186px] w-[44%] object-contain"
                />
                <div className="relative ml-auto mr-[18px] h-[754px] w-[40%] rounded-[38px] bg-[url('/public/images/img_place_your_design_754x350.png')] bg-cover bg-no-repeat lg:mr-0 lg:h-auto md:mr-0 md:h-auto">
                  <div className="mx-[30px] mt-3.5 flex flex-1 flex-col items-start gap-[162px] lg:mx-0 lg:gap-[121px] md:mx-0 md:gap-[121px] sm:gap-[81px]">
                    <div className="flex self-stretch px-1.5">
                      <Heading
                        size="headings"
                        as="h4"
                        className="font-sfprotext text-[25.54px] font-semibold tracking-[-0.61px] text-white lg:text-[21px]"
                      >
                        10:30
                      </Heading>
                    </div>
                    <Heading
                      as="p"
                      className="ml-1.5 text-[18.25px] font-medium text-white lg:text-[15px] md:ml-0"
                    >
                      Fluid AI
                    </Heading>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[754px] flex-1 content-center rounded-[38px] lg:h-auto md:h-auto">
                  <Img
                    src="images/img_place_your_design.png"
                    alt="Placeholder Image"
                    className="mx-auto h-[754px] w-full flex-1 rounded-[38px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[28px] bg-black-0">
                    <UserProfile />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-[1.76px] top-0 my-auto h-[782px] w-[42%] bg-[url('/public/images/img_group_33.svg')] bg-cover bg-no-repeat p-1 lg:h-auto md:h-auto">
                <Img
                  src="images/img_bezel.svg"
                  alt="Bezel Image"
                  className="h-[770px] w-full lg:h-auto md:h-auto"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-[276px] self-end lg:gap-[207px] md:gap-[207px] md:self-auto sm:gap-[138px]">
              <div className="flex flex-col items-start gap-9 self-stretch">
                <Text
                  size="text12xl"
                  as="p"
                  className="w-[84%] text-[32px] font-normal leading-[100%] tracking-[-0.64px] text-white lg:w-full lg:text-[27px] md:w-full md:text-[26px] sm:text-[24px]"
                >
                  Fluid AI: Simplify, Organize, and Achieve More
                </Text>
                <Heading
                  as="p"
                  className="w-[86%] text-[18px] font-medium leading-[130%] tracking-[-0.36px] text-color_white-a700_7f lg:w-full lg:text-[15px] md:w-full"
                >
                  In a world where daily tasks, communication, and goals often
                  become overwhelming, Fluid AI offers an innovative solution.
                  Combining advanced AI technology with a user-friendly
                  interface, it brings together to-do lists, chats, saved items,
                  and bucket lists into one seamless platform.
                </Heading>
              </div>
              <Heading
                as="p"
                className="text-[18px] font-medium tracking-[-0.36px] text-color_white-a700_7f lg:text-[15px]"
              >
                3/4
              </Heading>
            </div>
          </div>
          <div className="relative h-[782px] w-full content-center lg:h-auto md:h-auto">
            <div className="absolute bottom-0 right-[2.26px] top-0 my-auto h-[782px] w-[86%] rounded-[50px] border-[1.07px] border-solid border-gray-800" />
            <Img
              src="images/img_buttons.png"
              alt="Button Icons Alternate"
              className="absolute right-[-0.50px] top-[20%] m-auto h-[186px] w-[86%] object-contain"
            />
            <div className="relative ml-auto mr-[18px] h-[754px] w-[82%] rounded-[38px] bg-[url('/public/images/img_place_your_design_754x350.png')] bg-cover bg-no-repeat lg:mr-0 lg:h-auto md:mr-0 md:h-auto">
              <div className="mx-[30px] mt-3.5 flex flex-1 flex-col items-start gap-[162px] lg:mx-0 lg:gap-[121px] md:mx-0 md:gap-[121px] sm:gap-[81px]">
                <div className="flex self-stretch px-1.5">
                  <Heading
                    size="headings"
                    as="h4"
                    className="font-sfprotext text-[25.54px] font-semibold tracking-[-0.61px] text-white lg:text-[21px]"
                  >
                    10:30
                  </Heading>
                </div>
                <Heading
                  as="p"
                  className="ml-1.5 text-[18.25px] font-medium text-white lg:text-[15px] md:ml-0"
                >
                  Fluid AI
                </Heading>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[754px] flex-1 content-center rounded-[38px] lg:h-auto md:h-auto">
                <Img
                  src="images/img_place_your_design.png"
                  alt="Placeholder Image Alternate"
                  className="mx-auto h-[754px] w-full flex-1 rounded-[38px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[28px] bg-black-0">
                  <UserProfile />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-[1.76px] top-0 z-[34] my-auto h-[782px] w-[42%] bg-[url('/public/images/img_group_33.svg')] bg-cover bg-no-repeat p-1 lg:h-auto md:h-auto">
              <Img
                src="images/img_bezel.svg"
                alt="Bezel Image Second Alternate"
                className="h-[770px] w-full lg:h-auto md:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
