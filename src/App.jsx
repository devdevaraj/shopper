import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentss/navbar";
import Home from "./pages/home";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}