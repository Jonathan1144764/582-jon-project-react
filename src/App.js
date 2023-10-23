import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ParkForm from "./components/ParkForm";
import EventForm from "./components/EventForm";
import Public from "./pages/Public";

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
          <Route path="public" element={<Public />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
