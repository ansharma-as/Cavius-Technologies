import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ItemDetails />} />
    </Routes>
  );
}

export default App;
