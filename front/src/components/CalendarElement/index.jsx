import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";

const CalendarElement = ({ day, month }) => {
  console.log(dayjs().startOf("month").add(1, "month").day())
  const today = dayjs();

  // 今月以外をグレーダウン
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);

  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  // 文字列のフォーマットをどうするか
  // 月の最初だけ月情報をつける
  const format = isFirstDay(day) ? "M月D日" : "D";

  // 当日かどうか判断
  const isToday = isSameDay(day, today);
  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="ctaption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;