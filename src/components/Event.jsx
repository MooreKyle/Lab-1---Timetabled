import React from "react";

const Event = (props) => {
  // Apply the background color using the color prop
  const eventStyle = {
    backgroundColor: props.color,
  };

  return (
    <td className="Event" style={eventStyle}>
      <h5>{props.event}</h5> {/* Use the event prop to display the event name */}
    </td>
  );
}

export default Event;
