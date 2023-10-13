import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeaderNav() {
  const { user } = useSelector((store) => store.user);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/public">Parks</Link>
      {user === "admin" && <Link to="/admin">Admin</Link>}
    </nav>
  );
}
