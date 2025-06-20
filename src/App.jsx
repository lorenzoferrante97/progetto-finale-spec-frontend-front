import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/defaultLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CompareDetail from "./pages/CompareDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/videogame/:id" element={<Detail />} />
          <Route path="/compare" element={<CompareDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
