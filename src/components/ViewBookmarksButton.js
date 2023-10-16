export default function ViewBookmarksButton({ bookmarksView }) {
  return (
    <button className="view-bookmarks-btn" onClick={bookmarksView}>
      View your events
    </button>
  );
}
