import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Disabled = {
  args: {
    primary: true,
    label: "Button",
    disabled: true,
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
