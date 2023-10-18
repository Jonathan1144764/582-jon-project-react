import ExitWindow from "./ExitWindow";
import EventItem from "./EventItem";

export default function BookmarksList({
  isShown,
  handleExitWindow,
  userEvents,
}) {
  if (isShown) {
    return (
      <div className="bookmark-window">
        <h3>Your events</h3>
        <ExitWindow handleExitWindow={handleExitWindow} />
        <div className="bookmarks-grid">
          {userEvents.map((userEvent) => {
            return <EventItem key={userEvent.id} userEvent={userEvent} />;
          })}
        </div>
      </div>
    );
  }
}
