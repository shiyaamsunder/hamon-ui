import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";
import { generateSpaceVariants } from "../../utils";

const StyledFlex = styled("div", {
  boxSizing: "border-box",
  display: "flex",

  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
      wrapReverse: {
        flexWrap: "wrap-reverse",
      },
    },
    gap: {
      ...generateSpaceVariants("gap"),
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});

export interface HamonFlexProps extends CSSProp {
  /**
   * Sets the **`flex-direction`** property.
   * @default row
   */
  direction?: "row" | "column" | "rowReverse" | "columnReverse";

  /**
   * Sets the **`align-items`** property.
   * @default stretch
   */
  align?: "start" | "center" | "end" | "stretch" | "baseline";

  /**
   * Sets the **`justify-content`** property.
   * @default start
   */
  justify?: "start" | "center" | "end" | "between";

  /**
   * Sets the **`wrap`** property.
   * @default noWrap
   */
  wrap?: "noWrap" | "wrap" | "wrapReverse";

  /**
   * Sets the **`gap`** property.
   * @default none
   */
  gap?: Spacing;
}

type HamonFlex = FunctionComponent<
  HamonFlexProps & HTMLAttributes<HTMLDivElement>
>;

/**
 * Flex is a`div` with
 * **`display: flex`**
 */
export const Flex: HamonFlex = ({ ...props }) => {
  return <StyledFlex {...props} />;
};
