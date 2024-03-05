import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentss/navbar";
import Home from "./pages/home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}