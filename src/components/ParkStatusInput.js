export default function ParkStatusInput() {
  return (
    <>
      <div className="input-wrapper">
        <input type="radio" name="status" value="open" id="park-status-open" />
        <label htmlFor="park-status-open">Open</label>
      </div>
      <div className="input-wrapper">
        <input
          type="radio"
          name="status"
          value="closed"
          id="park-status-closed"
        />
        <label htmlFor="park-status-closed">Closed</label>
      </div>
      <div className="input-wrapper">
        <input
          type="radio"
          name="status"
          value="maintenance"
          id="park-status-maintenance"
        />
        <label htmlFor="park-status-maintenance">Closed for maintenance</label>
      </div>
      <div className="input-wrapper">
        <input
          type="radio"
          name="status"
          value="construction"
          id="park-status-construction"
        />
        <label htmlFor="park-status-construction">Under construction</label>
      </div>
    </>
  );
}
