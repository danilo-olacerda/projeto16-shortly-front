import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext.js";
import Header from "./Header/Header.js";
import Ranking from "./Ranking/Ranking.js";
import Register from "./Register/Register.js";
import Login from "./Login/Login.js";

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
        </Routes>
      </UserContext.Provider>
	</BrowserRouter>
  );
}
