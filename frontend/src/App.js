import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Advice from "./pages/Advice";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddictionsList from "./pages/AddictionsList";
import CreateAddiction from "./pages/CreateAddiction";
import './App.css';
import AuthContextProvider from "./AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addictions" element={<AddictionsList />} />
          <Route path="/create-addiction" element={<CreateAddiction />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
