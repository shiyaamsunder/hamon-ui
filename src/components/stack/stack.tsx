import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, Spacing } from "../../stitches.config";
import { generateSpaceVariants } from "../../utils";

const StyledStack = styled("div", {
  boxSizing: "border-box",

  variants: {
    spacing: {
      ...generateSpaceVariants("spacing"),
    },
  },
});

export interface HamonStackProps extends CSSProp {
  spacing?: Spacing;
}

type HamonStack = FunctionComponent<
  HamonStackProps & HTMLAttributes<HTMLDivElement>
>;

export const Stack: HamonStack = ({ ...props }) => {
  return <StyledStack {...props} />;
};
