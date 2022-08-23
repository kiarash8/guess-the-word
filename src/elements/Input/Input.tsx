import React, { forwardRef } from "react";
import clsx from "clsx";
import { TextAlign } from "../type";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  /**
   * The text-align of the component.
   */
  textAlign?: TextAlign;
  /**
   * The size of the component.
   * @default 'medium'
   */
  // size?: Size;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default true
   */
  fullWidth?: boolean;
}

export type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {
    className,
    type = "text",
    textAlign = "text-left",
    fullWidth = true,
    ...other
  } = props;

  return (
    <input
      ref={ref}
      {...other}
      className={clsx(
        className,
        "block",
        "py-2 px-3",
        "rounded-md",
        "bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0",
        textAlign,
        {
          ["w-full"]: fullWidth,
        }
      )}
    />
  );
});

Input.displayName = "Input";
