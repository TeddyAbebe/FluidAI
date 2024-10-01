import { Heading } from "./..";

export default function Header({ className = "", ...props }) {
  const menuItems = [
    { text: "Our Features", link: "#" },
    { text: "Areas", link: "#" },
    { text: "FAQS", link: "#" },
    { text: "The WaitList", link: "#" },
  ];

  return (
    <header
      {...props}
      className={`${className} flex sm:flex-col justify-between items-center w-[92%] lg:w-full md:w-full gap-5 lg:px-5 md:px-5`}
    >
      <ul className="flex flex-wrap gap-[76px] md:gap-5">
        {menuItems.slice(0, 2).map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <Heading
                size="text4xl"
                as="p"
                className="text-[16px] font-medium tracking-[-0.41px] text-white"
              >
                {item.text}
              </Heading>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-[76px] md:gap-5">
        {menuItems.slice(2).map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <Heading
                size="text4xl"
                as="p"
                className="text-[16px] font-medium tracking-[-0.41px] text-white"
              >
                {item.text}
              </Heading>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
