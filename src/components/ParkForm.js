import { useState, useEffect } from "react";
import ParkNameInput from "./ParkNameInput";
import ParkImageInput from "./ParkImageInput";
import ParkStatusInput from "./ParkStatusInput";
import ParkFacilitiesInput from "./ParkFacilitiesInput";
import SubmitParkButton from "./SubmitParkButton";

export default function ParkForm() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    handleFetchParks();
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

  return (
    <>
      <form className="park-form">
        <h2>Add Park</h2>
        <div className="name-image-inputs-wrapper">
          <ParkNameInput />
          <ParkImageInput />
        </div>
        <div className="park-radio-inputs">
          <ParkStatusInput />
        </div>
        <div className="park-number-inputs">
          <ParkFacilitiesInput />
        </div>
      </form>
      <SubmitParkButton />
    </>
  );
}
