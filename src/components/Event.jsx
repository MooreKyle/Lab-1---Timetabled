import React from "react";

const Event = (props) => {
  const eventStyle = {
    backgroundColor: props.color,
  };

  return (
    <td className="Event" style={eventStyle}>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6> {/* Display the location passed as a prop */}
    </td>
  );
}

export default Event;
