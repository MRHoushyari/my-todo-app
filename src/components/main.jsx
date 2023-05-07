import React from "react";
import "../styles/css/main.css";
import { useState } from "react";
function Main({ children }) {
  const [status, setStatus] = useState("All");
  const [items, setItems] = useState("asas");
  return (
    <>
      <main>
        <div className="buttons">
          <button>Add Task</button>
          <select>
            <option value="">All</option>
            <option value="">Incomplete</option>
            <option value="">Complete</option>
          </select>
        </div>
        <div className="items">
          {items ? (
            <>
              <div>
                <li>
                  <input type={"checkbox"} />
                  sfdsfdsertperu
                </li>
                <li>
                  <input type={"checkbox"} />
                  wewewe
                </li>
                <li>
                  <input type={"checkbox"} />
                  sdgfdsf
                </li>
                <li>
                  <input type={"checkbox"} />
                  cvxv
                </li>
              </div>
            </>
          ) : (
            <span>No Todo</span>
          )}
        </div>
      </main>
    </>
  );
}
export default Main;
