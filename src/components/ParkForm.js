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

  async function handleSubmitNewPark() {
    let newId = parks[parks.length - 1].id + 1;
    let name = document.querySelector("#park-name-input").value;
    let image = document.querySelector("#park-image-input").value;
    let status = document.querySelector('input[name="status"]:checked').value;
    let soccer = Number(document.querySelector("#soccer").value);
    let baseball = Number(document.querySelector("#baseball").value);
    let chalets = Number(document.querySelector("#chalet").value);
    let playgrounds = Number(document.querySelector("#playground").value);

    let newPark = {
      id: newId,
      parkName: name,
      parkImage: image,
      parkStatus: status,
      soccerFields: soccer,
      baseballDiamonds: baseball,
      parkChalets: chalets,
      parkPlaygrounds: playgrounds,
    };

    try {
      await fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin/newpark",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPark),
        }
      );
    } catch (error) {
      console.log(error);
    }
    handleFormClear();
  }

  function handleFormClear() {
    document.querySelector("#park-name-input").value = "";
    document.querySelector("#park-image-input").value = "";
    document.querySelector('input[name="status"]:checked').checked = false;
    document.querySelector("#soccer").value = 0;
    document.querySelector("#baseball").value = 0;
    document.querySelector("#chalet").value = 0;
    document.querySelector("#playground").value = 0;
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
      <SubmitParkButton handleSubmitNewPark={handleSubmitNewPark} />
    </>
  );
}
