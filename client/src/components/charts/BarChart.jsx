export default function BarChart({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <div className="chart-placeholder">📊 Chart Area</div>

      <div className="filters">
        <button className="b1">7 Days</button>
        <button className="b2">15 Days</button>
        <button className="b3">30 Days</button>
        <button className="b4">Custom</button>
      </div>
    </div>
  );
}
