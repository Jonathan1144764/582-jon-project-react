export default function EventSelect({ events, handleSelectEvent }) {
  return (
    <>
      <label htmlFor="events">Select event: </label>
      <select name="events" id="events" onChange={handleSelectEvent}>
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
