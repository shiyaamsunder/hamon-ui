import React from "react";
import { Meta, Story } from "@storybook/react";
import { Flex, HamonFlexProps } from "./flex";
import { Box } from "../box/box";
import { CSS } from "../../stitches.config";

export default {
  title: "Components/Flex",
  component: Flex,
} as Meta<HamonFlexProps>;

const Template: Story<HamonFlexProps> = (args) => <Flex {...args} />;

const styles: CSS = {
  width: "100px",
  height: "100px",

  backgroundColor: "$indigo300",
  borderRadius: "$md",

  margin: "$4",
};

export const Example = Template.bind({});

Example.args = {
  children: [<Box css={styles} />, <Box css={styles} />, <Box css={styles} />],

  css: {
    width: "500px",
  },
};
