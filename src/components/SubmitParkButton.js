export default function SubmitParkButton({
  handleSubmitNewPark,
  handleUpdatePark,
}) {
  return (
    <>
      <button onClick={handleSubmitNewPark}>Submit</button>
      <button onClick={handleUpdatePark}>Update</button>
      <button>Delete</button>
    </>
  );
}
