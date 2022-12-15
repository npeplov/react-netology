import React from "react";
import "moment/locale/ru";
import moment from "moment/moment";

export default function Calendar({date}) {
  moment.locale('ru');
  console.clear();
  console.log(moment().daysInMonth());
  console.log(moment());

  
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{moment().format('dddd')}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{moment().format('MMMM')}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{moment().format('MMMM')}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
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
      {/* <tr>
        <td className="ui-datepicker-other-month">27</td>
        <td className="ui-datepicker-other-month">28</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr> */}
      {/* вывести в цикле от 1 до 31 */}
      {/* вывести 7 дней */}
      <tr>
                
      </tr>
      {/* <tr>
        <td>6</td>
        <td>7</td>
        <td className="ui-datepicker-today">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
      </tr> */}
    </tbody>
    </table>
    
</div>
  )
}