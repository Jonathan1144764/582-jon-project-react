export default function ParkSelect({ parks }) {
  return (
    <>
      <label htmlFor="parks">Select park: </label>
      <select name="parks" id="parks">
        <option></option>
        {parks.map((park) => {
          return (
            <option key={park.id} value={park.parkName}>
              {park.parkName}
            </option>
          );
        })}
      </select>
    </>
  );
}
