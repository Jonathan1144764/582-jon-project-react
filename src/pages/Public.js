import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import MainHeader from "../components/MainHeader";
import ViewBookmarksButton from "../components/ViewBookmarksButton";
import BookmarksList from "../components/BookmarksList";
import ParkList from "../components/ParkList";

export default function Public() {
  const { user } = useSelector((store) => store.user);

  const [isShown, setIsShown] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [allParks, setAllParks] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    handleFetchParks();
    handleFetchEvents();
  }, []);

  async function handleFetchParks() {
    await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public"
    )
      .then((response) => response.json())
      .then((json) => {
        setAllParks(json);
      });
  }

  async function handleFetchEvents() {
    await fetch(
      "https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/public/event"
    )
      .then((response) => response.json())
      .then((json) => {
        setAllEvents(json);
      });
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

  function exitWindow() {
    setIsShown(false);
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
          <ParkList allParks={allParks} allEvents={allEvents} />
        </div>
      </section>
    </>
  );
}
