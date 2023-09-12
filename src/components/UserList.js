export default function UserList({ users }) {
  return (
    <>
      <label htmlFor="users">Login: </label>
      <select name="users" id="users-list">
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
