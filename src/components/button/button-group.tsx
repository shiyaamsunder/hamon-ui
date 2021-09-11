import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp } from "../../stitches.config";

const StyledButtonGroup = styled("div", {
  display: "inline-flex",
  "& > button:not(:first-of-type)": {
    ml: "$4",
  },

  variants: {
    spacing: {
      small: {
        "& > button:not(:first-of-type)": {
          ml: "$4",
        },
      },
      medium: {
        "& > button:not(:first-of-type)": {
          ml: "$8",
        },
      },
      large: {
        "& > button:not(:first-of-type)": {
          ml: "$12",
        },
      },
    },
  },
});

export interface ButtonGroupProps extends CSSProp {
  spacing?: "small" | "medium" | "large";
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
