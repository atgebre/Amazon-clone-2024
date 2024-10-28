import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Auth from "./Pages/Auth/Auth";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QEMKCDGk9UjAWn4KlwPLlyjfoPnWR5FrJM844UYZaIRNEaPAUnmJacgVnXEz7MjTqPeveiDIxDWM9jD3MgGfWLN00jouYljG9"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/payments" element={<Elements stripe={stripePromise}>
                <Payment />
              </Elements> }/>
        <Route path="/orders" element={<Orders /> }/>
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
