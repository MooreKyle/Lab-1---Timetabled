import React from "react";
import Event from './Event'; // Import the Event component

const Calendar = () => {
  // Array of times for the hour blocks
  const times = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

  // Example event data organized by day and time
  const eventSchedule = {
    "Sunday": {
      "9 AM": { event: "Brunch at The Garden Room", color: "orange" },
      "1 PM": { event: "Visit Trinity College Library", color: "blue" },
    },
    "Monday": {
      "10 AM": { event: "Tour of Dublin Castle", color: "grey" },
      "2 PM": { event: "Coffee at Bewley's Grafton Street", color: "maroon" },
    },
    "Tuesday": {
      "11 AM": { event: "Walk in St Stephen's Green", color: "green" },
      "3 PM": { event: "Shopping at Grafton Street", color: "purple" },
    },
    "Wednesday": {
      "8 AM": { event: "Fancy Dinner at Chapter One", color: "darkgreen" },
      "5 PM": { event: "Sunset at Howth Head", color: "lightblue" },
    },
    // Continue to add events for Thursday, Friday, and Saturday
  };

  // Helper function to render events
  const renderEvent = (day, time) => {
    const event = eventSchedule[day]?.[time];
    if (event) {
      return <Event event={event.event} color={event.color} />;
    }
    return <td></td>; // Return empty cell if there's no event
  };

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
          {times.map(time => (
            <tr key={time}>
              <td className="time">{time}</td>
              {renderEvent("Sunday", time)}
              {renderEvent("Monday", time)}
              {renderEvent("Tuesday", time)}
              {renderEvent("Wednesday", time)}
              {/* Render events for Thursday, Friday, and Saturday */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;