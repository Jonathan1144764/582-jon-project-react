export default function ParkEvents({ event }) {
  return (
    <div className="park-event">
      <h3>{event.eventName}</h3>
      <p className="event-location">{event.eventLocation}</p>
      <p>
        <span className="event-time">From: {event.eventStartDate}</span>
        <span className="event-time">To: {event.eventEndDate}</span>
      </p>
      <p className="event-description">{event.eventDescription}</p>
    </div>
  );
}
