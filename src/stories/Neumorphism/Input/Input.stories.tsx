// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Interla deps
import Input from "./Input";

const meta = {
  title: "Neumorphism/Input",
  component: Input,
} satisfies Meta<typeof Input>;
export default meta;

type Template = StoryObj<typeof meta>;

export const InputComponent: Template = {
  args: {
    placeholder: "Input placeholder",
    size: "small",
    className: "",
    label: "Input Component",
    type: "text",
    hoverEffect: true,
  },
};
