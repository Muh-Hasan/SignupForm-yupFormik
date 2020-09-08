import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

export default function SignUp() {
  let schema = yup.object().shape({
    firstName: yup.string().required("This field is required."),
    lastName: yup.string().required("This field is required."),
    email: yup.string().email().required("This field is required."),
    password: yup
      .string()
      .min(8, "Password is too short.")
      .max(20, "Password is too long.")
      .required("This field is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  return (
    <div>
      <h1>this is SignUp</h1>
    </div>
  );
}
