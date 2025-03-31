import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Correction ici
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Auth from "../pages/Auth";
import ResetPassword from "../pages/ResetPassword";
// import Token from "../test/pages/Token";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AppRouter = () => {

  const { userInfo } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={userInfo ? <Navigate to="/" /> : <Auth/>} />
      <Route path="/register" element={userInfo ? <Navigate to="/" /> : <Auth/>} />
      <Route path="/reset-password" element={userInfo ? <Navigate to="/" /> : <ResetPassword/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
