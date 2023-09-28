import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ParkForm from "./components/ParkForm";
import EventForm from "./components/EventForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />}>
            <Route path="newpark" element={<ParkForm />} />
            <Route path="updatepark" element={<ParkForm />} />
            <Route path="newevent" element={<EventForm />} />
            <Route path="updateevent" element={<EventForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
