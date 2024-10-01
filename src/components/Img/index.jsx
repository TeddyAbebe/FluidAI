/* eslint-disable react/prop-types */
const Img = ({
  className = "",
  src = "defaultNoData.png",
  alt = "testImg",
  loading = "lazy",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      {...restProps}
    />
  );
};

export { Img };
