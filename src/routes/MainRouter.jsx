import { Routes, Route, BrowserRouter } from "react-router-dom";
import FullLayout from "../components/full/FullLayout";
import Home from "../pages/home/Home";
import Terreneitor from "../pages/home/Terreneitor";

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullLayout />}>
              <Route  index element={<Home />} />
              <Route  path="/terreneitor" element={<Terreneitor />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
