import { Box, Button, CardMedia, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Login = () => {
  // make state isEmpty
  const [isEmpty, setIsEmpty] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    // try {
    //     await signInWithEmailAndPassword(auth, email, password);
    //     navigate("/");
    // } catch (error) {
    //     setErrorMessage(error.message);
    // }
};

  const styles = (theme) => ({
    FontColor: {
      color: "white",
    },
  });


  return (
    <div
      className="login-page"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%)",
        zIndex: "tooltip",
      }}
    >
      <Box sx={{ width: "80%", height: "100vh" }}>
        <CardMedia
          component="img"
          image="http://placekitten.com/2004/2004"
          height="100%"
          sx={{
            height: "100%",
            width: "80%",
            zindex: "modal",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          mt: "40vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          error
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          sx={{
            mt: "20px",
            width: "70%",
            input: { color: "white" },
          }}
          onChange={(e) =>
            e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false)
          }
        />

        <TextField
          error
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{
            mt: "20px",
            width: "70%",
            input: { color: "white" },
          }}
          onChange={(e) =>
            e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false)
          }
        />

        <Button
          variant="contained"
          color="success"
          sx={{
            mt: "20px",
            width: "70%",
          }}
          onClick={() => {
            isEmpty
              ? alert("Please fill out all fields")
              : alert("Login Success");
          }}
        >
          Login
        </Button>
        <Grid container>
          <Grid item sx={{ color: "white" }}>
            asdf
            {/* <Link to="/register">{"Don't have an account? Sign Up"}</Link> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
