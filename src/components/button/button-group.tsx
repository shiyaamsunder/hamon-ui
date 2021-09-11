import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp } from "../../stitches.config";

const StyledButtonGroup = styled("div", {
  display: "inline-flex",
  "& > button:not(:first-of-type)": {
    ml: "1rem",
  },
});

export interface ButtonGroupProps extends CSSProp {
  // TODO implement spacing prop.
  spacing?: string;
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
