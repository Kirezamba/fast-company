import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/CheckBoxField";
import TextField from "../common/form/TextField";

export default function LoginForm() {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  // const validateScheme = yup.object().shape({
  //   password: yup
  //     .string()
  //     .required("Password is required")
  //     .matches(/^(?=.*[A-Z])/, "Password must contain at least one capital symbol")
  //     .matches(/(?=.*[0-9])/, "Password must contain at least one digit")
  //     .matches(/(?=.*[@#$%^&*])/, "Password must contain at least one special symbol")
  //     .matches(/(?=.{8,)/, "Password must have at least 8 symbols"),
  //   email: yup.string().required("Email is required").email("Email is incorrect"),
  // });

  const validatorConfig = {
    email: {
      isRequired: { message: "Email is required" },
      isEmail: { message: "Email is incorrect" },
    },
    password: {
      isRequired: { message: "Password is required" },
      isCapitalSymbol: { message: "Password must contain at least one capital symbol" },
      isContainDigit: { message: "Password must contain at least one digit" },
      min: { message: "Password must have at least 8 symbols", value: 8 },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    // validateScheme
    //   .validate(data)
    //   .then(() => setErrors({}))
    //   .catch((err) => setErrors({ [err.path]: err.message }));
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />
        <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
          <a role="button">Stay online</a>
        </CheckBoxField>
        <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
          submit
        </button>
      </form>
    </>
  );
}
