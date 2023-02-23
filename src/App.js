import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";
import AreaAppBar from "./components/AreaAppBar";
import Login from "./pages/Login";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { NotificationContext } from "./context/NotificationContext";
import CategoryList from "./pages/CategoryList";

import "./app.css";

function App() {
  const { user } = useContext(AuthContext);
  const { message, typemessage, setMessage } = useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <BrowserRouter>
      <CssBaseline />
      <AreaAppBar maxWidth="xl" />
      <Container maxWidth="xl" sx={{ mt: "100px" }}>
        {message && (
          <Alert severity={typemessage} sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}
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
          <Route
            path="/category"
            element={user ? <Category /> : <Navigate to="/" />}
          />
          <Route
            path="/category/edit/:id"
            element={user ? <Category /> : <Navigate to="/" />}
          />
          <Route
            path="/category-list"
            element={user ? <CategoryList /> : <Navigate to="/" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
