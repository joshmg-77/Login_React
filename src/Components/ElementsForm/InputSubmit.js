import React from "react";


/*reusable*/
const InputSubmit = (props) => {
  return (
    <input
      type="submit"
      value={props.title}
      className="login last"
    />
  );
};
export default InputSubmit;
