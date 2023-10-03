export default function SubmitEventButton({
  handleSubmitNewEvent,
  handleUpdateEvent,
  handleDeleteEvent,
}) {
  return (
    <>
      <button onClick={handleSubmitNewEvent}>Submit</button>
      <button onClick={handleUpdateEvent}>Update</button>
      <button onClick={handleDeleteEvent}>Delete</button>
    </>
  );
}
