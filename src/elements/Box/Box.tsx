import React, { forwardRef } from "react";
import clsx from "clsx";

export interface BoxProps extends React.HTMLAttributes<React.ElementType> {
  /**
   * Changes the underlying DOM element when needed for accessibility or SEO reasons.
   * @default div
   */
  as?: React.ElementType;
  className?: string;
  /**
   * The content of the component.
   */
  children?: string | React.ReactNode;
}

export type Ref = HTMLElement;

export const Box = forwardRef<Ref, BoxProps>((props, ref) => {
  const { children, className, as: Element = "div", ...other } = props;

  return (
    <Element ref={ref} {...other} className={clsx(className)}>
      {children}
    </Element>
  );
});

Box.displayName = "Box";
