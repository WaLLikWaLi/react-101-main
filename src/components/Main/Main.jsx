import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Teachers from "../Teachers/Teachers";
import NotFound from "../NotFound/NotFound";

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
