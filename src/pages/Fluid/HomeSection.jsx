import { Button, Heading, Text, Img } from "../../components";

export default function HomeSection() {
  return (
    <div className="relative mt-[-134px] h-[1282px] bg-[url(/public/images/img_group_2477.png)] bg-cover bg-no-repeat py-[174px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
      <div className="absolute bottom-[23%] left-0 right-0 mx-[38px] my-auto flex-1 lg:mx-0 md:mx-0">
        <div className="relative z-[1] flex items-start justify-between gap-5">
          <Button
            color="white"
            size="2xl"
            variant="fill"
            className="ml-[650px] mt-3.5 min-w-[166px] self-end rounded-[26px] px-[34px] font-medium sm:px-4"
          >
            Join Waitlist
          </Button>
          <Button
            color="gray 900"
            size="xl"
            variant="fill"
            className="min-w-[136px] rounded-[24px] border border-solid border-white px-[25px] sm:px-4"
          >
            Trip ideas
          </Button>
        </div>

        <div className="relative mx-[154px] mt-[-2px] flex items-center md:mx-0 md:flex-col">
          <div className="mb-4 flex flex-1 flex-col items-end gap-2 self-end pl-14 pr-[262px] lg:pr-8 md:self-stretch md:px-5 sm:self-auto">
            <Img
              src="images/img_menu.svg"
              alt="Menu Image"
              className="mr-[26px] h-[36px] w-[36px] md:mr-0"
            />
            <Heading
              as="h2"
              className="text-[18px] font-medium tracking-[-0.18px] text-white lg:text-[15px]"
            >
              Scroll down
            </Heading>
          </div>
          <div className="relative h-[288px] w-[22%] content-center rounded-[24px] border-[1.56px] border-solid border-white lg:h-auto md:h-auto md:w-full md:px-5">
            <Img
              src="images/img_rectangle_149996.png"
              alt="Feature Image"
              className="mx-auto h-[288px] w-full flex-1 rounded-[24px] object-cover"
            />
            <div className="absolute bottom-[15.54px] left-0 right-0 mx-[18px] my-auto flex flex-1 flex-col gap-1.5 lg:mx-0 md:mx-0">
              <div className="flex flex-col items-start">
                <Heading
                  as="h3"
                  className="text-[18.71px] font-normal text-white_60 lg:text-[15px]"
                >
                  Reservations
                </Heading>
                <Text
                  size="text9xl"
                  as="p"
                  className="text-[24.94px] font-normal text-white lg:text-[20px]"
                >
                  Restaurant Le Bous
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_icons.svg"
                  alt="Social Icons"
                  className="h-[20px] w-[20px]"
                />
                <Heading
                  as="h4"
                  className="text-[18.71px] font-normal text-white_60 lg:text-[15px]"
                >
                  4 Oct 20:00
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[22px] flex flex-1 items-center md:flex-col">
        <div className="flex flex-1 flex-col items-center gap-[60px] self-end md:self-stretch md:px-5 sm:gap-[30px] sm:self-auto">
          <div className="mx-[246px] flex items-center justify-end gap-[13px] self-stretch md:mx-0 md:flex-col">
            <Img
              src="images/img_contrast.svg"
              alt="Contrast Image"
              className="h-[36px] md:w-full"
            />
            <Img
              src="images/img_fluid_ai.svg"
              alt="Fluid Ai Image"
              className="h-[32px] w-[20%] object-contain md:w-full"
            />
          </div>
          <Text
            size="text15xl"
            as="p"
            className="w-[60%] self-end text-center text-[80px] font-normal leading-[110%] tracking-[-1.60px] text-white lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
          >
            Unlock Seamless Efficiency
          </Text>
        </div>

        <div className="mb-2 flex w-[28%] flex-col items-end gap-[42px] md:w-full md:px-5">
          <div className="flex flex-col items-start gap-0.5 self-start rounded-[24px] border border-solid border-white bg-gray-900_4c px-[18px] py-4">
            <Heading
              as="h5"
              className="text-[18.71px] font-normal text-white_60 lg:text-[15px]"
            >
              Next To-Do
            </Heading>
            <Text
              size="text9xl"
              as="p"
              className="text-[24.94px] font-normal text-white lg:text-[20px]"
            >
              Renew Car insurance
            </Text>
          </div>
          <div className="mr-2 flex w-[66%] flex-col items-end justify-center gap-4 rounded-[24px] border border-solid border-white_10 bg-gray-900_4c px-[18px] py-3.5 lg:w-full md:mr-0 md:w-full">
            <Img
              src="images/img_user_40x90.png"
              alt="User"
              className="h-[40px] w-[36%] object-contain"
            />
            <div className="flex flex-col gap-2 self-stretch">
              <div className="flex flex-col items-start justify-center">
                <Heading
                  as="p"
                  className="text-[18.71px] font-normal text-white_60 lg:text-[15px]"
                >
                  Upcoming Events
                </Heading>
                <Text
                  size="text9xl"
                  as="p"
                  className="text-[24.94px] font-normal text-white lg:text-[20px]"
                >
                  Kite Beach
                </Text>
              </div>
              <div className="flex items-center gap-[7px]">
                <Img
                  src="images/img_icons.svg"
                  alt="Icons"
                  className="h-[20px] w-[20px]"
                />
                <Heading
                  as="p"
                  className="text-[18.71px] font-normal text-white_60 lg:text-[15px]"
                >
                  10:00 - 14:00
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
