import { useSelector } from "react-redux";
import AddBookmark from "./AddBookmark";

export default function ParkEvents({ event }) {
  const { user } = useSelector((store) => store.user);

  async function handleBookmarkEvent() {
    try {
      await fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: user,
            event: event,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="park-event">
      <h3>{event.eventName}</h3>
      <p className="event-location">{event.eventLocation}</p>
      <p>
        <span className="event-time">From: {event.eventStartDate}</span>
        <span className="event-time">To: {event.eventEndDate}</span>
      </p>
      <p className="event-description">{event.eventDescription}</p>
      <AddBookmark handleBookmarkEvent={handleBookmarkEvent} />
    </div>
  );
}
