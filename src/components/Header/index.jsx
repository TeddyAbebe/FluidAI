/* eslint-disable react/prop-types */
import { Heading } from "./..";

export default function Header({ className, ...props }) {
  return (
    <header
      {...props}
      className={`${className} flex sm:flex-col justify-between items-center w-[92%] lg:w-full md:w-full gap-5 lg:px-5 md:px-5`}
    >
      <ul className="flex flex-wrap gap-[76px] md:gap-5">
        <li>
          <a href="#">
            <Heading
              size="text4xl"
              as="p"
              className="text-[16px] font-medium tracking-[-0.41px] text-white"
            >
              Our Features
            </Heading>
          </a>
        </li>
        <li>
          <a href="#">
            <Heading
              size="text4xl"
              as="p"
              className="text-[16px] font-medium tracking-[-0.41px] text-white"
            >
              Areas
            </Heading>
          </a>
        </li>
      </ul>
      <ul className="flex flex-wrap gap-[76px] md:gap-5">
        <li>
          <a href="#">
            <Heading
              size="text4xl"
              as="p"
              className="text-[16px] font-medium tracking-[-0.41px] text-white"
            >
              FAQS
            </Heading>
          </a>
        </li>
        <li>
          <a href="#">
            <Heading
              size="text4xl"
              as="p"
              className="text-[16px] font-medium tracking-[-0.41px] text-white"
            >
              The Waitlist
            </Heading>
          </a>
        </li>
      </ul>
    </header>
  );
}
