import { useState, useEffect } from "react";
import UserList from "./UserList";
import CreateUsers from "./CreateUsers";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleFetchUsers();
  }, []);

  async function handleFetchUsers() {
    await fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }

  async function handleCreateUsers() {
    let newId = users[users.length - 1].id + 1;
    let number = Number(users[users.length - 1].username.substring(5)) + 1;
    let newUsername = "Guest" + number.toString();
    let newUser = {
      id: newId,
      username: newUsername,
      bookmarkedEvents: [],
    };
    console.log(newUser);

    try {
      await fetch(
        "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
    } catch (error) {
      console.log(error);
    }
    handleFetchUsers();
  }

  return (
    <div className="user-management">
      <CreateUsers handleCreateUsers={handleCreateUsers} />
      <UserList users={users} />
    </div>
  );
}
