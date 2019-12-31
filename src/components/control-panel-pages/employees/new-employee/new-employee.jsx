import React from "react";
import { useHistory } from "react-router-dom";
import "./new-employee.css";
import endpointUrl from "../../../../config";
import CircularProgress from "../../../general/CircularProgress";

export default () => {
  const history = useHistory();

  const [user, setUser] = React.useState({
    user: "",
    email: ""
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`${endpointUrl}/invite-user`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      setIsLoading(false);
      
      if (res.status === 302) {        
        history.push('/employees')
      }
    })
  };

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };  

  if (isLoading) {
    return <CircularProgress />
  }

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
