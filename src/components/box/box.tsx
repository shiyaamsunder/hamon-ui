import React, { HTMLAttributes, FunctionComponent, ReactNode } from "react";
import { styled, CSSProp } from "../../stitches.config";

const StyledBox = styled("div", {
  boxSizing: "border-box",
});

export interface HamonBoxProps extends CSSProp {
  as?: keyof JSX.IntrinsicElements;
}

type HamonBox = FunctionComponent<
  HamonBoxProps & HTMLAttributes<HTMLDivElement>
>;

/**
 * Simple Box component that can renders `div` by default.
 * Use **`as`** prop to render different HTML element.
 *
 * **NOTE**: Right now the `as` prop doesnt work properly. It will be fixed soon.
 *
 * @example <caption>Example usage of Box with `as` prop.</caption>
 * <Box as="span">Hello</Box>
 * //renders a `span` element instead of a div.
 */
export const Box: HamonBox = ({ ...props }) => <StyledBox {...props} />;
