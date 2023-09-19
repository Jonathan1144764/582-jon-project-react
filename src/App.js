import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ParkForm from "./components/ParkForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />}>
            <Route path="newpark" element={<ParkForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
