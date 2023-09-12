import UserList from "./UserList";

export default function ManageUsers() {
  let allUsers = [];

  function handleFetchUsers() {
    allUsers = [];
    fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/")
      .then((response) => response.json())
      .then((json) => {
        for (let user of json) {
          allUsers.push(user);
        }
      });
    console.log(allUsers);
  }
  handleFetchUsers();

  return (
    <div className="user-management">
      <UserList users={allUsers} />
    </div>
  );
}
