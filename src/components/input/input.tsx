import React, { FunctionComponent, HTMLAttributes } from "react";
import {
  styled,
  CSSProp,
  ColorSchemeProp,
  CommonProps,
} from "../../stitches.config";

const StyledInput = styled("input", {});

export interface HamonInputProps extends CSSProp {}

type HamonInput = FunctionComponent<
  HamonInputProps & HTMLAttributes<HTMLInputElement>
>;

export const Input: HamonInput = ({ ...props }) => {
  return <StyledInput {...props} />;
};
