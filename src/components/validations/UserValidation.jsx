import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const loginSchema = yup.object().shape({
  email: yup.string().min(1, "Email is required").required("Email is required"),
  senha: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const loginResolver = yupResolver(loginSchema);
