export default function EventDescriptionInput() {
  return (
    <>
      <label htmlFor="description">Description: </label>
      <textarea
        name="descriptoin"
        id="event-description-input"
        cols="30"
        rows="3"
      ></textarea>
    </>
  );
}
