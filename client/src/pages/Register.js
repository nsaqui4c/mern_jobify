import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Logo, FormRow, Alert } from "../components";
import { clearAlertAction, showAlertAction } from "../redux/action";

const Register = () => {
  const [isMember, setIsMember] = useState(true);
  const initialState = { name: "", email: "", password: "", showAlert: true };
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const toggle = () => {
    setIsMember(!isMember);
  };

  const updateField = (e, field) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(values.name, values.email, values.password);
    if ((!isMember && !values.name) || !values.email || !values.password) {
      dispatch(showAlertAction("danger", "Please fill all the fields"));
      clearAlert()
    }
  };

  const clearAlert=()=>{
    setTimeout(()=>{
        dispatch(clearAlertAction())
    },5000)
  }
  return (
    <Wrapper className="card">
      <Logo />

      {isMember ? <h3>Login</h3> : <h3>Register</h3>}
      {values.showAlert && (
        <Alert type="success" text="you have been successfully registered" />
      )}
      <form onSubmit={onFormSubmit}>
        {!isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            labelText="Name"
            handleChange={(e) => updateField(e, "name")}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={(e) => updateField(e, "email")}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={(e) => updateField(e, "password")}
        />
        <button type="submit" className="btn btn-full">
          Submit
        </button>
      </form>
      {isMember ? (
        <p>
          Not a member yet?{" "}
          <span className="toggle" onClick={toggle}>
            Register
          </span>
        </p>
      ) : (
        <p>
          Already a member?{" "}
          <span className="toggle" onClick={toggle}>
            Login
          </span>
        </p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem auto;
  background: var(--white);
  width: 90vw;
  max-width: var(--fixed-width);
  padding: 20px;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  border-top: 5px solid var(--primary-500);

  &:hover {
    box-shadow: var(--shadow-4);
  }

  p {
    margin: 2px;
    font-size: var(--smallText);
  }
  input {
    background: var(--grey-50);
    border: 1px solid var(--grey-200);
    border-radius: 5px;
    width: 100%;
    height: 35px;

    &::placeholder {
      font-family: inherit;
      color: var(--grey-400);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
  }
  .btn-full {
    height: 35px;
    margin: 30px 0px;
  }
  .toggle {
    cursor: pointer;
    color: var(--primary-500);
  }
`;
export default Register;
