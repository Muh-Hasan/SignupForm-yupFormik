import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Form() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Must contain at least 8 characters, one uppercase, one lowercase, one number and a special character"
        )
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>

        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={!!formik.errors.firstName && !!formik.touched.firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                id="firstName"
                label="First Name"
                onBlur={formik.handleBlur}
                autoFocus
                helperText={
                  formik.errors.firstName && formik.touched.firstName
                    ? formik.errors.firstName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={!!formik.errors.lastName && !!formik.touched.lastName}
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                id="lastName"
                label="Last Name"
                name="lastName"
                onBlur={formik.handleBlur}
                autoComplete="lname"
                helperText={
                  formik.errors.lastName && formik.touched.lastName
                    ? formik.errors.lastName
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!formik.errors.email && !!formik.touched.email}
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                id="email"
                label="Email Address"
                name="email"
                onBlur={formik.handleBlur}
                autoComplete="email"
                helperText={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!formik.errors.password && !!formik.touched.password}
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                name="password"
                label="Password"
                type="password"
                onBlur={formik.handleBlur}
                id="password"
                autoComplete="current-password"
                helperText={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : null
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Form;
