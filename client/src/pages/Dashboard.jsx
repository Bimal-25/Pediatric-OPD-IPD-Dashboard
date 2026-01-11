import BarChart from "../components/charts/BarChart";
import LineChart from "../components/charts/LineChart";
import OPDForm from "../components/forms/OPDForm";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>OPD Overview</h1>

      <div className="grid3">
        <BarChart title="Age Group Distribution (Today)" />
        <LineChart title="Patients (Last 7 Days)" />
        <BarChart title="Revenue (Per Date)" />
      </div>

      <OPDForm />
    </div>
  );
}
