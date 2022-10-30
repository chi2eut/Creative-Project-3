import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Cats from "./pages/Cats";
import Shibe from "./pages/Shibe";
import Bird from "./pages/Bird";

function App() {
  return (
    <BrowserRouter basename="/react/Animal-Website/multi/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cats" element={<Cats />} />
          <Route path="shibe" element={<Shibe />} />
          <Route path="bird" element={<Bird />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
