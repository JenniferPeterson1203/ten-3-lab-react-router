import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

// console.log(PetsList);
/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={<Home employees={employees} owners={owners} pets={pets} />}
        />
        {/* Staff Page Route */}
        <Route path="/staff" element={<StaffList employees={employees} />} />
        {/* Pets Route */}
        <Route path="/pets">
          <Route index element={<PetsList pets={pets} />} />
          <Route path=":kind" element={<PetsList pets={pets} />} />
        </Route>
      </Routes>
      {/* <Home employees={employees} owners={owners} pets={pets} /> */}
      {/* <StaffList employees={employees} /> */}
      {/* <PetsList pets={pets} /> */}
      <Footer />
    </div>
  );
}

export default App;
