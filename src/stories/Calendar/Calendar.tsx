/* eslint-disable @typescript-eslint/no-empty-function */
// External deps
import { Fragment, useState, useEffect } from "react";
import dayjs from "dayjs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Internal deps
import "./Calendar.scss";
import { getMonth } from "./utils/Calendar";
import Day from "./components/Day/Day";

interface ICalendarProps {
  date: string;
  minDate: string;
  maxDate: string;
  disabled: boolean;
  onClickDay: () => void | undefined;
}

const Calendar = ({
  date,
  minDate,
  maxDate,
  disabled,
  onClickDay,
}: ICalendarProps) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [yearIndex, setYearIndex] = useState(dayjs().year());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/g;

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex, yearIndex));
  }, [monthIndex]);

  useEffect(() => {
    // date: debe ser string formato YYYY-MM-DD...
    if (!!date || regex.test(date)) {
      setYearIndex(dayjs(date).year());
      const monthIdx = dayjs(date).month();

      setMonthIndex(monthIdx);
    }
  }, [date]);

  const handelChangeMonth = (isNextMonth = false) => {
    if (isNextMonth) {
      setMonthIndex((oldMonthIndex) => oldMonthIndex + 1);
    } else {
      setMonthIndex((oldMonthIndex) => oldMonthIndex - 1);
    }
  };

  return (
    <Fragment>
      <div className="month">
        <div className="month-title">
          <div aria-hidden onClick={() => handelChangeMonth()}>
            <BsChevronLeft className="arrow" size={20} />
          </div>
          <div className="month-title-name">
            {dayjs(new Date(yearIndex, monthIndex))
              .format("MMMM YYYY")
              .toUpperCase()}
          </div>
          <div aria-hidden onClick={() => handelChangeMonth(true)}>
            <BsChevronRight className="arrow" size={20} />
          </div>
        </div>
      </div>
      <div className="month-calendar">
        {currentMonth.map((row, idx) => (
          <div className="week" key={`${Math.random()}`}>
            {row.map((day: dayjs.Dayjs) => (
              <Day
                day={day}
                // key={`${day.$d}`}
                maxDate={maxDate}
                minDate={minDate}
                onClickDay={disabled ? () => {} : onClickDay}
                rowIdx={idx}
                // variant=""
              />
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Calendar;
