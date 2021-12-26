import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Modal from "./components/modal/Modal";
import { useContext } from "react";
import { AppContext } from "./state/Context";
import Notification from "./components/notification/Notification";

function App() {
  const { isModal, isNotif, notifMsg } = useContext(AppContext);
  return (
    <div className="App">
      {isModal && <Modal />}
      {isNotif && <Notification>{notifMsg}</Notification>}

      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
