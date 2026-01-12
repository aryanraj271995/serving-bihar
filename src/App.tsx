import { Routes, Route } from "react-router-dom";
import MobileLayout from "./app/layout/MobileLayout";
import Home from "./app/pages/Home";
import ServiceDetail from "./app/pages/ServiceDetail";
import Profile from "./app/pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/:type" element={<ServiceDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
