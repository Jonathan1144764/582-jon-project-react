import { Link } from "react-router-dom";

export default function AdminNav() {
  function handleParkFormClear() {
    document.querySelector("#park-name-input").value = "";
    document.querySelector("#park-image-input").value = "";
    if ((document.querySelector('input[name="status"]').checked = true)) {
      document.querySelector('input[name="status"]').checked = false;
    }
    document.querySelector("#soccer").value = 0;
    document.querySelector("#baseball").value = 0;
    document.querySelector("#chalet").value = 0;
    document.querySelector("#playground").value = 0;
  }

  function handleEventFormClear() {
    document.querySelector("#event-name-input").value = "";
    document.querySelector("#parks").value = "";
    document.querySelector("#start-date-input").value = "";
    document.querySelector("#end-date-input").value = "";
    document.querySelector("#event-description-input").value = "";
  }

  return (
    <nav className="admin-nav">
      <Link onClick={handleParkFormClear} to="newpark">
        Add park
      </Link>
      <span> | </span>
      <Link onClick={handleParkFormClear} to="updatepark">
        Update/Delete park
      </Link>
      <span> | </span>
      <Link onClick={handleEventFormClear} to="newevent">
        Add event
      </Link>
      <span> | </span>
      <Link onClick={handleEventFormClear} to="updateevent">
        Update/Delete event
      </Link>
    </nav>
  );
}
