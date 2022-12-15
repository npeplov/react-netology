import React from "react";
import moment from "moment/moment";
import "moment/locale/ru";

export default function Calendar(props) {
  moment.locale('ru'); 

  const {date} = props;
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс' ];

  const start = new Date(date - (date.getDate() - 1) * 60 * 60 * 24 * 1000);
  const end = moment(date).daysInMonth();
  
  const startWeekDay = weekDays.indexOf(moment(start).format('dd'));
  const prevMonthStart = new Date(start - startWeekDay * 60 * 60 * 24 * 1000);
  const nextMonthStart = new Date(start + end * 60 * 60 * 24 * 1000);

  let counter = prevMonthStart.getDate();
  let counter2 = 0;

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{moment(date).format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{moment(date).format('MMMM')}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{moment(date).format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
      </div>
    </div>
    <table className="ui-datepicker-calendar">
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {weekDays.map((day, ind) => <td>
          {(day !== moment(start).format('dd') && counter > 7) 
            ? counter = prevMonthStart.getDate() + ind
            : counter = start.getDate() + counter2++
            }
        </td>)}
        {/* <td className="ui-datepicker-other-month">27</td>
        <td className="ui-datepicker-other-month">28</td>
       */}
      </tr>
      <tr>
        {weekDays.map(day => <td>{++counter}</td>)}
      </tr>
      <tr>
        {weekDays.map(day => <td>{++counter}</td>)}
        {/* <td className="ui-datepicker-today">8</td> */}
      </tr>
      <tr>
        {weekDays.map(day => <td>{++counter}</td>)}
      </tr>
      <tr>
      {weekDays.map(day => <td>
          {(counter < end) 
            ? ++counter
            : nextMonthStart.getDate()
          }
        </td>)}
      </tr>
    </tbody>
    </table>
    
</div>
  )
}