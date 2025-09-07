import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

interface LabelProps extends React.PropsWithChildren {
  htmlFor?: string;
  className?: string;
}

const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        twMerge(
          "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",
          className,
        ),
      )}
    >
      {children}
    </label>
  );
};

export default Label;
