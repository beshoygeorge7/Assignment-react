import { BrowserRouter, Route , Routes } from "react-router";
import Home from "./assets/pages/Home/Home";
import About from "./assets/pages/About/About";
import Protofolio from "./assets/pages/Protofolio/Protofolio";
import Contact from "./assets/pages/Contact/Contact";
import NotFound from "./assets/pages/NotFound/NotFound";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/protofolio" element={<Protofolio/>} />  
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App
