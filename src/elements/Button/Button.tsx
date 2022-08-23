import React, { forwardRef } from "react";
import clsx from "clsx";
import { Surface } from "../type";

type Size = "small" | "medium" | "large";
const sizes: {
  [key in Size]: string;
} = {
  small: "m-1 px-2 py-1 rounded-md text-sm",
  medium: "m-1 px-3 py-1 rounded-lg text-md",
  large: "m-1 px-5 py-2 rounded-xl text-xl",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  /**
   * Changes the underlying DOM element when needed for accessibility or SEO reasons.
   * @default button
   */
  as?: React.ElementType;
  className?: string;
  /**
   * The content of the component.
   */
  children?: string | React.ReactNode;
  /**
   * The surface color of the component.
   * @default
   * {
   *    default: {
   *        background: "bg-blue-500",
   *        text: "text-white",
   *    },
   *    hover: {
   *        background: "hover:bg-blue-800",
   *        text: "hover:text-white",
   *    },
   *    disable: {
   *        background: "disabled:bg-blue-300",
   *        text: "disabled:text-white",
   *    },
   * }
   */
  surface?: Surface;
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: Size;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
}

export type Ref = HTMLButtonElement | HTMLAnchorElement;

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    as: Element = "button",
    surface = {
      default: {
        background: "bg-blue-500",
        text: "text-white",
      },
      hover: {
        background: "hover:bg-blue-800",
        text: "hover:text-white",
      },
      disable: {
        background: "disabled:bg-blue-300",
        text: "disabled:text-white",
      },
    },
    size = "medium",
    fullWidth = false,
    ...other
  } = props;

  return (
    <Element
      ref={ref}
      {...other}
      className={clsx(
        className,
        surface.default.background,
        surface.default.text,
        surface.hover.background,
        surface.hover.text,
        surface.disable.background,
        surface.disable.text,
        sizes[size],
        {
          ["w-full"]: fullWidth,
        }
      )}
    >
      {children}
    </Element>
  );
});

Button.displayName = "Button";
