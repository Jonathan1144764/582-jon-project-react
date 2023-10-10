import { useDispatch } from "react-redux";
import { logUser } from "../features/user/userSlice";

export default function UserList({ users }) {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="users">Login: </label>
      <select onChange={() => dispatch(logUser())} name="users" id="users-list">
        <option></option>
        {users.map((user) => {
          return (
            <option key={user.id} value={user.username}>
              {user.username}
            </option>
          );
        })}
      </select>
    </>
  );
}
