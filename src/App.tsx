import { Top } from "./pages/Top";
import { Detail } from "./pages/Detail";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

// export default App;
