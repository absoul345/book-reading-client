import { useFormik } from "formik";
import GoogleButton from "../GoogleButton/GoogleButton";
import LoginFormStyled from "./LoginFormStyled";
import { loginValidationSchema } from "../validation/validationSchema";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/authOperations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginValidationSchema,

    onSubmit: ({ email, password }) => {
      const user = {
        email: email.toLowerCase(),
        password,
      };
      console.log(user);
      dispatch(login(user));
    },
  });

  return (
    <LoginFormStyled>
      <GoogleButton />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="formGroup emailInput">
          <label className="formLabel" htmlFor="email">
            Електронна адреса
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="email"
            type="email"
            className="formInput"
            name="email"
            placeholder="your@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="inputError">{formik.errors.email}</div>
          )}
        </div>
        <div className="formGroup">
          <label className="formLabel" htmlFor="password">
            Пароль
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="password"
            type="password"
            minLength="5"
            maxLength="30"
            className="formInput"
            name="password"
            placeholder="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="inputError">{formik.errors.password}</div>
          )}
        </div>
        <div className="wrapperButton">
          <button type="submit" className="authButton">
            Увійти
          </button>
        </div>
        <div className="registContainer">
          <Link to="/auth/register" className="registerLink">
            Реєстрація
          </Link>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
