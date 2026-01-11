import BarChart from "../components/charts/BarChart";
import RoomGrid from "../components/RoomGrid";
import IPDForm from "../components/forms/IPDForm";

export default function IPD() {
  return (
    <div className="page">
      <h1>IPD Data Charts</h1>

      <div className="grid3">
        <RoomGrid />
        <BarChart title="Room Revenue" />
        <BarChart title="Medicine Revenue" />
      </div>

      <IPDForm />
    </div>
  );
}
