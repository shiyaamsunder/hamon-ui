import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";

const StyledGrid = styled("div", {
  boxSizing: "border-box",
  display: "grid",

  variants: {
    align: {
      start: {
        alignItems: "start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "end",
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
        justifyContent: "start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "end",
      },
      between: {
        justifyContent: "space-between",
      },
    },
    flow: {
      row: {
        gridAutoFlow: "row",
      },
      column: {
        gridAutoFlow: "column",
      },
      dense: {
        gridAutoFlow: "dense",
      },
      rowDense: {
        gridAutoFlow: "row dense",
      },
      columnDense: {
        gridAutoFlow: "column dense",
      },
    },
    columns: {
      1: {
        gridTemplateColumns: "repeat(1, 1fr)",
      },
      2: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      3: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      4: {
        gridTemplateColumns: "repeat(4, 1fr)",
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
    gapX: {
      1: {
        gapX: "$1",
      },
      2: {
        gapX: "$2",
      },
      3: {
        gapX: "$3",
      },
      4: {
        gapX: "$4",
      },
      5: {
        gapX: "$5",
      },
      6: {
        gapX: "$6",
      },
      7: {
        gapX: "$7",
      },
      8: {
        gapX: "$8",
      },
      9: {
        gapX: "$9",
      },
      10: {
        gapX: "$10",
      },
      12: {
        gapX: "$12",
      },
      14: {
        gapX: "$14",
      },
      16: {
        gapX: "$16",
      },
      18: {
        gapX: "$18",
      },
      20: {
        gapX: "$20",
      },
      24: {
        gapX: "$24",
      },
      28: {
        gapX: "$28",
      },
    },
    gapY: {
      1: {
        gapY: "$1",
      },
      2: {
        gapY: "$2",
      },
      3: {
        gapY: "$3",
      },
      4: {
        gapY: "$4",
      },
      5: {
        gapY: "$5",
      },
      6: {
        gapY: "$6",
      },
      7: {
        gapY: "$7",
      },
      8: {
        gapY: "$8",
      },
      9: {
        gapY: "$9",
      },
      10: {
        gapY: "$10",
      },
      12: {
        gapY: "$12",
      },
      14: {
        gapY: "$14",
      },
      16: {
        gapY: "$16",
      },
      18: {
        gapY: "$18",
      },
      20: {
        gapY: "$20",
      },
      24: {
        gapY: "$24",
      },
      28: {
        gapY: "$28",
      },
    },
  },
});

export interface HamonGridProps extends CSSProp {
  /**
   * Sets the **`grid-auto-flow`** property.
   * @default none
   */
  flow?: "row" | "column" | "dense" | "rowDense" | "columnDense";

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
   * Sets the **`gap`** property.
   * @default none
   */
  gap?: Spacing;

  /**
   * Sets the **`colum-gap`** property.
   * @default none
   */
  gapX?: Spacing;

  /**
   * Sets the **`row-gap`** property.
   * @default none
   */
  gapY?: Spacing;
}

type HamonGrid = FunctionComponent<
  HamonGridProps & HTMLAttributes<HTMLDivElement>
>;

/**
 * Grid is a`div` with
 * **`display: grid`**
 */
export const Grid: HamonGrid = ({ ...props }) => {
  return <StyledGrid {...props} />;
};
