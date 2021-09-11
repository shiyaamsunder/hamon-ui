import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CSSProp, ColorSchemeProp } from "../../stitches.config";

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
      purple: {
        backgroundColor: "$purple400",
        color: "$purple700",
      },
      red: {
        backgroundColor: "$red400",
        color: "$red700",
      },

      green: {
        backgroundColor: "$green400",
        color: "$green700",
      },
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
