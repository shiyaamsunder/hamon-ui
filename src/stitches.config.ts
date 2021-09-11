import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import { colors, spacings } from "./theme";

export const {
  styled,
  // css,
  theme,
  createTheme,
  reset,
  config,
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
  },
  utils: {
    p: (value: Stitches.ScaleValue<"space">) => ({
      padding: value,
    }),
    pt: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<"space">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<"space">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.ScaleValue<"space">) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<"space">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<"space">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
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
   */
  variant?: "solid" | "outline" | "ghost";

  /**
   * Sets the size for the component.
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * Sets the colorScheme for the component.
   */
  colorScheme?: "purple" | "red" | "green";

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
