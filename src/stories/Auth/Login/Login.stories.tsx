// External deps
import type { Meta, StoryObj } from "@storybook/react";

// Internal deps
import Login from "./Login";

const meta = {
  title: "Auth/Login",
  component: Login,
  // tags: ["autodocs"],
} satisfies Meta<typeof Login>;
export default meta;

type Template = StoryObj<typeof meta>;

export const LoginComponent: Template = {
  args: {
    layout: "center",
  },
};
