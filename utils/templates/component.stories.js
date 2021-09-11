module.exports = (componentName) => ({
  content: `
import React from "react";
import { Meta, Story } from "@storybook/react";
import { ${componentName}, Hamon${componentName}Props } from "./${componentName.toLowerCase()}";

export default {
  title: "Components/${componentName}",
  component: ${componentName},
} as Meta<Hamon${componentName}Props>;

const Template: Story<Hamon${componentName}Props> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "hello",
};

export const Custom = Template.bind({});

Custom.args = {
};
    `,

  extension: ".stories.tsx",
});
