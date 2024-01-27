import React from "react";
import Event from './Event'; // Import the Event component

const Calendar = () => {
  // Array of times for the hour blocks
  const times = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th> {/* Empty header for time column */}
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={time}>
              <td className="time">{time}</td>
              {/* Conditionally render the Event component with props */}
              {index === 0 ? <Event event="Fancy Dinner 🎩" color="green" /> : <td></td>}
              <td></td> {/* Monday */}
              <td></td> {/* Tuesday */}
              <td></td> {/* Wednesday */}
              <td></td> {/* Thursday */}
              <td></td> {/* Friday */}
              <td></td> {/* Saturday */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
