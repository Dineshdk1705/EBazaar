import React, { useState, useEffect } from "react";
import styles from "./OnBoarding.module.css";
import { Button, Stack, Typography, TextField, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  loginWithEmail,
  loginWithGoogle,
  registerWithEmail,
} from "../../redux/slices/authSlice";

const OnBoarding = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    try {
      await dispatch(loginWithEmail({ email, password })).unwrap();
      toast.success("Login Successfully");
    } catch (err) {
      toast.error("Invalid Credentials, Try again.");
    }
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    try {
      await dispatch(registerWithEmail({ email, password })).unwrap();
      toast.success("Sign up Successfully");
    } catch (err) {
      toast.error("Invalid Credentials, Try again");
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(to bottom right, #1b5e20, #4caf50, #a5d6a7)`,
      }}
    >
      <img src="/logo.jpg" alt="eBazaar" className={styles.logo_img} />
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h6" className={styles.title}>
          Onboarding
        </Typography>
        <Stack spacing={3} className={styles.form}>
          <TextField
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--secondary-bg)",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "var(--secondary-bg)",
              },
            }}
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />
          <TextField
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--secondary-bg)",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "var(--secondary-bg)",
              },
            }}
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            disabled={loading}
            sx={{
              backgroundColor: "var(--secondary-bg)",
              "&:hover": {
                backgroundColor: "var(--hover-bg)",
              },
              boxShadow: "none",
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "var(--secondary-bg)",
              "&:hover": {
                backgroundColor: "var(--hover-bg)",
              },
              boxShadow: "none",
            }}
            fullWidth
            onClick={handleSignUp}
            disabled={loading}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="inherit"
            fullWidth
            startIcon={<GoogleIcon />}
            onClick={() => dispatch(loginWithGoogle())}
            disabled={loading}
            className={styles.googleButton}
            sx={{ boxShadow: "none", border: "1px solid #aaa" }}
          >
            Login with Google
          </Button>
          {error && (
            <Typography variant="body2" color="error" className={styles.error}>
              {"Invalid Credentials, Try again."}
            </Typography>
          )}
        </Stack>
      </Paper>
    </div>
  );
};

export default OnBoarding;
