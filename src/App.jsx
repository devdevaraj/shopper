import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentss/navbar";
import Home from "./pages/home";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}