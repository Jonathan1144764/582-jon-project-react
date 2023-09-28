export default function SubmitParkButton({
  handleSubmitNewPark,
  handleUpdatePark,
  handleDeletePark,
}) {
  return (
    <>
      <button onClick={handleSubmitNewPark}>Submit</button>
      <button onClick={handleUpdatePark}>Update</button>
      <button onClick={handleDeletePark}>Delete</button>
    </>
  );
}
