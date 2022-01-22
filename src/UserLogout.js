import React from "react";

const UserLogout = () => {
  localStorage.setItem("token", null);
  return <div></div>;
};

export default UserLogout;
