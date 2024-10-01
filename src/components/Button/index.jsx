import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[14px]",
};

const variants = {
  fill: {
    gray_900: "bg-gray-900 19 text-white_A7",
    white_A700: "bg-white_A700 text-white",
    white: "bg-white shadow-bs text-black_900",
    gray_50: "bg-gray-50 text-white",
    gray_900_99: "bg-gray-900 19 01",
    black_900_99: "bg-black-900_99_01",
  },
  outline: {
    white_A700: "border-white 20 border-[0.74px] border-solid text-white",
    white_A700_6c: "border-white_6c border-[0.89px] border-solid text-white",
    white_100: "border-white_100 border-[0.89px] border-solid text-white",
  },
};

const sizes = {
  "2xl": "[5.5px] px-[34px] text-[16px]",
  xl: "[8.5px] px [20px] text-[20px]",
  lg: "[4.5px] px-12 text-[12px]",
  md: "[8px] px-8 text-[14px]",
  sm: "[14px] px-2.5",
  xs: "[8px] px-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "sm",
  color = "white_10",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  size: PropTypes.oneOf(["2xl", "xl", "lg", "md", "sm", "xs"]),
  color: PropTypes.oneOf([
    "gray_900_19",
    "white_10%",
    "white",
    "gray_700_4c",
    "white_20%",
    "gray_900_19_01",
    "black_900_99",
  ]),
};

export { Button };
