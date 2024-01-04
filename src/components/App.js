import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../layout/HomePage";
import Company from "../layout/Company";

export default function App() {
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
  return <button className="more">Leia mais</button>;
}
