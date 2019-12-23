import React, { useContext } from "react";
import { InfoContext } from "../new-print-page/printContext";
import { useHistory } from "react-router-dom";
import endpointUrl from "../../config";
import "./edit-drop-down-list-page.css";

const EditDropDownListsPage2 = () => {
  const filterOptions = (value, listToDeleteFrom) => {
    if (listToDeleteFrom == null) return;
    const updatedOptions = { dropdown: listToDeleteFrom, values: [] };
    ddlOptions.values.map(item => {
      if (item.value != value) {
        updatedOptions.values.push(item);
      }
    });
    return updatedOptions;
  };

  const history = useHistory();
  const { info, setInfo } = useContext(InfoContext);
  const ddlToEdit = info.pickedOption || null;
  const [ddlOptions, setDdlOptions] = React.useState(ddlToEdit?{ dropdown: ddlToEdit, values: [...info.options[ddlToEdit]] }:{}
  );

  const makeEntry = ({ value, label }, ddlToEdit) => {
    return (
      <div className="drop-down-entry">
        <div># {label}</div>
        <div>
          <button
            onClick={() => setDdlOptions(filterOptions(value, ddlToEdit))}
          >
            delete dis
          </button>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="Container">
        <div className="print-form-container">
          {(ddlToEdit &&
            ddlOptions.values.map(item => {
              return makeEntry(item, ddlToEdit);
            })) ||
            "oops! something went wrong. please go back to the previous page"}
        </div>
      </div>
      <div className="navigationContainer">
        <div className="navigationButtonContainer">
          <button onClick={() => history.push("/edit-drop-down-lists-page")}>
            BACK
          </button>
        </div>
        <div className="navigationButtonContainer">
          {ddlToEdit &&<button
            onClick={() => {
              fetch(`${endpointUrl}/edit-dropdown`, {
                method: "POST",
                body: JSON.stringify(ddlOptions),
                headers: {
                  "Content-Type": "application/json"
                }
              })
                .then(res => {
                  console.log(res.status);
                })
                .then(() => history.push("/edit-drop-down-lists-page"))
                .catch(err => console.log(err)); //TODO: do something abou this, logging is not enough
            }}
          >
            DONE
          </button>}
        </div>
      </div>
    </React.Fragment>
  );
};
export default EditDropDownListsPage2;
