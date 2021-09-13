import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import { colors } from "./theme/colors";
import { spacings } from "./theme/spacings";

export const {
  styled,
  css,
  theme,
  createTheme,
  reset,
  config,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      ...colors,
      primary: "$purple500",
    },
    space: {
      ...spacings,
    },
    fontSizes: {
      ...spacings,
    },

    medisa: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
    },
    radii: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "18px",
      pill: "9999px",
      round: "50%",
    },

    sizes: {
      ...spacings,
    },
  },
});

// ============================================================================== //
// ================================ TYPE DEFS ================================== //
// ============================================================================== //

type StitchesCSS = Stitches.CSS<typeof config>;

export type colorSchemes =
  | "purple"
  | "red"
  | "green"
  | "yellow"
  | "pink"
  | "blue"
  | "indigo";

export type sizes = "small" | "medium" | "large";

export type variants = "solid" | "outline" | "ghost";

export interface CommonProps {
  /**
   * Sets the variant for the component.
   * @default solid
   */
  variant?: variants;

  /**
   * Sets the size for the component.
   * @default medium
   */
  size?: sizes;

  /**
   * Sets the colorscheme for the component.
   */
  colorScheme?:
    | "purple"
    | "red"
    | "green"
    | "yellow"
    | "pink"
    | "blue"
    | "indigo";

  /**
   * This prop allows to customize the default css of a component.
   *
   * @example
   * css = {{
   *  backgroundColor: "hotpink",
   *  color: "white",
   *  fontWeight: "bold"
   * }}
   */
  css?: StitchesCSS;
}

export type CSSProp = Pick<CommonProps, "css">;
export type ColorSchemeProp = Pick<CommonProps, "colorScheme">;

/**
 * Type definitions for CSS properties.
 *
 * @example
 * import { CSS } from "hamon-ui";
 *
 * styles: CSS = {
 *  backgroundColor: "hotpink",
 *  color: "white",
 *  fontWeight: "bold"
 * }
 */

export type CSS = CSSProp["css"];

export type Spacing = keyof typeof spacings;
