import React from "react";

export default function TableInput({ inputValue, onChangeInput }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        onChange={onChangeInput}
        className="form-control"
        placeholder="Введите имя:"
        aria-label="Username"
        value={inputValue}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
