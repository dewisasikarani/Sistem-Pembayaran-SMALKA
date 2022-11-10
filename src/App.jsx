import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./templates/Layout";
import Rekap from "./pages/rekap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="masuk" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rekap" element={<Rekap />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
