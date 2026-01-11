export default function LineChart({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="chart-placeholder">📈 Line Chart</div>
      <div className="filters">
        <button className="b1">7 Days</button>
        <button className="b2">15 Days</button>
        <button className="b3">30 Days</button>
        <button className="b4">Custom</button>
      </div>
    </div>
  );
}
