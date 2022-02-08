import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { validator } from "../../utils/validator";
import TextField from "../common/form/TextField";
import api from "../../api";
import SelectField from "../common/form/SelectField";
export default function RegisterForm() {
  const [data, setData] = useState({ email: "", password: "", profession: "" });
  const [errors, setErrors] = useState({});
  const [professions, setProfession] = useState();
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

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
    profession: { isRequired: { message: "Require to choose your profession" } },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
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
        <SelectField
          onChange={handleChange}
          options={professions}
          defaultOption="Choose..."
          error={errors.profession}
          value={data.profession}
          label="Choose your profession"
        />

        <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
          submit
        </button>
      </form>
    </>
  );
}
