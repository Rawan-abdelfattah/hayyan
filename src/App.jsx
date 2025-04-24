import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hayyan } from "./pages/Hayyan";
import ThankYou from "./pages/ThankYou";
import { Data } from "./pages/Data";
import { NotFound } from "./pages/NotFound";
import { Ajwan } from "./pages/Ajwan";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hayyan" element={<Hayyan />} />
        <Route path="/ajwan" element={<Ajwan />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/data" element={<Data />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </Router>
  );
}

export default App;
