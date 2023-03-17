import Complaint from "./components/Complaint";
import Dashboard from "./components/Dashboard";
import GatePass from "./components/GatePass";
import LeaveForm from "./components/LeaveForm";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <h1 className="flex flex-row justify-items-center ">
      <div><Sidebar /></div>
      {/* <Dashboard /> */}
      <div><GatePass /></div>
      {/* <div><Complaint /></div> */}
      <div><LeaveForm /></div>
    </h1>
  )
}
