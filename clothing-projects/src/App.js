import { Routes, Route } from "react-router";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

const Shop = () => {
  return <div>Shop Page</div>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
