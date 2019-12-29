import React from "react";
import { useHistory } from "react-router-dom";
import "./new-employee.css";
import endpointUrl from "../../../../config";
export default () => {
  const history = useHistory();

  const [user, setUser] = React.useState({
    user: "",
    email: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${endpointUrl}/invite-user`, {
      method: "POST",
      credentials: "include",
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
        <h1>Invite Page</h1>

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

          <div className="createbtnContainer">
            <input type="submit" value="Create" />
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
