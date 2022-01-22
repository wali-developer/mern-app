import React from "react";
import { useHistory, Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  // user logout
  const UserLogout = () => {
    localStorage.setItem("token", "");
    alert("logout successfull...");
    history.push({ pathname: "/" });
  };

  // user login
  // const UserLogin = () => {
  //   return history.push({
  //     pathname: "/user/login",
  //   });
  // };

  return (
    <section style={{ backgroundColor: "lightyellow" }}>
      <div
        className="ui secondary  menu"
        style={{
          width: "1100px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <Link to="/" className="item">
          Articles
        </Link>
        <Link to="add" className="item">
          Add Article
        </Link>
        <div className="right menu">
          <Link to="login" className="ui item">
            <i className="user icon"></i>
            Login
          </Link>
          <a href="/" className="ui item" onClick={UserLogout}>
            <i className="user icon"></i>
            Logout
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
