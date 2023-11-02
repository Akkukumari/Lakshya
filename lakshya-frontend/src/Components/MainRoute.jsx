import { Route, Routes } from "react-router-dom";
import  Home  from "../Pages/Home";
import  Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Findtutor from "../Pages/Findtutor";
import Checkoutpage from "../Pages/Checkoutpage";
import Payment from "../Pages/Payment";

export default function  MainRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Findtutor" element={<Findtutor />} />
      <Route path="/Checkoutpage" element={<Checkoutpage />} />
      <Route path="/Payment" element={<Payment />} />
       </Routes>
  );
};
