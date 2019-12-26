import React from "react";
import { useHistory } from "react-router-dom";
import "./sign-up.css";
import endpointUrl from "../../config";
export default () => {
  const history = useHistory();

  const [user, setUser] = React.useState({
    user: "",
    email: ""
  });
  const handleSubmit = e => {
    fetch(`${endpointUrl}/invite-user`, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };
  return (
    <React.Fragment>
      <div className="form-container">
        <h1>sign up page</h1>

        <form onSubmit={handleSubmit} className="reg-form">
          <input
            type="text"
            placeholder="Enter username..."
            value={user.user}
            name="user"
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

          <div className="buttonContainer">
            <button type="submit">Create</button>
          </div>
        </form>
        <button
          id="back"
          onClick={e => {
            history.push("/employees");
          }}
        >
          BACK
        </button>
      </div>
    </React.Fragment>
  );
};
