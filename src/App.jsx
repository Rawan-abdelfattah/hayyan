import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hayyan } from "./pages/Hayyan";
import ThankYouHayyan from "./pages/ThankYouHayyan";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hayyan />} />
        <Route path="/thank-you-hayyan" element={<ThankYouHayyan />} />
      </Routes>
    </Router>
  );
}

export default App;
