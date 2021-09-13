import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, ColorSchemeProp } from "../../stitches.config";
import {
  generateColorVariants,
  colorSchemes,
  generateBadgeColorScheme,
} from "../../utils";

const colorSchemeStyles = generateColorVariants(
  colorSchemes,
  generateBadgeColorScheme
);

const StyledBadge = styled("span", {
  boxSizing: "border-box",

  padding: "0.2rem 0.4rem",
  width: "auto",
  fontSize: "0.8rem",
  fontWeight: "600",

  backgroundColor: "$gray200",
  borderRadius: "9999px",
  color: "$gray700",

  userSelect: "none",

  variants: {
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },

    colorScheme: {
      ...colorSchemeStyles,
    },
  },

  defaultVariants: {
    uppercase: false,
  },
});

type OwnProps = CSSProp & ColorSchemeProp;

export interface HamonBadgeProps extends OwnProps {
  /**
   * Sets the text to uppercase.
   * @default false
   */
  uppercase?: boolean;
}

type HamonBadge = FunctionComponent<
  HamonBadgeProps & HTMLAttributes<HTMLSpanElement>
>;

/**
 * Badges are used to highlight an item's status for quick recognition.
 */
export const Badge: HamonBadge = ({ ...props }) => {
  return <StyledBadge {...props} />;
};
