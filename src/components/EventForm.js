import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventNameInput from "./EventNameInput";
import ParkSelect from "./ParkSelect";
import EventDatesInputs from "./EventDatesInputs";
import EventDescriptionInput from "./EventDescriptionInput";
import SubmitEventButton from "./SubmitEventButton";
import EventSelect from "./EventSelect";

export default function EventForm() {
  const [parks, setParks] = useState([]);
  const [events, setEvents] = useState([]);
  //   const [selectedEvent, setSelectedEvent] = useState({});
  let location = useLocation().pathname.substring(6);

  useEffect(() => {
    handleFetchParks();
    handleFetchEvents();
  }, []);

  async function handleFetchParks() {
    await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin"
    )
      .then((response) => response.json())
      .then((json) => {
        setParks(json);
      });
  }

  async function handleFetchEvents() {
    await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/updateevent"
    )
      .then((response) => response.json())
      .then((json) => {
        setEvents(json);
      });
  }

  function handleSelectEvent(e) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].eventName === e.target.value) {
        document.querySelector("#event-name-input").value = events[i].eventName;
        document.querySelector("#parks").value = events[i].eventLocation;
        document.querySelector("#start-date-input").value =
          events[i].eventStartDate;
        document.querySelector("#end-date-input").value =
          events[i].eventEndDate;
        document.querySelector("#event-description-input").value =
          events[i].eventDescription;
      }
    }
  }

  async function handleSubmitNewEvent() {
    let newId = events[events.length - 1].id + 1;
    let name = document.querySelector("#event-name-input").value;
    let location = document.querySelector("#parks").value;
    let startDate = document.querySelector("#start-date-input").value;
    let endDate = document.querySelector("#end-date-input").value;
    let description = document.querySelector("#event-description-input").value;

    let newEvent = {
      id: newId,
      eventName: name,
      eventLocation: location,
      eventStartDate: startDate,
      eventEndDate: endDate,
      eventDescription: description,
    };

    try {
      await fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/newevent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEvent),
        }
      );
    } catch (error) {
      console.log(error);
    }

    handleFormClear();
  }

  function handleFormClear() {
    document.querySelector("#event-name-input").value = "";
    document.querySelector("#parks").value = "";
    document.querySelector("#start-date-input").value = "";
    document.querySelector("#end-date-input").value = "";
    document.querySelector("#event-description-input").value = "";
  }

  return (
    <>
      {location === "/updateevent" && (
        <EventSelect events={events} handleSelectEvent={handleSelectEvent} />
      )}
      <form>
        {location === "/newevent" ? (
          <h2>Add Event</h2>
        ) : (
          <h2>Update/Delete Event</h2>
        )}
        <EventNameInput />
        <ParkSelect parks={parks} />
        <EventDatesInputs />
        <EventDescriptionInput />
      </form>
      <SubmitEventButton handleSubmitNewEvent={handleSubmitNewEvent} />
    </>
  );
}
