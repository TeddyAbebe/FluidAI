/* eslint-disable react/prop-types */
import { Heading, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex items-start p-[38px] sm:p-4`}
    >
      <div className="mx-auto mb-[174px] flex w-full max-w-[1444px] items-start justify-between gap-5 md:flex-col ">
        <div className="flex flex-col items-start gap-[34px]">
          <Img
            src="i,ages/img_footer_logo.png"
            alt="Footer Logo"
            className="h-[44px] w-full object-contain lg:h-auto lg:w-[206px] md:h-auto md:w-[206px]"
          />

          <Heading
            size="text4xl"
            as="p"
            className="ml-1.5 text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f lg:text-[13px] md:ml-0"
          >
            2024 Fluid AI
          </Heading>
        </div>

        <div className="flex w-[24%] items-start justify-between gap-5 self-center md:w-full">
          <ul className="flex w-[70%] flex-col items-start gap-4 self-center bg-black-0 ">
            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>
            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>

            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>

            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>

            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>

            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>

            <li>
              <a href="/" className="lg:text-[13px]">
                <Heading
                  size="text4xl"
                  as="p"
                  className="text-[16px] font-medium tracking-[-0.41px] text-color_white-a700_7f"
                >
                  Our Features
                </Heading>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
