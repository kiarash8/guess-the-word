/** Color */

type ColorsWithoutShade = "white" | "black";
type ColorsWithShade = "gray" | "red" | "yellow" | "green" | "blue";
type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type BgColor =
  | `bg-${ColorsWithShade}-${Shade}`
  | `bg-${ColorsWithoutShade}`;
export type HoverBgColor = `hover:${BgColor}`;
export type DisableBgColor = `disabled:${BgColor}`;

export type TextColor =
  | `text-${ColorsWithShade}-${Shade}`
  | `text-${ColorsWithoutShade}`;
export type HoverTextColor = `hover:${TextColor}`;
export type DisableTextColor = `disabled:${TextColor}`;

export type Color = {
  background: BgColor;
  text: TextColor;
};

export type HoverColor = {
  background: HoverBgColor;
  text: HoverTextColor;
};

export type DisableColor = {
  background: DisableBgColor;
  text: DisableTextColor;
};

export type Surface = {
  default: Color;
  hover: HoverColor;
  disable: DisableColor;
};

/** Typography */

export type FontFamily = "font-sans" | "font-serif" | "font-mono";
export type FontSize =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";
export type FontStyle = "italic" | "not-italic";
export type FontWeight =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black";
export type LetterSpacing =
  | "tracking-tighter"
  | "tracking-tight"
  | "tracking-normal"
  | "tracking-wide"
  | "tracking-wider"
  | "tracking-widest";
export type TextAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end";
export type TextDecoration =
  | "underline"
  | "overline"
  | "line-through"
  | "no-underline";
export type TextTransform =
  | "uppercase"
  | "lowercase"
  | "capitalize"
  | "normal-case";
