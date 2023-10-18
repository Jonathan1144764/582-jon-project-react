export default function ViewBookmarksButton({ handleBookmarksView }) {
  return (
    <button className="view-bookmarks-btn" onClick={handleBookmarksView}>
      View your events
    </button>
  );
}
