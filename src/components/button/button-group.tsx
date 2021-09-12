import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";

const StyledButtonGroup = styled("div", {
  display: "inline-flex",
  "& > button:not(:first-of-type)": {
    marginLeft: "$4",
  },

  variants: {
    spacing: {
      1: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$1",
        },
      },
      2: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$2",
        },
      },
      3: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$3",
        },
      },
      4: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$4",
        },
      },
      5: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$5",
        },
      },
      6: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$6",
        },
      },
      7: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$7",
        },
      },
      8: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$8",
        },
      },
      9: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$9",
        },
      },
      10: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$10",
        },
      },
      12: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$12",
        },
      },
      14: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$14",
        },
      },
      16: {
        "& > button:not(:first-of-type)": {
          marginLeft: "16",
        },
      },
      18: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$18",
        },
      },
      20: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$20",
        },
      },
      24: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$24",
        },
      },
      28: {
        "& > button:not(:first-of-type)": {
          marginLeft: "$28",
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
