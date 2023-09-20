export default function ParkSelect({ parks, handleSelectPark }) {
  return (
    <>
      <label htmlFor="parks">Select park: </label>
      <select name="parks" id="parks" onChange={handleSelectPark}>
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
