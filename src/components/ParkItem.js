import { useState } from "react";
import ExitWindow from "./ExitWindow";

export default function ParkItem({ park, allEvents }) {
  const [isShown, setIsShown] = useState(false);
  const [parkEvent, setParkEvents] = useState([]);

  function handleShowEvents() {
    let parkEventsList = [];
    setIsShown(true);
    for (let i = 0; i < allEvents.length; i++) {
      if (allEvents[i].eventLocation === park.parkName) {
        parkEventsList.push(allEvents[i]);
      }
    }
    setParkEvents(parkEventsList);
  }

  function exitWindow() {
    setIsShown(false);
  }

  return (
    <div className="park">
      <div
        className="park-image"
        style={{ backgroundImage: "url(" + park.parkImage + ")" }}
      ></div>
      <h3>{park.parkName}</h3>
      <p>{park.parkStatus}</p>
      <ul>
        <li>Soccer fields: {park.soccerfields}</li>
        <li>Baseball diamonds: {park.baseballDiamonds}</li>
        <li>Chalets: {park.parkChalets}</li>
        <li>Playgrounds: {park.parkPlaygrounds}</li>
      </ul>
      <button className="show-events-btn" onClick={handleShowEvents}>
        See events
      </button>
      {isShown === true && (
        <div className="park-events">
          <ExitWindow exitWindow={exitWindow} />
        </div>
      )}
    </div>
  );
}
