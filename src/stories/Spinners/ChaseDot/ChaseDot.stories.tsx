// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import ChaseDot from "./ChaseDot";

const meta = {
  title: "Spinners/ChaseDot",
  component: ChaseDot,
  tags: ["autodocs"],
} satisfies Meta<typeof ChaseDot>;
export default meta;
type Template = StoryObj<typeof meta>;

export const ChaseDotComponent: Template = {
  args: {
    text: "Cargando...",
  },
};
