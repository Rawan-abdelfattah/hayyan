import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hayyan } from "./pages/Hayyan";
import { Ajwan } from "./pages/Ajwan";
import { AlZahia } from "./pages/AlZahia";
import ThankYou from "./pages/ThankYou";
import { Data } from "./pages/Data";
import { NotFound } from "./pages/NotFound";
import { AlMamsha } from "./pages/AlMamsha";

function App() {
  return (
    <Router basename="/ofplan">
      <Routes>
        <Route path="/hayyan" element={<Hayyan />} />
        <Route path="/ajwan" element={<Ajwan />} />
        <Route path="/al-zahia" element={<AlZahia />} />
        <Route path="/al-mamsha" element={<AlMamsha  />} /> 
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/data" element={<Data />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </Router>
  );
}

export default App;
