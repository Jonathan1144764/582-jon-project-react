export default function SubmitEventButton({
  location,
  handleSubmitNewEvent,
  handleUpdateEvent,
  handleDeleteEvent,
}) {
  if (location === "/newevent") {
    return <button onClick={handleSubmitNewEvent}>Submit</button>;
  } else {
    return (
      <>
        <button onClick={handleUpdateEvent}>Update</button>
        <button onClick={handleDeleteEvent}>Delete</button>
      </>
    );
  }
}
