import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/beranda";
import LoginPage from "./pages/auth/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}