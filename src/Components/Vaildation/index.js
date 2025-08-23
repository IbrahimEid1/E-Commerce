import * as yup from "yup"
export const RegisterSchema = yup
  .object({
    name: yup.string().required("Username Is Required").min(5 , "Username Should be at least 5 Characters"),
    email: yup.string().email("Invalid email format").required("Email Is Required").matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is Vaild ") ,
    password : yup.string().required("Password Is Required").min(6, "Password Should be at least 6 Characters")
})
  .required()