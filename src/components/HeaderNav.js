import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="public">Parks</Link>
      <Link to="admin">Admin</Link>
    </nav>
  );
}
