import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hotels" element={<List />} />
      <Route exact path="/hotel/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;
