// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import DoubleBounce from "./DuobleBounce";

const meta = {
  title: "Spinners/DoubleBounce",
  component: DoubleBounce,
  // tags: ["autodocs"],
} satisfies Meta<typeof DoubleBounce>;
export default meta;
type Template = StoryObj<typeof meta>;

export const DoubleBounceComponent: Template = {
  args: {
    text: "Cargando...",
  },
};
