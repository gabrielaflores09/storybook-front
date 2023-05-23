// External deps
import type { Meta, StoryObj } from "@storybook/react";
import { BsFillPersonFill } from "react-icons/bs";

// Internal deps
import { Button } from "./Button";

const meta = {
  title: "Neumorphism/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;
type Template = StoryObj<typeof meta>;

export const ButtonComponent: Template = {
  args: {
    label: "Button Principal",
    borderRadius: "",
    className: "",
  },
};

export const IconButtonComponent: Template = {
  args: {
    icon: BsFillPersonFill,
    className: "",
    borderRadius: "",
    size: "medium",
    label: "",
  },
};
