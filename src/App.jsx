import styles from "./style";
import { Navbar, HomeP, AboutP, ContactP } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div>
    <div
      className={`w-full left-0 top-0 absolute xl:pl-[300px] xl:pr-[300px] sm:pl-[30px] sm:pr-[50px] sxs:pl-[10px] sxs:pr-[20px] sm:mt-4`}
    >
      <Navbar />
    </div>

    <Routes>
      <Route path="/" element={<HomeP />} />
      <Route path="/about" element={<AboutP />} />
      <Route path="/contact" element={<ContactP />} />
    </Routes>

    {/* <div>
      <HomeP />
    </div> */}
  </div>
);

export default App;
