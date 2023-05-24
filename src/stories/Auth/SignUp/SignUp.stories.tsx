// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import SignUp from "./SignUp";

const meta = {
  title: "Auth/SignUp",
  component: SignUp,
  // tags: ["autodocs"],
  argTypes: {
    layout: {
      options: ["center", "right"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof SignUp>;
export default meta;

type Template = StoryObj<typeof meta>;

export const SignUpComponent: Template = {
  args: {
    layout: "center",
  },
};
