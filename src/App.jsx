import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Photos from "./Pages/Photos";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
