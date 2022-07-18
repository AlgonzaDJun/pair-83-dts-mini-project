import { Box, Button, CardMedia, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  // make state isEmpty
  const [isEmpty, setIsEmpty] = useState("");

  const styles = theme => ({
    FontColor:{
        color:'white'
    }
});

  // background: 'linear-gradient(to right bottom, #430089, #82ffa1)'
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
      <Box 
      sx={{ width: "80%", height: "100vh"}}
      >
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
      >
        <TextField
          error
          id="outlined-basic"
          label="Username"
          size="normal"
          fontColor="white"
          sx={{
            mt: "20px",
            width: "70%",
            input: { color: 'white' }
          }}
          onChange={(e) =>
            e.target.value === "" ? setIsEmpty(true) : setIsEmpty(false)
          }
        />

        <TextField
          error
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          size="normal"
          sx={{
            mt: "20px",
            width: "70%",
            input: { color: 'white' },
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
      </Box>
    </div>
  );
};

export default Login;
