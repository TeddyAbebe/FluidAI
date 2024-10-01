/* eslint-disable react/prop-types */
const sizes = {
  textxs: "text-[8px] font-medium",
  text4xl: "text-[16px] font-medium lg:text-[13px]",
  text6xl: "text-[18px] font-medium lg:text-[15px]",
  text8xl: "text-[21px] font-medium not-italic lg:text-[17px]",
  text11xl:
    "text-[30px] font-medium lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headingxs: "text-[15px] font-semibold",
  headings:
    "text-[25px] font-semibold lg:text-[21px] md:text-[23px] sm:text-[21px]",
};

const Heading = ({
  children,
  className = "",
  size = "text6xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-white font-sfprodisplay ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
