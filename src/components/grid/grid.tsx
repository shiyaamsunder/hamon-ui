import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";
import { generateSpaceVariants } from "../../utils";

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
      ...generateSpaceVariants("gap"),
    },
    gapX: {
      ...generateSpaceVariants("gapX"),
    },
    gapY: {
      ...generateSpaceVariants("gapY"),
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
