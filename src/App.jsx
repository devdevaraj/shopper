import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentss/navbar";
import Home from "./pages/home";
import { useState } from "react";

import Detail from "./pages/Detail";
import Cart from "./pages/Cart";


export default function App() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/detail/:id" Component={Detail} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}