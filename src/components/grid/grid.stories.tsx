import React from "react";
import { Meta, Story } from "@storybook/react";
import { Grid, HamonGridProps } from "./grid";
import { Box } from "../box/box";
import { CSS } from "../../stitches.config";

export default {
  title: "Components/Grid",
  component: Grid,
} as Meta<HamonGridProps>;

const Template: Story<HamonGridProps> = (args) => <Grid {...args} />;

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
};
