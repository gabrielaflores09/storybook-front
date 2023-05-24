import dayjs from "dayjs";
import esLocale from "dayjs/locale/es";

dayjs.locale({
  ...esLocale,
});

export const formatsEnum = {
  FORMAT_DATE_1: "DD-MM-YYYY",
  FORMAT_DATE_2: "YYYY-MM-DD",
  FORMAT_DATE_3: "YYYY/MM/DD",
  FORMAT_DATE_4: "DD/MM/YYYY",
  FORMAT_DATE_5: "D/M/YYYY",
};

export const formatFullDate = (
  value: string,
  format = formatsEnum.FORMAT_DATE_4
) => dayjs(value).format(format);
