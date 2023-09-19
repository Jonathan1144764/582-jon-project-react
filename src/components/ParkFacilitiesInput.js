export default function ParkFacilitiesInput() {
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor="soccer">Soccer fields: </label>
        <input type="number" name="soccer" id="soccer" value="0" min="0" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="baseball">Baseball diamonds: </label>
        <input type="number" name="baseball" id="baseball" value="0" min="0" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="chalet"> Chalets: </label>
        <input
          type="number"
          name="bathrooms"
          id="bathrooms"
          value="0"
          min="0"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="playground">Playgrounds: </label>
        <input
          type="number"
          name="playground"
          id="playground"
          value="0"
          min="0"
        />
      </div>
    </>
  );
}
