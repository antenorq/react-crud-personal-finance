import { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useNotification from "../hooks/useNotification";

export default function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);

  //HOOK Notification
  const { setNotification, showLoading } = useNotification();

  const navigate = useNavigate();

  //I KNOW I NEED REFACTORE IT TO PUT IN A GLOBAL CONTEXT
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  const url = (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) + "/login";
  //const url = (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) + "/users";
  /*
  const url =
    (devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL) +
    "/users" +
    "?email=" +
    email +
    "&password=" +
    password;
*/
  const handleSubmit = (event) => {
    //START LOADING
    showLoading(true);

    event.preventDefault();
    const data = { email, password };
    console.log(url);
    /*
    
    

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setNotification("SUCCESSUFLY LOGED IN", "success");
          setPassword("");
          setUser(email);
          navigate("/");
        } else {
          setNotification("CANNOT FIND THIS USER", "error");
        }

        //END LOADING
        showLoading(false);
      })
      .catch((error) => {
        setNotification("SOMETHING WENT WRONG: " + error, "error");
      });
*/

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.user) {
          setNotification("SUCCESSUFLY LOGED IN", "success");
          setPassword("");
          setUser(result.user);
          navigate("/");
        } else if (result === "Cannot find user") {
          setNotification("CANNOT FIND THIS EMAIL", "error");
        } else if (result === "Incorrect password") {
          setNotification("INCORRECT PASSWORD", "error");
        } else {
          setNotification(result, "error");
        }

        //END LOADING
        showLoading(false);
      })
      .catch((error) => {
        setNotification("SOMETHING WENT WRONG: " + error, "error");
      });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
