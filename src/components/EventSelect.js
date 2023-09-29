export default function EventSelect({ events }) {
  return (
    <>
      <label htmlFor="events">Select event: </label>
      <select name="events" id="events">
        <option></option>
        {events.map((event) => {
          return (
            <option key={event.id} value={event.eventName}>
              {event.eventName}
            </option>
          );
        })}
      </select>
    </>
  );
}
