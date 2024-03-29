import { Routes, Route } from "react-router-dom";
import MainPageComponent from "./utilities/mainPage";
import IntroPageComponent from "./utilities/introPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPageComponent />} />
      <Route path="/inner/*" element={<MainPageComponent />} />
    </Routes>
  );
};

export default App;
