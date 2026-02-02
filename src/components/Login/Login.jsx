import image_googleplay from "../../assets/icon_googleplay.png";
import image_microsoft from "../../assets/icon_microsoft.png";
import image_instagram from "../../assets/instagram.png";
import image_facebook from "../../assets/icon_facebook.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/UserValidation";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 1));
  };

  return (
    <div className="login_container">
      <div className="form_container">
        <img className="form_logo" src={image_instagram} />
        <div className="form_config_div_input">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_input">
              <input
                {...register("email")}
                type="text"
                placeholder=""
                required
              />
              <label>Phone number, username or email address</label>
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form_input">
              <input
                {...register("senha")}
                type="password"
                placeholder=""
                required
              />
              <label>Password</label>
              {errors.senha && <span className="error-message">{errors.senha.message}</span>}
            </div>

            <button
              type="submit"
              className={isValid ? "form_login_dark" : "form_login_light"}
              disabled={!isValid}
            >
              Log in
            </button>
          </form>
        </div>
        <div className="form_hr_container">
          <hr className="form_hr" />
          <p className="form_or">OR</p>
          <hr className="form_hr" />
        </div>
        <div className="form_facebook">
          <button className="form_facebook_button">
            <img width="18px" src={image_facebook} />
          </button>
          <p>Log in with facebook</p>
        </div>
        <Link to="/signup" className="form_signup_link">
          don't have any account sign up
        </Link>
        <a className="form_recover_password" href="#">
          forgotten your password?
        </a>
      </div>
      <div className="form_apps_container">
        <p>Get the app.</p>
        <div className="form_apps">
          <img className="form_apps_googleplay" src={image_googleplay} />
          <img className="form_apps_microsoft" src={image_microsoft} />
        </div>
      </div>
    </div>
  );
}

export default Login;
