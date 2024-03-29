import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";
import AreaAppBar from "./components/AreaAppBar";

import Login from "./pages/Login";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Dashboard from "./pages/Dashboard";
import CategoryList from "./pages/CategoryList";
import CategoryForm from "./pages/CategoryForm";
import Search from "./pages/Search";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { NotificationContext } from "./context/NotificationContext";

import "./app.css";

function App() {
  const { user } = useContext(AuthContext);
  const { message, typemessage, setMessage } = useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, setMessage]);

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
            path="/log-in"
            element={user ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/category"
            element={
              user ? <CategoryList user_id={user.id} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/category/create"
            element={
              user ? <CategoryForm user_id={user.id} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/category/update/:id"
            element={
              user ? <CategoryForm user_id={user.id} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/register/update/:id"
            element={user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/search"
            element={user ? <Search user_id={user.id} /> : <Navigate to="/" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
