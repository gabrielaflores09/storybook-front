import dayjs from "dayjs";
import esLocale from "dayjs/locale/es";

dayjs.locale({
  ...esLocale,
});

export const getMonth = (
  monthDay = dayjs().month(),
  yearDay = dayjs().year()
) => {
  const month = Math.floor(monthDay);
  const firstDayOfTheMonth = dayjs(new Date(yearDay, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  // Armar una matríz de 6 (filas) x 7 (columnas)
  // Donde las columnas representan los 7 días de la semana
  // Donde las filas presentan la cantidad de semanas por mes

  const daysMatrix = new Array(6).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount += 1;

      return dayjs(new Date(yearDay, month, currentMonthCount));
    })
  );

  return daysMatrix;
};
