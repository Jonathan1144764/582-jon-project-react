export default function UserList(props) {
  return (
    <>
      <label htmlFor="users">Login: </label>
      <select name="users" id="users-list">
        <option></option>
        <option value="user">User</option>
      </select>
    </>
  );
}
