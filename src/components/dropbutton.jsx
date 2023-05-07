import React from "react";

export default function dropbutton({ children }) {
  return (
    <>
      <select>
        <option value="BMW"> BMW</option>
        <option value="Mercedes"> Mercedes</option>
        <option value="Audi"> Audi</option>
        <option value="Skoda"> Skoda</option>
      </select>
    </>
  );
}
