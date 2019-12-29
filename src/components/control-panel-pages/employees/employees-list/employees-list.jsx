import React from "react";
import "./employees-list.css";
import endpointUrl from "../../../../config";

const handleDelete = _id => {
  fetch(`${endpointUrl}/delete-user/${_id}`, {
    method: "DELETE",
    credentials: "include",
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
    fetch(`${endpointUrl}/get-all-users`, { credentials: "include" })
      .then(res => res.json())
      .then(res => setList(res.users));
  }, []);
  return (
    <div className="list">
      {list.map(user => (
        <div key={user._id} className="list-item">
          <div className="data-container">
            <span className="Name">
              Name :{user.firstName} {user.surname}
            </span>
            <span className="Email">Email: {user.email}</span>
          </div>
          {/* <div className="removeBtnContainer"> */}
          <button
            className="removeBtn"
            onClick={e => {
              handleDelete(user._id);
            }}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};
