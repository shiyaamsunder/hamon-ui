
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Stack, HamonStackProps } from "./stack";

export default {
  title: "Components/Stack",
  component: Stack,
} as Meta<HamonStackProps>;

const Template: Story<HamonStackProps> = (args) => <Stack {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "hello",
};

export const Custom = Template.bind({});

Custom.args = {
};
    