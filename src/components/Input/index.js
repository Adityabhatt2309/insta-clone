import React from "react";

const Input = ({ className, label, type, onChange, placeholder, name }) => {
  return (
    <div>
      {label && <label for={name}></label>}
      <input
        name={name}
        className={className}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
