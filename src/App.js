import { Sidebar } from "./Components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Settings, Foods, Bills, Messages } from "./Pages";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
