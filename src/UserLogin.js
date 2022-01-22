import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://expressapi-node.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (data) {
        alert("Login successfull ...");
      }
      setToken(data);
      localStorage.setItem("token", data);

      setEmail("");
      setPassword("");

      history.push({
        pathname: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <h2 style={{ textAlign: "center" }}>****** Login ******</h2>
        <form className="ui form" onSubmit={(e) => loginUser(e)}>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email ..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password ..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="ui button" type="submit">
              Login
            </button>
            <button
              className="ui button"
              type="submit"
              onClick={() => history.push({ pathname: "/user/register" })}
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserLogin;
