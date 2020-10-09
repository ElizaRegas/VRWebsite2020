import React from "react";

const Field = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      type={props.textarea ? "textarea" : "text"}
      value={props.value}
    />
  </div>
);

// Field.propTypes = {
//   label: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
//   textarea: PropTypes.bool.isRequired,
// };

// Field.defaultProps = {
//   textarea: false,
// };
export default Field;
