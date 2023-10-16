import { useSelector } from "react-redux";
import MainHeader from "../components/MainHeader";
import ViewBookmarksButton from "../components/ViewBookmarksButton";

export default function Public() {
  const { user } = useSelector((store) => store.user);

  async function bookmarksView() {
    console.log(user);

    await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/user"
    )
      .then((response) => response.json())
      .then((json) => {
        for (let profile of json) {
          if (profile.username === user) {
            console.log(profile.bookmarkedEvents);
          }
        }
      });
  }

  return (
    <>
      <MainHeader />
      <section className="public-view">
        <div className="container">
          <h2>See what's up at your local parks</h2>
          <ViewBookmarksButton bookmarksView={bookmarksView} />
        </div>
      </section>
    </>
  );
}
