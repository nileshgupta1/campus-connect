import React from "react";
import { Home, Complaint, Dashboard, GatePass, LeaveForm, Sidebar, Login, Register } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/leaveform" element={<LeaveForm />}></Route>
        <Route path="/complaint" element={<Complaint />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
