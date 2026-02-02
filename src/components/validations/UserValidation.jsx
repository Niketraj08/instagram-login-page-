import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const loginSchema = yup.object().shape({
  email: yup.string().min(1, "Email is required").required("Email is required"),
  senha: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  fullName: yup.string().min(1, "Full name is required").required("Full name is required"),
  username: yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const loginResolver = yupResolver(loginSchema);
export const signUpResolver = yupResolver(signUpSchema);
