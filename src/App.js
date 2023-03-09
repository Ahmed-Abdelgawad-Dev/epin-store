import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Link, Navigate, Outlet, redirect, Route, Routes } from "react-router-dom";
import Copyrights from "./components/Copyrights.jsx";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Product from "./routes/product.jsx";
import Checkout from "./routes/Checkout.jsx";
import Model from "./components/Model.jsx";
import Paymentsuccess from "./components/Paymentsuccess.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div className="Main">
            <Navbar />
            <Outlet />
            <Copyrights />
            <Model />
          </div>}>
          <Route index element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/:productID" element={<Product />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/paymentsuccess" element={<Paymentsuccess />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
