export default function SubmitEventButton({
  handleSubmitNewEvent,
  handleUpdateEvent,
}) {
  return (
    <>
      <button onClick={handleSubmitNewEvent}>Submit</button>
      <button onClick={handleUpdateEvent}>Update</button>
      <button>Delete</button>
    </>
  );
}
