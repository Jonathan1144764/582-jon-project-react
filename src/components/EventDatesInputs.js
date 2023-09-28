import EventStartDateInput from "./EventStartDateInput";
import EventEndDateInput from "./EventEndDateInput";

export default function EventDatesInputs() {
  return (
    <div className="event-dates-inputs">
      <EventStartDateInput />
      <EventEndDateInput />
    </div>
  );
}
