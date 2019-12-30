import React from "react";
import endpointUrl from "../../config";

const SignInForm = () => {

  const [user, setUser] = React.useState({
    password: "",
    email: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${endpointUrl}/login`, {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 302) {
          window.location = "/";
        } else {
          alert("Email or password is incorrect");
        }
      })
      .catch(err => console.log(err));
  };

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  return (
    <div className="form-container">
      <h1>sign in page</h1>

      <form onSubmit={handleSubmit} className="reg-form">
        <input
          type="email"
          placeholder="Enter Email..."
          value={user.email}
          name="email"
          onChange={handleChange}
          required
          minLength="3"
        />

        <input
          type="password"
          placeholder="Enter Password..."
          value={user.password}
          name="password"
          onChange={handleChange}
          required
        />

        <div className="buttonContainer">
          <input type="submit" value="Sign In" />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
