import { Routes, Route, BrowserRouter } from "react-router-dom";
import FullLayout from "../components/full/FullLayout";
import Home from "../pages/home/Home";


const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route  path="/home" element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
