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

  <div class="user-management"></div>;

  handleFetchUsers();
}
