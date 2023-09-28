import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventNameInput from "./EventNameInput";
import ParkSelect from "./ParkSelect";

export default function EventForm() {
  const [parks, setParks] = useState([]);
  //   const [events, setEvents] = useState([]);
  //   const [selectedEvent, setSelectedEvent] = useState({});
  let location = useLocation().pathname.substring(6);
  useEffect(() => {
    handleFetchParks();
    //     handleFetchEvents();
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
  //   async function handleFetchEvents() {
  //     await fetch(
  //       "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/newevent"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setEvents(json);
  //       });
  //   }

  return (
    <>
      <form>
        {location === "/newevent" ? (
          <h2>Add Event</h2>
        ) : (
          <h2>Update/Delete Event</h2>
        )}
        <EventNameInput />
        <ParkSelect parks={parks} />
      </form>
    </>
  );
}
