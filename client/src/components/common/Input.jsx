import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className="flex gap-1 flex-col">
      {label && (
        <label htmlFor="{name}" className="text-teal-light text-lg px-1">
          {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          onChange={(e) => setState(e.target.value)}
          className="bg-input-background text-start focus:outline-none h-10 text-white px-5 rounded-lg py-4 w-full"
        />
      </div>
    </div>
  );
}

export default Input;
