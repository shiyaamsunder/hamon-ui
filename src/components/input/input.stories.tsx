import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, HamonInputProps } from "./input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<HamonInputProps>;

const Template: Story<HamonInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "hello",
};

export const Custom = Template.bind({});

Custom.args = {};
