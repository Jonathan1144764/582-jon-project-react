import ExitWindow from "./ExitWindow";

export default function BookmarksList({ isShown, exitWindow }) {
  if (isShown) {
    return (
      <div className="bookmark-window">
        <h3>Your events</h3>
        <ExitWindow exitWindow={exitWindow} />
      </div>
    );
  }
}
