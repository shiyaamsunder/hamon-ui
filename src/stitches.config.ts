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
  utils: {
    p: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"padding">
    ) => ({
      padding: value,
    }),
    pt: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"paddingTop">
    ) => ({
      paddingTop: value,
    }),
    pr: (
      value:
        | Stitches.ScaleValue<"space">
        | Stitches.PropertyValue<"paddingRight">
    ) => ({
      paddingRight: value,
    }),
    pb: (
      value:
        | Stitches.ScaleValue<"space">
        | Stitches.PropertyValue<"paddingBottom">
    ) => ({
      paddingBottom: value,
    }),
    pl: (
      value:
        | Stitches.ScaleValue<"space">
        | Stitches.PropertyValue<"paddingLeft">
    ) => ({
      paddingLeft: value,
    }),
    px: (
      value:
        | Stitches.ScaleValue<"space">
        | Stitches.PropertyValue<"paddingLeft">
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"paddingTop">
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"margin">
    ) => ({
      margin: value,
    }),
    mt: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"marginTop">
    ) => ({
      marginTop: value,
    }),
    mr: (
      value:
        | Stitches.ScaleValue<"space">
        | Stitches.PropertyValue<"marginRight">
    ) => ({
      marginRight: value,
    }),
    mb: (
      value:
        | Stitches.ScaleValue<"space">
        | Stitches.PropertyValue<"marginBottom">
    ) => ({
      marginBottom: value,
    }),
    ml: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"marginLeft">
    ) => ({
      marginLeft: value,
    }),
    mx: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"marginLeft">
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"marginTop">
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

type StitchesCSS = Stitches.CSS<typeof config>;

export interface CommonProps {
  /**
   * Sets the variant for the component.
   * @default solid
   */
  variant?: "solid" | "outline" | "ghost";

  /**
   * Sets the size for the component.
   * @default medium
   */
  size?: "small" | "medium" | "large";

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
export type Spacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

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
