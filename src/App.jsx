import Complaint from "./components/Complaint";
import Dashboard from "./components/Dashboard";
import GatePass from "./components/GatePass";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <h1 className="flex flex-row">
      <div><Sidebar /></div>
      {/* <Dashboard /> */}
      <div><GatePass /></div>
      {/* <Complaint /> */}
    </h1>
  )
}
