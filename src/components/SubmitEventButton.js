export default function SubmitEventButton({ handleSubmitNewEvent }) {
  return (
    <>
      <button onClick={handleSubmitNewEvent}>Submit</button>
      <button>Update</button>
      <button>Delete</button>
    </>
  );
}
