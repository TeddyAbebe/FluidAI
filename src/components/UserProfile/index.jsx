import { Button, Img, Text, Heading } from "./..";
import React from "react";

export default function UserProfile({
  headerText = "Speaking to Fluid AI",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center bg-black-1 rounded-[28px]`}
    >
      <div className="relative h-[754px] content-center self-stretch rounded-[28px]">
        <Img
          src="images/img_image_283.png"
          alt="Top Image"
          className="mx-auto h-[754px] w-full flex-1 rounded-[28px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[754px] flex-1 content-center">
          <Img
            src="images/img_image_284.png"
            alt="Header Stack"
            className="mx-auto h-[754px] w-full flex-1 rounded-[28px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
            <>
              <div>
                <div className="flex items-end p-1.5">
                  <div className="flex w-full px-[18px]">
                    <Heading
                      size="headingxs"
                      as="p"
                      className="font-sfprotext text-[15.12px] font-semibold tracking-[-0.36px] text-white"
                    >
                      9:41
                    </Heading>
                  </div>
                  <div className="mb-1.5 flex w-full items-center justify-end">
                    <Img
                      src="images/img_user.svg"
                      alt="User Icon"
                      className="h-[8px]"
                    />
                    <Img
                      src="images/img_settings.svg"
                      alt="Settings Icon"
                      className="ml-1.5 h-[8px]"
                    />
                    <Img
                      src="images/img_computer.svg"
                      alt="Computer Icon"
                      className="ml-1 h-[10px]"
                    />
                  </div>
                </div>
                <div className="relative mt-[-40px] flex flex-wrap items-end justify-between gap-5 px-3 py-1.5">
                  <Img
                    src="images/img_arrow_left_white.svg"
                    alt="Back Arrow"
                    className="mt-[54px] h-[20px] w-[20px]"
                  />
                  <Text
                    size="text2xl"
                    as="p"
                    className="text-[14.24px] font-medium text-white"
                  >
                    {headerText}
                  </Text>
                  <Img
                    src="images/img_icons.svg"
                    alt="Menu Icons"
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
              <Text
                size="text10xl"
                as="p"
                className="mt-[246px] text-center text-[28.47px] font-normal leading-[100%] tracking-[-0.57px] text-white"
              >
                <span className="text-white">
                  Hi! Can you find me top-rated restaurants with a&nbsp;
                </span>
                <span className="text-white">nice view</span>
              </Text>
              <div className="relative mt-28 h-[250px]">
                <Img
                  src="images/img_rectangle_831027.png"
                  alt="Background Image"
                  className="absolute bottom-[-1.30px] left-0 right-0 m-auto h-[162px] w-full flex-1 rotate-[-180deg] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[250px] flex-1 content-center">
                  <Img
                    src="images/img_11111.png"
                    alt="Input Image"
                    className="mx-auto h-[250px] w-full flex-1 object-cover"
                  />
                  <div className="absolute bottom-[-0.99px] left-0 right-0 m-auto flex-1">
                    <div className="flex flex-col items-center">
                      <Text
                        size="text2xl"
                        as="p"
                        className="text-[14.24px] font-normal text-white"
                      >
                        Go ahead, I'm listening
                      </Text>
                      <div className="mx-3.5 mt-[30px] flex items-center justify-between gap-5 self-stretch">
                        <Button
                          color="black_900_99"
                          size="lg"
                          variant="fill"
                          className="w-[42px] rounded-[20px] border-[0.83px] border-solid border-white px-2.5"
                        >
                          <Img src="images/img_icons_white.svg" />
                        </Button>
                        <div className="w-[34%] rounded-[54px] border-[0.89px] border-solid border-white_10 bg-white p-3.5">
                          <div className="rounded-[40px] border-[0.89px] border-solid border-white_10 bg-white p-3.5">
                            <div className="flex flex-col items-center rounded-[24px] border-[0.89px] border-solid border-white_10 bg-white p-2.5">
                              <Img
                                src="images/img_mic.svg"
                                alt="Mic Icon"
                                className="h-[28px] w-[28px]"
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          color="black_900_99"
                          size="lg"
                          variant="fill"
                          className="w-[42px] rounded-[20px] border-[0.83px] border-solid border-white px-2.5"
                        >
                          <Img src="images/img_icons_white_42x42.svg" />
                        </Button>
                      </div>
                      <div className="flex justify-center self-stretch">
                        <div className="mt-3.5 h-[4.48px] w-[34%] rounded-sm bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
