import React from "react";

const Event = (props) => {
  return (
    <td className="Event">
      <h5>{props.event}</h5> {/* Displaying the event name passed as a prop */}
    </td>
  );
}

export default Event;