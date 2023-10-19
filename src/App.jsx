import Main from "./pages/Main";
import logo from "./logo.svg";
import Coverpage from "./pages/Cover";

import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Coverpage />} />
        <Route path="/pages/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
