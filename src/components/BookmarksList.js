export default function BookmarksList({ isShown }) {
  if (isShown) {
    return (
      <div className="bookmark-window">
        <h3>Your events</h3>
      </div>
    );
  }
}
