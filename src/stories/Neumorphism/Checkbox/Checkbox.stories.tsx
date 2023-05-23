// External des
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta = {
  title: "Neumorphism/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  render: (args) => {
    const [check, setCheck] = useState(false);
    return (
      <Checkbox
        {...args}
        isChecked={check}
        handleChange={() => setCheck(!check)}
      />
    );
  },
} satisfies Meta<typeof Checkbox>;
export default meta;

type Template = StoryObj<typeof meta>;
export const CheckboxComponent: Template = {
  args: {
    isChecked: false,
    className: "",
    size: "medium",
    label: "Checkbox",
  },
};
