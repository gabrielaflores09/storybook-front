// External deps
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import Switch from "./Switch";

const meta = {
  title: "Neumorphism/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;
export default meta;

type Template = StoryObj<typeof meta>;

export const SwitchComponent: Template = {
  render: (args) => {
    const [check, setCheck] = useState(false);

    return (
      <Switch
        {...args}
        handleChange={() => setCheck(!check)}
        isChecked={check}
      />
    );
  },
  args: {
    isChecked: false,
    size: "small",
    className: "",
  },
};
