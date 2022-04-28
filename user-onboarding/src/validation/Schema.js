import * as yup from "yup";
const schema = yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .required("First name is required!"),
    lastName: yup
      .string()
      .trim()
      .required("Last Name is required!"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Must Contain a minimum of 6 Characters")
      .max(10, "Must Contain a maximum of 10 Characters")
})

export default schema;