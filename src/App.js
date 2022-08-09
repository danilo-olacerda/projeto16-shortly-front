import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import Header from "./Header/Header.js";
import Ranking from "./Ranking/Ranking.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";
import Home from "./Home/Home.js";
import OpenUrl from "./OpenUrl/OpenUrl.js";

export default function App() {

  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{token, setToken}}>
        <Header />
        <Routes>
          <Route path="/" element={<Ranking />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/urls/open/:shortUrl" element={<OpenUrl />} />
        </Routes>
      </UserContext.Provider>
	</BrowserRouter>
  );
}
