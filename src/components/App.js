import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../layout/HomePage";
import Company from "../layout/Company";

export default function App() {
  const [active, setActive] = useState(0);
  function handleActive(index) {
    setActive(index);
  }
  return (
    <div>
      <BrowserRouter>
        {/* <Header active={active} onActive={handleActive} />
        {active === 0 && (
          <>
            {" "}
            <IntroLogo />
            <Products />
            <Newsletter />{" "}
          </>
        )}
        {active === 1 && <Company />}
        <Footer /> */}
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function BtnReadMore() {
  return (
    <a href="#" className="more">
      Leia mais
    </a>
  );
}
