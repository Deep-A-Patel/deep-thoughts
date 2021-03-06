import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../../modules/dbcalls";

const useStyles = makeStyles(theme => ({}));

export default function SignUp(props) {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [options, setOptions] = useState(null);

  const showAvatars = e => {
    API.getAllAvatars().then(avatars => {
      setOptions(
        avatars.map(avatar => (
          <option key={avatar.avatar} value={avatar.id}>
            {avatar.avatar}
          </option>
        ))
      );
    });
  };

  const handleFieldChange = e => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "avatar") {
      setAvatar(e.target.value);
    }
  };

  const handleSignUp = e => {
    e.preventDefault();
    props.register(username, email, password, avatar);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <img
        id="Logo"
        border="0"
        alt="DeepThoughts"
        src="deee2.png"
        width="383"
        height="167"
      />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleFieldChange}
              />
            </Grid>
            <Grid item xs={12}>
              <select
                className="signUpDropDown"
                margin="normal"
                id="avatar"
                label="Avatar"
                variant="outlined"
                onClick={showAvatars}
                onChange={handleFieldChange}
              >
                {options}
              </select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                {" "}
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
