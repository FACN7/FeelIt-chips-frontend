import React, { useContext } from "react";
import { InfoContext } from "../new-print-page/printContext";
import { useHistory } from "react-router-dom";
import endpointUrl from "../../config";

const EditDropDownListsPage = () => {
  const history = useHistory();

  const { info, setInfo } = useContext(InfoContext);
  const [options, setOptions] = React.useState([
    "electrodeType",
    "printer",
    "inkType",
    "concentration"
  ]);

  React.useEffect(() => {
    fetch(`${endpointUrl}/print-inputs-options`, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        setOptions(Object.keys(data).filter(item => item != "_id"));
        setInfo({ options: data });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="actionContainer">
        {options.map(optionStr => {
          return (
            <div className="buttons-container">
              <button
                onClick={() => {
                  setInfo({ pickedOption: optionStr });
                  history.push("/edit-drop-down-lists-page-2");
                }}
              >
                {optionStr}
              </button>
            </div>
          );
        })}
      </div>

      <div className="navigationContainer">
        <div className="navigationButtonContainer">
          <button
            onClick={() => {
              setInfo(null);
              history.push("/");
            }}
          >
            BACK
          </button>
        </div>
        <div className="navigationButtonContainer"></div>
      </div>
    </React.Fragment>
  );
};
export default EditDropDownListsPage;
