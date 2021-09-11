import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";

const StyledButtonGroup = styled("div", {
  display: "inline-flex",
  "& > button:not(:first-of-type)": {
    ml: "$4",
  },

  variants: {
    spacing: {
      1: {
        "& > button:not(:first-of-type)": {
          ml: "$1",
        },
      },
      2: {
        "& > button:not(:first-of-type)": {
          ml: "$2",
        },
      },
      3: {
        "& > button:not(:first-of-type)": {
          ml: "$3",
        },
      },
      4: {
        "& > button:not(:first-of-type)": {
          ml: "$4",
        },
      },
      5: {
        "& > button:not(:first-of-type)": {
          ml: "$5",
        },
      },
      6: {
        "& > button:not(:first-of-type)": {
          ml: "$6",
        },
      },
      7: {
        "& > button:not(:first-of-type)": {
          ml: "$7",
        },
      },
      8: {
        "& > button:not(:first-of-type)": {
          ml: "$8",
        },
      },
      9: {
        "& > button:not(:first-of-type)": {
          ml: "$9",
        },
      },
    },
  },
});

export interface ButtonGroupProps extends CSSProp {
  spacing?: Spacing;
}

type HamonButtonGroup = FunctionComponent<
  ButtonGroupProps & HTMLAttributes<HTMLDivElement>
>;

/**
 * ButtonGroup component applies wraps the children with a `div`
 * and applies a little bit of margin to all child elements except the
 * first one.
 */
export const ButtonGroup: HamonButtonGroup = ({ ...props }) => (
  <StyledButtonGroup {...props} />
);
