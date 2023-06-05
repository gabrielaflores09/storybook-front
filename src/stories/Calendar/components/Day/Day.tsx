/* eslint-disable @typescript-eslint/no-empty-function */
// External deps

// Internal deps
import { formatFullDate, formatsEnum } from "../../../../utils/formatsDate";
import "./Day.scss";
import dayjs from "dayjs";

interface IDayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
  minDate: string;
  maxDate: string;
  onClickDay: () => void | undefined;
  showToday: boolean;
  today: string;
  disabled: boolean;
}

const Day = ({
  day,
  rowIdx,
  minDate,
  maxDate,
  showToday,
  today,
  disabled,
}: IDayProps) => {
  const isLastDayPrevMonth = rowIdx === 0 && Number(day.format("D")) > 7;
  const isDayNextMonth =
    (rowIdx === 4 || rowIdx === 5) && Number(day.format("D")) <= 14;

  const isOtherMonthDay = isLastDayPrevMonth || isDayNextMonth;

  const showColorToday = showToday && today === day.format("YYYY-MM-DD");

  const validStyleDay = () => {
    if (minDate || maxDate) {
      const dayFormatToCompare = day.format(formatsEnum.FORMAT_DATE_2);
      const dayFormatDate = new Date(dayFormatToCompare);

      if (minDate) {
        const minFormatDate = new Date(
          formatFullDate(minDate, formatsEnum.FORMAT_DATE_2)
        );

        if (dayFormatDate < minFormatDate) {
          return "day-shadow";
        }
      }

      if (maxDate) {
        const maxFormatDate = new Date(
          formatFullDate(maxDate, formatsEnum.FORMAT_DATE_2)
        );

        if (dayFormatDate > maxFormatDate) {
          return "day-shadow";
        }
      }
    }
    if (showColorToday) {
      return "today";
    }
    return "";
  };
  return (
    <div>
      {rowIdx === 0 && (
        <div className="day-text">{day.format("ddd").toUpperCase()}</div>
      )}

      <div
        aria-hidden
        // style={colors}
        className={`day ${validStyleDay()} ${
          isOtherMonthDay ? "day-shadow" : ""
        } ${disabled ? "day-disabled" : ""}`}
        onClick={validStyleDay() ? () => {} : () => {}}
      >
        {isOtherMonthDay ? null : (
          <>
            <div className="day-number">{day.format("D")}</div>
            {showColorToday && (
              <div className="content-circle">
                <div className={`circle today`} />
                <div className="circle" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Day;
