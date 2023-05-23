// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import Chip from "./Chip";

const meta = {
  title: "Neumorphism/Chip",
  component: Chip,
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;

type Template = StoryObj<typeof meta>;

export const ClickeableChip: Template = {
  args: {
    label: "Clickeable Chip Component",
    size: "small",
    onClick: () => {},
    hover: true,
    className: "",
  },
};

export const SmallChip: Template = {
  args: {
    label: "Small Chip Component",
    size: "small",
    onClick: undefined,
    className: "",
    hover: false,
  },
};
export const MediumChip: Template = {
  args: {
    label: "Medium Chip Component",
    size: "medium",
    onClick: undefined,
    className: "",
    hover: false,
  },
};
export const LargeChip: Template = {
  args: {
    label: "Large Chip Component",
    size: "large",
    onClick: undefined,
    className: "",
    hover: false,
  },
};
