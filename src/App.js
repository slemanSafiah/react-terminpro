import MainPage from "./components/pages/main-page/MainPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/userContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
