import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header.js";
import Ranking from "./Ranking/Ranking.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Ranking />} />
        {/* <Route path="/cadastro" element={<RegisterScreen  />}/>
        <Route path="/habitos" element={<MainScreen userphoto={userphoto} completed={completed}/>}/>
        <Route path="/historico" element={<History userphoto={userphoto} completed={completed}/>}/>
        <Route path="/hoje" element={<Today userphoto={userphoto} setCompleted={setCompleted} completed={completed} />}/> */}
      </Routes>
	</BrowserRouter>
  );
}
