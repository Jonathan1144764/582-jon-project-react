export default function ParkItem({ park, allEvents }) {
  return (
    <div className="park">
      <div
        className="park-image"
        style={{ backgroundImage: "url(" + park.parkImage + ")" }}
      ></div>
      <h3>{park.parkName}</h3>
      <p>{park.parkStatus}</p>
      <ul>
        <li>Soccer fields: {park.soccerfields}</li>
        <li>Baseball diamonds: {park.baseballDiamonds}</li>
        <li>Chalets: {park.parkChalets}</li>
        <li>Playgrounds: {park.parkPlaygrounds}</li>
      </ul>
    </div>
  );
}
