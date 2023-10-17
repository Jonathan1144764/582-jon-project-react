export default function EventItem({ userEvent }) {
  return (
    <div className="bookmarked-events">
      <h3>{userEvent.eventName}</h3>
      <p className="event-location">{userEvent.eventLocation}</p>
      <p>
        <span className="event-time">From: {userEvent.eventStartDate}</span>
        <span className="event-time">To: {userEvent.eventEndDate}</span>
      </p>
      <p className="event-description">{userEvent.eventDescription}</p>
    </div>
  );
}
