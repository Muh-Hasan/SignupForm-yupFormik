import React , { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";

let schema = yup.object().shape({
  firstname: yup.string().required("This field is required."),
  lastname: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  password: yup
    .string()
    .min(6, "Password is too short.")
    .max(20, "Password is too long.")
    .required("This field is required."),
});
interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
const initialValues: Values = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};


export default function SignUp() {

  const [showPassword , setShowPassword] = useState(false)

const handleClickShowPassword = () => {
  setShowPassword(!showPassword);
};

const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values): void => {
          console.log(values);
        }}
        validationSchema={schema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div>
                <Field
                  name="firstname"
                  as={TextField}
                  label="First Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="firstname" />}
                  required
                />
              </div>
              <div>
                <Field
                  name="lastname"
                  as={TextField}
                  label="Last Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="lastname" />}
                  required
                />
              </div>
              <div>
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" />}
                  required
                />
              </div>
              <div>
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  variant="outlined"
                  helperText={<ErrorMessage name="password" />}
                  type='password'
                  required
                />     
              </div>
              <div>
                <button disabled={!dirty || !isValid} type="submit">
                  Signup
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
