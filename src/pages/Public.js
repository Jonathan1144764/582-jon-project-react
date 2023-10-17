import { useSelector } from "react-redux";
import { useState } from "react";
import MainHeader from "../components/MainHeader";
import ViewBookmarksButton from "../components/ViewBookmarksButton";
import BookmarksList from "../components/BookmarksList";

export default function Public() {
  const { user } = useSelector((store) => store.user);

  const [isShown, setIsShown] = useState(false);
  const [userEvents, setUserEvents] = useState([]);

  function exitWindow() {
    setIsShown(false);
  }

  async function bookmarksView() {
    setIsShown(true);

    await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/user"
    )
      .then((response) => response.json())
      .then((json) => {
        for (let profile of json) {
          if (profile.username === user) {
            setUserEvents(profile.bookmarkedEvents);
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
          <BookmarksList
            isShown={isShown}
            exitWindow={exitWindow}
            userEvents={userEvents}
          />
        </div>
      </section>
    </>
  );
}