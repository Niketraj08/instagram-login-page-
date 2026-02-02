import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validations/UserValidation";
import { Link } from "react-router-dom";
import image_instagram from "../../assets/instagram.png";
import image_facebook from "../../assets/icon_facebook.png";
import image_googleplay from "../../assets/icon_googleplay.png";
import image_microsoft from "../../assets/icon_microsoft.png";
import "./SignUp.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log("Signup data:", data);
    alert("Signup successful! Check console for data.");
  };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="signup_header">
          <img className="signup_logo" src={image_instagram} alt="Instagram" />
          <h2 className="signup_title">Sign up to see photos and videos from your friends.</h2>
        </div>

        <button className="signup_facebook_btn" type="button">
          <img src={image_facebook} alt="Facebook" width="18px" />
          Log in with Facebook
        </button>

        <div className="signup_divider">
          <hr className="signup_hr" />
          <span className="signup_or">OR</span>
          <hr className="signup_hr" />
        </div>

        <form className="signup_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signup_input_group">
            <input
              {...register("email")}
              type="email"
              placeholder=" "
              className={`signup_input ${errors.email ? 'error' : ''}`}
            />
            <label className="signup_label">Email</label>
            {errors.email && <span className="signup_error">{errors.email.message}</span>}
          </div>

          <div className="signup_input_group">
            <input
              {...register("fullName")}
              type="text"
              placeholder=" "
              className={`signup_input ${errors.fullName ? 'error' : ''}`}
            />
            <label className="signup_label">Full Name</label>
            {errors.fullName && <span className="signup_error">{errors.fullName.message}</span>}
          </div>

          <div className="signup_input_group">
            <input
              {...register("username")}
              type="text"
              placeholder=" "
              className={`signup_input ${errors.username ? 'error' : ''}`}
            />
            <label className="signup_label">Username</label>
            {errors.username && <span className="signup_error">{errors.username.message}</span>}
          </div>

          <div className="signup_input_group">
            <input
              {...register("password")}
              type="password"
              placeholder=" "
              className={`signup_input ${errors.password ? 'error' : ''}`}
            />
            <label className="signup_label">Password</label>
            {errors.password && <span className="signup_error">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            className={`signup_btn ${isValid ? 'active' : 'disabled'}`}
            disabled={!isValid}
          >
            Sign up
          </button>
        </form>

        <div className="signup_terms">
          <p>
            By signing up, you agree to our{" "}
            <a href="#" className="signup_link">Terms</a>,{" "}
            <a href="#" className="signup_link">Privacy Policy</a> and{" "}
            <a href="#" className="signup_link">Cookies Policy</a>.
          </p>
        </div>
      </div>

      <div className="signup_login_prompt">
        <p>
          Have an account?{" "}
          <Link to="/login" className="signup_login_link">
            Log in
          </Link>
        </p>
      </div>

      <div className="signup_apps">
        <p>Get the app.</p>
        <div className="signup_app_icons">
          <img src={image_googleplay} alt="Google Play" />
          <img src={image_microsoft} alt="Microsoft Store" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
