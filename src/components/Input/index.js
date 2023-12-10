import React from "react";

const Input = ({ className, label, type, onChange, placeholder, name }) => {
  return (
    <div className="flex flex-col my-2">
      {label && <label for={name} className="font-semi-bold text-[12px]">{label}*</label>}
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
