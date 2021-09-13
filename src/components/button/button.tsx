import { keyframes } from "@stitches/react";
import React, { FunctionComponent, HTMLAttributes } from "react";
import { styled, CommonProps } from "../../stitches.config";
import { VariantStyles } from "./button-variants";
import {
  generateColorVariants,
  colorSchemes,
  generateButtonColorScheme,
} from "../../utils";

const colorSchemeStyles = generateColorVariants(
  colorSchemes,
  generateButtonColorScheme
);

//TODO: implement isLoading State
// TODO: write a function to generate compound Variant styles.

const StyledButton = styled("button", {
  $$shadowColor: "$colors$purple300",
  $$shadowValues: "0px 0px 0px 2px",
  $$borderSize: "1px",
  backgroundColor: "$gray200",
  borderRadius: "$sm",
  border: "none",
  fontSize: "14px",
  color: "$gray700",
  fontFamily: "inherit",
  fontWeight: "600",
  lineHeight: "1.2",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$1 $2",

  outline: "none",
  width: "auto",
  minWidth: "$18",

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
        height: "$8",
        fontSize: "$3",
      },

      medium: {
        minWidth: "$20",
        height: "$9",
      },
      large: {
        minWidth: "$24",
        height: "$10",
        fontSize: "$4",
      },
    },

    variant: {
      ...VariantStyles,
    },

    colorScheme: {
      ...colorSchemeStyles,
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
      colorScheme: "yellow",
      variant: "outline",
      css: {
        color: "$yellow500",
        backgroundColor: "transparent",
        borderColor: "$yellow500",
        "&:hover": {
          backgroundColor: "$yellow200",
        },
      },
    },

    {
      colorScheme: "blue",
      variant: "outline",
      css: {
        color: "$blue500",
        backgroundColor: "transparent",
        borderColor: "$blue500",
        "&:hover": {
          backgroundColor: "$blue200",
        },
      },
    },

    {
      colorScheme: "indigo",
      variant: "outline",
      css: {
        color: "$indigo500",
        backgroundColor: "transparent",
        borderColor: "$indigo500",
        "&:hover": {
          backgroundColor: "$indigo200",
        },
      },
    },

    {
      colorScheme: "pink",
      variant: "outline",
      css: {
        color: "$pink500",
        backgroundColor: "transparent",
        borderColor: "$pink500",
        "&:hover": {
          backgroundColor: "$pink200",
        },
      },
    },

    {
      colorScheme: "purple",
      variant: "ghost",
      css: {
        backgroundColor: "$purple100",
        color: "$purple500",
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
    {
      colorScheme: "pink",
      variant: "ghost",
      css: {
        backgroundColor: "$pink100",
        color: "$pink500",
        "&:hover": {
          backgroundColor: "$pink200",
        },
      },
    },

    {
      colorScheme: "blue",
      variant: "ghost",
      css: {
        backgroundColor: "$blue100",
        color: "$blue500",
        "&:hover": {
          backgroundColor: "$blue200",
        },
      },
    },

    {
      colorScheme: "yellow",
      variant: "ghost",
      css: {
        backgroundColor: "$yellow100",
        color: "$yellow500",
        "&:hover": {
          backgroundColor: "$yellow200",
        },
      },
    },

    {
      colorScheme: "indigo",
      variant: "ghost",
      css: {
        backgroundColor: "$indigo100",
        color: "$indigo500",
        "&:hover": {
          backgroundColor: "$indigo200",
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

  /**
   * Set the loading state of the button. It shows a spinner and disables the button
   * @default false
   */
  isLoading?: boolean;
}

type HamonButton = FunctionComponent<
  HamonButtonProps & HTMLAttributes<HTMLButtonElement>
>;

/**
 * Simple button element.
 * It has three variants.
 * @param variant
 * `solid`, `outline`, `ghost`
 */
export const Button: HamonButton = ({ children, ...props }) => {
  console.log(colorSchemeStyles);
  return <StyledButton {...props}>{children}</StyledButton>;
};
