import React from "react";
import { Meta, Story } from "@storybook/react";

import { CSS } from "@stitches/react";
import { Button, HamonButtonProps } from "./button";
import { ButtonGroup } from "./button-group";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<HamonButtonProps>;

const Template: Story<HamonButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello",
};

export const Solid = Template.bind({});
Solid.args = {
  children: "Solid",
  variant: "solid",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline",
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Ghost",
  variant: "ghost",
};
export const Custom = Template.bind({});

const styles: CSS = {
  width: "auto",
  backgroundColor: "$green600",
  borderRadius: "9999px",
  color: "white",
  padding: "10px 18px",
  "&:hover": {
    backgroundColor: "$green700",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 3px $colors$green200",
  },
};
Custom.args = {
  children: "Custom button",
  css: styles,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  size: "medium",
  disabled: true,
};

export const Group = () => (
  <ButtonGroup>
    <Button variant="solid" size="medium">
      Save
    </Button>
    <Button variant="outline" size="medium">
      Cancel
    </Button>
  </ButtonGroup>
);

export const Sizes = () => (
  <ButtonGroup>
    <Button variant="solid" size="small">
      Solid sm
    </Button>
    <Button variant="solid" size="medium">
      Solid md
    </Button>
    <Button variant="solid" size="large">
      Solid lg
    </Button>
  </ButtonGroup>
);
