import React from "react";
import { Meta, Story } from "@storybook/react";
import { Badge, HamonBadgeProps } from "./badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta<HamonBadgeProps>;

const Template: Story<HamonBadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "badge",
};

export const Custom = Template.bind({});

Custom.args = {
  css: {
    backgroundColor: "hotpink",
    color: "white",
  },
  uppercase: true,
  children: "custom",
};
