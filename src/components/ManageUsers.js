import { useState, useEffect } from "react";
import UserList from "./UserList";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async function handleLoadUsers() {
    //   const allUsers = await handleFetchUsers();
    //   setUsers(allUsers);
    // }
    const handleLoadUsers = async () => {
      const allUsers = await handleFetchUsers();
      setUsers(allUsers);
    };

    handleLoadUsers();

    // handleFetchUsers();
  }, []);

  // async function handleFetchUsers() {
  //   await fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // return json;
  //       setUsers(json);
  //     });
  // }

  const handleFetchUsers = async () => {
    const res = await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/"
    );
    const userData = await res.json();
    return userData;
  };

  return (
    <div className="user-management">
      <UserList users={users} />
    </div>
  );
}
