import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useNotification from "../hooks/useNotification";
import {
  Container,
  TextField,
  Box,
  Grid,
  Button,
  FormControl,
  Typography,
} from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //HOOK Notification
  const { setNotification, showLoading } = useNotification();

  const navigate = useNavigate();

  let { id } = useParams();

  const url = "http://localhost:3000/users";

  useEffect(() => {
    if (id) {
      fetch(url + "/" + id)
        .then((data) => data.json())
        .then((data) => {
          setName(data.name);
          setLogin(data.login);
          setEmail(data.email);
        });
    }
  }, []);

  //POST/EDIT USER
  const handleSubmit = async (e) => {
    //START LOADING
    showLoading(true);
    e.preventDefault();

    //EDIT - METHOD PUT
    if (id) {
      try {
        const data = { id, name, login, email, password };
        const res = await fetch(url + "/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setNotification(
            "USER UPDATED SUCCESSFULY: " + res.statusText,
            "success"
          );
          navigate("/");
        } else {
          setNotification("SOMETHING WENT WRONG: " + res.statusText, "error");
        }
        //END LOADING
        showLoading(false);
      } catch (error) {
        setNotification("SOMETHING WENT WRONG: " + error, "error");
      }
    }
    //CREATE - METHOD POST
    else {
      try {
        const data = { name, login, email, password };
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          setNotification(
            "USER CREATED SUCCESSFULY: " + res.statusText,
            "success"
          );
          //redirect to login page
          navigate("/login");
        } else {
          setNotification("SOMETHING WENT WRONG: " + res.statusText, "error");
        }
        //END LOADING
        showLoading(false);
      } catch (error) {
        setNotification("SOMETHING WENT WRONG: " + error, "error");
      }
    }

    //clear states and inputs after submit or edit
    setName(null);
    setLogin(null);
    setEmail(null);
    setPassword(null);
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          borderRadius: "8px",
          bgcolor: "#f7f7f7",
          p: 2,
        }}
      >
        <Typography
          align="center"
          color="primary"
          variant="h4"
          component="h2"
          gutterBottom
        >
          {id ? "Update User" : "Sign Up"}
        </Typography>

        {/* FORM */}
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 2, md: 4 }}
              columnSpacing={{ xs: 2, sm: 2, md: 4 }}
              sx={{ alignContent: "center" }}
            >
              <Grid item xs={12} md={6} lg={3}>
                <TextField
                  name="name"
                  label="Name"
                  type="text"
                  required
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ backgroundColor: "#fff", width: "100%" }}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={2}>
                <TextField
                  name="login"
                  label="Login"
                  type="text"
                  required
                  margin="normal"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  sx={{ backgroundColor: "#fff", width: "100%" }}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <TextField
                  name="email"
                  label="Email"
                  type="text"
                  required
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ backgroundColor: "#fff", width: "100%" }}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={2}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  required
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ backgroundColor: "#fff", width: "100%" }}
                />
              </Grid>

              <Grid item xs={12} md={12} lg={2}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ marginTop: "18px", width: "100%", p: "12px" }}
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Container>
      <Link to="/">
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ marginTop: "18px" }}
        >
          Back
        </Button>
      </Link>
    </>
  );
};

export default Register;
