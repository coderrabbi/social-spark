import "./App.css";
import { RouterProvider } from "react-router-dom";

import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Status from "./components/Status";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Navbar />
      {/* <Login />
      <Register /> */}
      <Status />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
