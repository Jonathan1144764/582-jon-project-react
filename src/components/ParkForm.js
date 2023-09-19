import ParkNameInput from "./ParkNameInput";
import ParkImageInput from "./ParkImageInput";
import ParkStatusInput from "./ParkStatusInput";

export default function ParkForm() {
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
      </form>
    </>
  );
}
