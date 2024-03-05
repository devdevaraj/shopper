import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentss/navbar";
import Home from "./pages/home";
<<<<<<< HEAD
import { useState } from "react";
=======
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
>>>>>>> 3f7ee537d74aea674bd7f53f197832acbb4f5c70

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home search={search} />} />
=======
          <Route path="/" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
          <Route path="/cart" Component={Cart} />
>>>>>>> 3f7ee537d74aea674bd7f53f197832acbb4f5c70
        </Routes>
      </BrowserRouter>
    </main>
  );
}