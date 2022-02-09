import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { validator } from "../../utils/validator";
import TextField from "../common/form/TextField";
import api from "../../api";
import SelectField from "../common/form/SelectField";
import RadioField from "../common/form/RadioField";
import MultiSelectField from "../common/form/MultiSelectField";
import CheckBoxField from "../common/form/CheckBoxField";

export default function RegisterForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "Male",
    qualities: [],
    license: false,
  });
  const [errors, setErrors] = useState({});
  const [professions, setProfession] = useState();
  const [qualities, setQualities] = useState({});
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  const handleChange = (target) => {
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
    license: {
      isRequired: { message: "You can not use our service without license confirmation" },
    },
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
          name="profession"
          value={data.profession}
          label="Choose your profession:"
        />
        <RadioField
          options={[
            { name: "Male", value: "Male" },
            { name: "Female", value: "Female" },
            { name: "Other", value: "Other" },
          ]}
          value={data.sex}
          name="sex"
          label="Choose your sex:"
          onChange={handleChange}
        />
        <MultiSelectField
          options={qualities}
          onChange={handleChange}
          name="qualities"
          defaultValue={data.qualities}
          label="Choose your qualities:"
        />
        <CheckBoxField
          value={data.license}
          onChange={handleChange}
          name="license"
          error={errors.license}
        >
          <a role="button">Confirm the license agreement</a>
        </CheckBoxField>
        <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
          submit
        </button>
      </form>
    </>
  );
}
