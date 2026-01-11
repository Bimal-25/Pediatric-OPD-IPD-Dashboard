import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import IPD from "./pages/IPD";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === "dashboard" ? <Dashboard /> : <IPD />}
    </>
  );
}
