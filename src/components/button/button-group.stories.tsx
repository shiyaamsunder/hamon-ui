import React from "react";
import { Meta, Story } from "@storybook/react";

import { ButtonGroup, ButtonGroupProps } from "./button-group";
import { Button } from "./button";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
} as Meta<ButtonGroupProps>;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [<Button>Hello</Button>, <Button>Im another button</Button>],
};
