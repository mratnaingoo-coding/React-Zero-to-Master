import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";


function App() {
  return (
    <>
     <Routes>
      <Route path="/home" element={<Home />} />
      
    </Routes>
    </>
  );
}

export default App;
