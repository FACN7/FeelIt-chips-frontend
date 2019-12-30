import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./sign-up.css";
import endpointUrl from "../../config";

export default () => {
  const { token } = useParams();
  const history = useHistory();

  const [user, setUser] = React.useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleSubmit = e => {
    e.preventDefault();
    const { password, confirmPassword } = user;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      const sendUserDetails = { ...user };
      delete sendUserDetails.confirmPassword;
      fetch(`${endpointUrl}/sign-up/${token}`, {
        method: "POST",
        body: JSON.stringify(sendUserDetails),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        if (res.status === 302) {
          history.push("/sign-in");
        }
      });
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  return (
    <div className="sign-up-form-container">
      <h1>sign up page</h1>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <input
          type="text"
          placeholder="Enter first name..."
          value={user.firstName}
          name="firstName"
          onChange={handleChange}
          required
          minLength="3"
        />
        <input
          type="text"
          placeholder="Enter surname..."
          value={user.surname}
          name="surname"
          onChange={handleChange}
          required
          minLength="3"
        />

        <input
          type="email"
          placeholder="Enter email..."
          value={user.email}
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Enter password..."
          value={user.password}
          name="password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="confirm password..."
          value={user.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        />

        <div className="createbtnContainer">
          <input value="Create" type="submit" />
        </div>
      </form>
    </div>
  );
};
