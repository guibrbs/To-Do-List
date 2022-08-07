import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Auth from "../pages/Auth";
import Homepage from "../pages/Homepage";

const AppRoutes = () => {
  const { user } = useContext(UserContext);
  return (
    <BrowserRouter>
      {user ? (
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
