import React from "react";
import "./Drop-down-list.css";

const DropDownList = props => {
  const setGlobalValue = props.selectItem || ((...args) => {}); //this is used to as placeholder for useContext setter

  const {items} = props;
  const [pickedItem, setPickedItem] = React.useState(props.items[0]);
  
  const changePick = e => {
    setPickedItem(e.target.value);
  };

  React.useEffect(() => {
    setGlobalValue(pickedItem);
  }, [pickedItem]);

  return (
    <div>
      <select onChange={e => changePick(e)} name="hours">
        {/* <option selected disabled value="0">Select Here</option> */}
        {items.map(item => (
          <option key={item.value} value={item.value}>{item.text}</option>
        ))}
      </select>
    </div>
  );
};
export default DropDownList;
