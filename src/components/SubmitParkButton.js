export default function SubmitParkButton({
  location,
  handleSubmitNewPark,
  handleUpdatePark,
  handleDeletePark,
}) {
  if (location === "/newpark") {
    return <button onClick={handleSubmitNewPark}>Submit</button>;
  } else {
    return (
      <>
        <button onClick={handleUpdatePark}>Update</button>
        <button onClick={handleDeletePark}>Delete</button>
      </>
    );
  }
}
