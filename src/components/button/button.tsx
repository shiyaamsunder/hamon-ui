import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CommonProps } from "../../stitches.config";

// TODO: Fix button height issues
const StyledButton = styled("button", {
  $$shadowColor: "$colors$purple300",
  $$shadowValues: "0px 0px 0px 2px",
  $$borderSize: "1px",
  backgroundColor: "$gray200",
  borderRadius: "5px",
  border: "none",
  fontSize: "14px",
  color: "$gray700",
  fontFamily: "inherit",
  fontWeight: "600",
  lineHeight: "1.2",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  outline: "none",
  width: "auto",

  transition: "all 120ms ease-in-out",

  "&:disabled": {
    backgroundColor: "hsl(209 12.2% 93.2%)",
    boxShadow: "inset 0 0 0 1px lightgray",
    color: "hsl(205 10.7% 78.0%)",
    pointerEvents: "none",
  },

  "&:hover": {
    backgroundColor: "$gray300",
  },
  "&:focus": {
    boxShadow: "$$shadowValues $$shadowColor",
  },
  "&:active": {
    backgroundColor: "$gray400",
  },

  variants: {
    size: {
      small: {
        padding: "6px 0.75rem",
        fontSize: "13px",
        height: "2rem",
      },

      medium: {
        padding: "8px 1rem",
        height: "2.5rem",
      },
      large: {
        padding: "10px 1.75rem",
        height: "2.8rem",
      },
    },

    variant: {
      outline: {
        backgroundColor: "transparent",
        border: "$$borderSize solid $primary",
        color: "$primary",
        "&:hover": {
          backgroundColor: "$purple100",
        },
        "&:focus": {
          boxShadow: "$$shadowValues $$shadowColor",
        },
        "&:active": {
          backgroundColor: "$purple200",
        },
      },

      solid: {
        backgroundColor: "$primary",
        border: "$$borderSize solid transparent",
        color: "white",

        "&:hover": {
          backgroundColor: "$purple600",
        },
        "&:focus": {
          boxShadow: "$$shadowValues $$shadowColor",
        },
        "&:active": {
          backgroundColor: "$purple800",
        },
      },

      ghost: {
        backgroundColor: "transparent",
        border: "none",
        color: "$primary",
        "&:hover": {
          backgroundColor: "$purple100",
        },
        "&:focus": {
          boxShadow: "$$shadowValues $$shadowColor",
        },
        "&:active": {
          backgroundColor: "$purple100",
        },
      },
    },

    colorScheme: {
      purple: {
        backgroundColor: "$purple500",
        color: "white",

        "&:hover": {
          backgroundColor: "$purple600",
        },
        "&:focus": {
          boxShadow: "$$shadowValues $$shadowColor",
        },
        "&:active": {
          backgroundColor: "$purple800",
        },
      },
      red: {
        backgroundColor: "$red500",
        color: "white",

        "&:hover": {
          backgroundColor: "$red600",
        },
        "&:focus": {
          boxShadow: "$$shadowValues $colors$red400",
        },
        "&:active": {
          backgroundColor: "$red800",
        },
      },

      green: {
        backgroundColor: "$green500",
        color: "white",

        "&:hover": {
          backgroundColor: "$green600",
        },
        "&:focus": {
          boxShadow: "$$shadowValues $colors$green400",
        },
        "&:active": {
          backgroundColor: "$green800",
        },
      },
    },
  },

  compoundVariants: [
    {
      colorScheme: "purple",
      variant: "outline",
      css: {
        color: "$purple500",
        backgroundColor: "transparent",
        borderColor: "$purple500",
        "&:hover": {
          backgroundColor: "$purple200",
        },
      },
    },
    {
      colorScheme: "red",
      variant: "outline",
      css: {
        color: "$red500",
        backgroundColor: "transparent",
        borderColor: "$red500",
        "&:hover": {
          backgroundColor: "$red200",
        },
      },
    },
    {
      colorScheme: "green",
      variant: "outline",
      css: {
        color: "$green500",
        backgroundColor: "transparent",
        borderColor: "$green500",
        "&:hover": {
          backgroundColor: "$green200",
        },
      },
    },

    {
      colorScheme: "purple",
      variant: "ghost",
      css: {
        backgroundColor: "$purple100",
        "&:hover": {
          backgroundColor: "$purple200",
        },
      },
    },
    {
      colorScheme: "red",
      variant: "ghost",
      css: {
        backgroundColor: "$red100",
        color: "$red500",
        "&:hover": {
          backgroundColor: "$red200",
        },
      },
    },
    {
      colorScheme: "green",
      variant: "ghost",
      css: {
        backgroundColor: "$green100",
        color: "$green500",
        "&:hover": {
          backgroundColor: "$green200",
        },
      },
    },
  ],

  defaultVariants: {
    size: "medium",
    variant: "solid",
  },
});

export interface HamonButtonProps extends CommonProps {
  /**
   * Disables the button.
   * @default false
   */
  disabled?: boolean;
}

type HamonButton = FunctionComponent<
  HamonButtonProps & HTMLAttributes<HTMLButtonElement>
>;

/**
 * Simple button element.
 */
export const Button: HamonButton = ({ ...props }) => {
  return <StyledButton {...props} />;
};
