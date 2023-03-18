import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  wise,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classnames(
    rest.className,
    "flex flex-row items-center px-2 py-1 border",
    {
      "text-white border-blue-600 bg-blue-600": primary,
      "text-white border-gray-600 bg-gray-600": secondary,
      "text-white border-green-600 bg-green-600": success,
      "text-white border-purple-600 bg-purple-600": wise,
      "text-white border-red-600 bg-red-600": danger,
      "bg-white": outline,
      "text-blue-600": outline && primary,
      "text-gray-600": outline && secondary,
      "text-green-600": outline && success,
      "text-purple-600": outline && wise,
      "text-red-600": outline && danger,
      "rounded-full": rounded,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationVal: ({ primary, secondary, success, wise, danger }) => {
    const counter =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!wise) +
      Number(!!danger);

    if (counter > 1) {
      return new Error("only one should be true");
    }
  },
};
export default Button;
