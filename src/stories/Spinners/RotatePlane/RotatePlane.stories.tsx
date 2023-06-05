// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import RotatePlane from "./RotatePlane";

const meta = {
  title: "Spinners/RotatePlane",
  component: RotatePlane,
  tags: ["autodocs"],
} satisfies Meta<typeof RotatePlane>;
export default meta;
type Template = StoryObj<typeof meta>;

export const RotatePlaneComponent: Template = {
  args: {
    text: "Cargando...",
  },
};
