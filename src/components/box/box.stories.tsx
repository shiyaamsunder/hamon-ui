import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, HamonBoxProps } from "./box";

export default {
  title: "Components/Box",
  component: Box,
} as Meta<HamonBoxProps>;

const Template: Story<HamonBoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  // css: {
  //   width: "100px",
  //   height: "100px",
  //   borderRadius: "10px",
  //   backgroundColor: "pink",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
};
