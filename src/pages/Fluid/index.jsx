import { Helmet } from "react-helmet";
import { Img, Button, SelectBox, Input, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import CuriosityAndAweSection from "./CuriosityAndAweSection";
import HomeMainSection from "./HomeMainSection";
import HomeSection from "./HomeSection";
import HomeSection1 from "./HomeSection1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FluidPage() {
  return (
    <>
      {" "}
      {/* Fragment added to wrap return */}
      <Helmet>
        <title>
          Home Features - Discover Fluid AI&#39;s Seamless Efficiency
        </title>
        <meta
          name="description"
          content="Explore the home of Fluid AI where efficiency meets innovation. Join the waitlist, book flights, find top-rated restaurants, and organize your life with our ad"
        />
      </Helmet>
      <div className="w-full bg-black-900">
        <div className="flex flex-col gap-[196px] lg:gap-[147px] md:gap-[147px] sm:gap-[98px]">
          <div>
            <div className="flex flex-col items-center gap-[342px] bg-gradient py-11 lg:gap-64 md:gap-64 md:py-5 sm:gap-[171px] sm:py-4">
              <Header />
              <div className="container-xs mb-[116px] flex flex-col items-center gap-[302px] px-14 lg:gap-[226px] lg:px-5 md:gap-[226px] md:px-5 sm:gap-[151px]">
                <div className="ml-5 flex items-center gap-12 md:ml-0 md:flex-col">
                  <Img
                    src="images/img_union.png"
                    alt="Union Logo"
                    className="h-[150px] w-[24%] object-contain md:w-full"
                  />
                  <Img
                    src="images/img_fluid_ai.svg"
                    alt="Fluid Ai Logo"
                    className="h-[132px] w-[74%] object-contain md:w-full"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Img
                    src="images/img_menu.svg"
                    alt="Menu Icon"
                    className="h-[36px] w-[36px]"
                  />
                  <Heading
                    as="h1"
                    className="text-[18px] font-medium tracking-[-0.18px] text-white lg:text-[15px]"
                  >
                    Scroll down
                  </Heading>
                </div>
              </div>
            </div>
            {/* home section */}
            <HomeSection />
          </div>
          <div className="relative z-[4] mt-[-32px]">
            <div className="flex flex-col items-center justify-end bg-black-900 py-[86px] lg:py-8 md:py-5 sm:py-4">
              <div className="container-xs mt-28 flex flex-col gap-[120px] px-5 lg:gap-[90px] md:gap-[90px] sm:gap-[60px]">
                <div className="ml-60 mr-[220px] flex flex-col items-center gap-6 md:mx-0">
                  <Heading
                    as="p"
                    className="text-[18px] font-medium tracking-[-0.41px] text-color_white-a700_7f lg:text-[15px]"
                  >
                    Our Features
                  </Heading>
                  <Text
                    size="text15xl"
                    as="p"
                    className="self-stretch text-center text-[80px] font-normal leading-[100%] tracking-[-1.60px] text-white lg:text-[48px] md:text-[48px]"
                  >
                    Fluid AI was born out of a desire to simplify and streamline
                    modern life
                  </Text>
                </div>
                <div className="flex items-center md:flex-col">
                  <div className="flex w-[32%] flex-col items-start gap-[276px] self-end lg:gap-[207px] md:w-full md:gap-[207px] md:self-auto sm:gap-[138px]">
                    <div className="flex flex-col items-start gap-9 self-stretch">
                      <Text
                        size="text12xl"
                        as="p"
                        className="w-[80%] text-[32px] font-normal leading-[100%] tracking-[-0.64px] text-white lg:w-full lg:text-[27px] md:w-full md:text-[26px] sm:text-[24px]"
                      >
                        Fluid AI: Simplify, Organize, and Achieve More
                      </Text>
                      <Heading
                        as="p"
                        className="w-[86%] text-[18px] font-medium leading-[130%] tracking-[-0.36px] text-color_white-a700_7f lg:w-full lg:text-[15px] md:w-full"
                      >
                        In a world where daily tasks, communication, and goals
                        often become overwhelming, Fluid AI offers an innovative
                        solution. Combining advanced AI technology with a
                        user-friendly interface, it brings together to-do lists,
                        chats, saved items, and bucket lists into one seamless
                        platform.
                      </Heading>
                    </div>
                    <Heading
                      as="p"
                      className="text-[18px] font-medium tracking-[-0.36px] text-color_white-a700_7f lg:text-[15px]"
                    >
                      1/4
                    </Heading>
                  </div>
                  <div className="relative h-[782px] flex-1 content-center px-[58px] lg:h-auto md:h-auto md:w-full md:flex-none md:self-stretch md:px-5 sm:px-4">
                    <div className="absolute bottom-0 left-[7%] top-0 my-auto h-[782px] w-[46%] rounded-[50px] border-[1.07px] border-solid border-gray-800" />
                    <Img
                      src="images/img_buttons.png"
                      alt="Button Image"
                      className="absolute left-[6%] top-[20%] m-auto h-[186px] w-[48%] object-contain"
                    />
                    <div className="relative ml-[18px] h-[754px] w-[44%] rounded-[38px] bg-[url(/public/images/img_place_your_design_754x350.png)] bg-cover bg-no-repeat lg:ml-0 lg:h-auto md:ml-0 md:h-auto">
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
                          alt="Design Image"
                          className="mx-auto h-[754px] w-full flex-1 rounded-[38px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[28px] bg-black-0">
                          <UserProfile />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-[7%] top-0 my-auto h-[782px] w-[46%] bg-[url(/public/images/img_group_33.svg)] bg-cover bg-no-repeat p-1 lg:h-auto md:h-auto">
                      <Img
                        src="images/img_bezel.svg"
                        alt="Bezel Image"
                        className="h-[770px] w-full lg:h-auto md:h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* home section */}
              <HomeSection1 />
            </div>
          </div>
          {/* home main section */}
          <HomeMainSection />
          {/* curiosity and awe section */}
          <CuriosityAndAweSection />
          <div className="flex flex-col gap-10">
            <div className="relative h-[740px] content-end lg:h-auto md:h-auto">
              <Img
                src="images/img_rectangle_831139_466x794.png"
                alt="Product Image"
                className="absolute bottom-[0.57px] left-0 m-auto h-[466px] w-[52%] object-contain"
              />
              <Img
                src="images/img_rectangle_831142.png"
                alt="Product Image"
                className="mb-[148px] h-[358px] w-[66%] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[740px] flex-1 bg-[url(/public/images/img_group_77.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="h-[740px] bg-[url(/public/images/img_group_78.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                  <div className="mt-10 flex items-start justify-center md:flex-col">
                    <div className="relative z-[39] mt-[98px] flex w-[32%] flex-col gap-[26px] md:w-full md:px-5">
                      <Text
                        size="text15xl"
                        as="p"
                        className="text-[80px] font-normal leading-[110%] tracking-[-1.60px] text-white lg:text-[48px] md:text-[48px]"
                      >
                        Join the Fluid AI Waitlist Today!
                      </Text>
                      <div className="flex flex-col items-start gap-8">
                        <Input
                          shape="square"
                          type="text"
                          name="name"
                          placeholder={"Name"}
                          className="w-[82%] !border-b px-3"
                        />
                        <Input
                          shape="square"
                          type="email"
                          name="email"
                          placeholder={"Email"}
                          className="w-[82%] !border-b px-3"
                        />
                        <SelectBox
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_icons_white_24x24.svg"
                              alt="Icons"
                              className="h-[24px] w-[24px]"
                            />
                          }
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_image_24x24.png"
                                alt="Image"
                                className="h-[24px] w-[24px]"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          name="image"
                          placeholder={"United Arab Emirates"}
                          options={dropDownOptions}
                          className="w-[82%] gap-2 !border-b"
                        />
                        <Button
                          color="white"
                          size="2xl"
                          variant="fill"
                          className="min-w-[166px] rounded-[26px] px-[34px] font-medium sm:px-4"
                        >
                          Join Waitlist
                        </Button>
                      </div>
                    </div>
                    <Img
                      src="images/img_mask_group_698x1096.png"
                      alt="Masked Image"
                      className="relative ml-[-178px] h-[698px] w-[64%] self-center object-contain md:ml-0 md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
