import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hayyan } from "./pages/Hayyan";
import ThankYouHayyan from "./pages/ThankYouHayyan";
import { SheetsData } from "./pages/SheetsData";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hayyan />} />
        <Route path="/thank-you-hayyan" element={<ThankYouHayyan />} />
        <Route path="/data" element={<SheetsData />} />
      </Routes>
    </Router>
  );
}

export default App;
