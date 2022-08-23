import React, { forwardRef } from "react";
import clsx from "clsx";
import {
  FontFamily,
  FontSize,
  FontStyle,
  FontWeight,
  LetterSpacing,
  TextAlign,
  TextColor,
  TextDecoration,
  TextTransform,
} from "../type";

export interface TypographyProps {
  /**
   * The content of the component.
   */
  children?: string | React.ReactNode;
  /**
   * Changes the underlying DOM element when needed for accessibility or SEO reasons.
   * @default span
   */
  as?: React.ElementType;
  className?: string;
  /**
   * The text-color of the component.
   * @default text-black
   */
  color?: TextColor;
  /**
   * The font-family of the component.
   * @default font-sans
   */
  fontFamily?: FontFamily;
  /**
   * The font-size of the component.
   * @default text-base
   */
  fontSize?: FontSize;
  /**
   * The font-style of the component.
   */
  fontStyle?: FontStyle;
  /**
   * The font-weight of the component.
   * @default font-normal
   */
  fontWeight?: FontWeight;
  /**
   * The letter-spacing of the component.
   */
  letterSpacing?: LetterSpacing;
  /**
   * The text-align of the component.
   */
  textAlign?: TextAlign;
  /**
   * The text-decoration of the component.
   */
  textDecoration?: TextDecoration;
  /**
   * The text-transform of the component.
   */
  textTransform?: TextTransform;
}

export type Ref = HTMLElement;

export const Typography = forwardRef<Ref, TypographyProps>((props, ref) => {
  const {
    children,
    className,
    as: Element = "span",
    color = "text-black",
    fontFamily = "font-sans",
    fontSize = "text-base",
    fontStyle,
    fontWeight = "font-normal",
    letterSpacing,
    textAlign,
    textDecoration,
    textTransform,
  } = props;

  return (
    <Element
      ref={ref}
      className={clsx(
        className,
        color,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        letterSpacing,
        textAlign,
        textDecoration,
        textTransform
      )}
    >
      {children}
    </Element>
  );
});

Typography.displayName = "Typography";
