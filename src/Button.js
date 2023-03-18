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
  const classes = classnames("flex-1 flex-row item-center px-3 py-1.5 border", {
    "text-white border-blue-600 bg-blue-600": primary,
    "text-white border-gray-600 bg-gray-600": secondary,
    "text-white border-green-600 bg-green-600": success,
    "text-white border-purple-600 bg-purple-600": wise,
    "text-white border-red-600 bg-red-600": danger,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-500": outline && secondary,
    "text-green-500": outline && success,
    "text-purple-500": outline && wise,
    "text-red-500": outline && danger,
    "rounded-full": rounded,
  });
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
