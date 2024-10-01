/* eslint-disable react/prop-types */

const sizes = {
  texts: "text-[10px] font-normal",
  textmd: "text-[11px] font-normal not-italic",
  textlg: "text-[12px] font-normal",
  textxl: "text-[13px] font-normal not-italic",
  text2xl: "text-[14px] font-normal not-italic",
  text3xl: "text-[15px] font-normal not-italic",
  text5xl: "text-[17px] font-normal lg:text-[14px]",
  text7xl: "text-[20px] font-normal not-italic lg:text-[17px]",
  text9xl: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  text10xl:
    "text-[28px] font-normal not-italic lg:text-[23px] md:text-[26px] sm:text-[24px]",
  text12xl:
    "text-[32px] font-normal not-italic lg:text-[27px] md:text-[30px] sm:text-[28px]",
  text13xl:
    "text-[56px] font-normal not-italic lg:text-[47px] md:text-[48px] sm:text-[42px]",
  text14xl: "text-[71px] font-normal lg:text-[71px] md:text-[48px]",
  text15xl: "text-[80px] font-normal not-italic lg:text-[80px] md:text-[48px]",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textxl",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-white font-sfprodisplay ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
