import { Link } from "react-router-dom";

export default function AdminNav() {
  function handleFormClear() {
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

  return (
    <nav className="admin-nav">
      <Link onClick={handleFormClear} to="newpark">
        Add park
      </Link>
      <Link onClick={handleFormClear} to="updatepark">
        Update/Delete park
      </Link>
      <Link to="newevent">Add event</Link>
      <Link to="updateevent">Update/Delete event</Link>
    </nav>
  );
}
