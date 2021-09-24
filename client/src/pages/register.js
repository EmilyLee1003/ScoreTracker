import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");

  console.log("GENDER", gender);
  console.log("EMAIL:", email);
  const history = useHistory();

  function handleClick() {
    register();
    alert("Your account has been created. Please log in");
  }

  function login() {
    history.push("/login");
  }

  //when the button is clicked, it sends the register information to the back end.
  const register = () => {
    Axios.post("http://localhost:3005/register", {
      username: username,
      password: password,
      gender1: gender,
      dateOfBirth1: dateOfBirth,
      email1: email,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="register">
      <h1> Register</h1>
      <label>userName</label>
      <input
        type="text"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label> password</label>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Box>
        <InputLabel> Gender </InputLabel>
        <Select
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <MenuItem value="female">female </MenuItem>
          <MenuItem value="male"> male</MenuItem>
        </Select>
      </Box>
      <lable> date of Birth</lable>
      <input
        type="date"
        onChange={(e) => {
          setDateOfBirth(e.target.value);
        }}
      />
      <label> email address</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <button onClick={handleClick}>Register</button>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Register;
