import { WORD_SIZE } from "../../data/constants";
import classnames from "classnames";
import { returnBackgroundColor } from "../../lib/functions";

export const Key = ({
  onClick,
  value,
  isEnterOrDelete = false,
  isAnimating,
  status,
}) => {
  const delayTime = 400 * WORD_SIZE;
  const backgroundColor = status
    ? returnBackgroundColor(status)
    : "bg-slate-100";

  const styles = {
    transitionDelay: isAnimating ? `${delayTime}ms` : "unset",
  };

  const classes = classnames(
    `flex h-10 items-center justify-center rounded mx-0.5 text-md font-bold cursor-pointer select-none  m-3 ${backgroundColor}`,
    {
      "transition ease-in-out": isAnimating,
      "w-24": isEnterOrDelete,
      "w-10": !isEnterOrDelete,
    }
  );

  return (
    <button
      aria-label={`key`}
      style={styles}
      className={classes}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};
