import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CostComparison from "./pages/CostComparison";
import TreatmentDirectory from "./pages/TreatmentDirectory";
import BookingPlanner from "./pages/BookingPlanner";
import VisaAssistance from "./pages/VisaAssistance";
import Telemedicine from "./pages/Telemedicine";
import TreatmentDetails from "./pages/TreatmentDetails";
import HospitalDetails from "./pages/HospitalDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cost-comparison" element={<CostComparison />} />
            <Route path="/treatments" element={<TreatmentDirectory />} />
            <Route path="/treatments/:id" element={<TreatmentDetails />} />
            <Route path="/hospitals/:id" element={<HospitalDetails />} />
            <Route path="/booking" element={<BookingPlanner />} />
            <Route path="/visa-assistance" element={<VisaAssistance />} />
            <Route path="/telemedicine" element={<Telemedicine />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
