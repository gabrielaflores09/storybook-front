// External deps
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
// Internal deps
import Calendar from "./Calendar";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Template = StoryObj<typeof meta>;

export const CalendarComponent: Template = {
  args: {
    date: dayjs(new Date().toISOString()).format("YYYY-MM-DD"),
    minDate: "",
    maxDate: "",
    onClickDay: () => {
      console.log("onClickDay");
    },
    disabled: false,
    showToday: true,
  },
};
