import ParkItem from "./ParkItem";

export default function ParkList({ allParks, allEvents }) {
  return (
    <div className="park-list-grid">
      {allParks.map((park) => {
        return <ParkItem key={park.id} park={park} allEvents={allEvents} />;
      })}
    </div>
  );
}
