import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";

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
      1: {
        gap: "$1",
      },
      2: {
        gap: "$2",
      },
      3: {
        gap: "$3",
      },
      4: {
        gap: "$4",
      },
      5: {
        gap: "$5",
      },
      6: {
        gap: "$6",
      },
      7: {
        gap: "$7",
      },
      8: {
        gap: "$8",
      },
      9: {
        gap: "$9",
      },
      10: {
        gap: "$10",
      },
      12: {
        gap: "$12",
      },
      14: {
        gap: "$14",
      },
      16: {
        gap: "$16",
      },
      18: {
        gap: "$18",
      },
      20: {
        gap: "$20",
      },
      24: {
        gap: "$24",
      },
      28: {
        gap: "$28",
      },
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
