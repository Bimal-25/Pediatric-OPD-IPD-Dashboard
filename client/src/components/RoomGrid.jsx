export default function RoomGrid() {
  const rooms = ["101", "102", "103", "104", "105", "106", "107", "108"];

  return (
    <div className="card">
      <h3>Room Status</h3>
      <div className="rooms">
        {rooms.map((r, i) => {
          const occupied = i % 2 === 0;
          return (
            <div key={r} className={`room ${occupied ? "occ" : "emp"}`}>
              <h4>Room-{r}</h4>
              <p>{occupied ? "Occupied" : "Empty"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
