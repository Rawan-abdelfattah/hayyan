import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hayyan } from "./pages/Hayyan";
import ThankYou from "./pages/ThankYou";
import { HayyanData } from "./pages/HayyanData";
import { NotFound } from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hayyan />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/data-hayyan" element={<HayyanData />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}

      </Routes>
    </Router>
  );
}

export default App;
