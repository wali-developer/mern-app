import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://expressapi-node.herokuapp.com/user/register",
        {
          userName: username,
          email: email,
          password: password,
        }
      );
      // console.log(res);
      alert(data);
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setEmail("");
    setPassword("");

    history.push("/");
  };
  return (
    <>
      <section>
        <h2 style={{ textAlign: "center" }}>
          ****** Register yourself *******
        </h2>
        <form className="ui form" onSubmit={(e) => RegisterUser(e)}>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username ..."
              required
              onChange={(e) => handleChange(e)}
              value={username}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email ..."
              required
              onChange={(e) => handleChange(e)}
              value={email}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password ..."
              required
              onChange={(e) => handleChange(e)}
              value={password}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="ui button" type="submit">
              Register
            </button>
            <button
              className="ui button"
              type="submit"
              onClick={() => history.push({ pathname: "/user/login" })}
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserRegistration;
