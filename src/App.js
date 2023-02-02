import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import AreaAppBar from "./components/AreaAppBar";
import Login from "./components/Login";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import "./app.css";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <CssBaseline />
      <AreaAppBar maxWidth="xl" />
      <Container maxWidth="xl" sx={{ p: 4 }}>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          <Route path="*" element={user ? <Dashboard /> : <Login />} />
          <Route
            path="/income"
            element={user ? <Income /> : <Navigate to="/" />}
          />
          <Route
            path="/expense"
            element={user ? <Expense /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={user ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
