import React from "react";
import "./employees-list.css";
import endpointUrl from "../../../../config";

const handleDelete = _id => {
  fetch(`${endpointUrl}/delete-user`, {
    method: "POST",
    body: JSON.stringify({ _id }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res =>
    res.status === 200 ? (window.location = "/employees") : null
  );
};
export default () => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    fetch(`${endpointUrl}/get-all-users`)
      .then(res => res.json())
      .then(res => setList(res.users));
  }, []);
  return (
    <div className="list">
      {list.map(user => (
        <div key={user._id} className="list-item">
          <div className="data-container">
            <span>
              Name :{user.firstName} {user.surName}
            </span>
            <span>Email: {user.email}</span>
          </div>
          <div className="buttonContainer">
          <button
            onClick={e => {
              handleDelete(user._id);
            }}
          >
            remove
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};
