import React from "react";
import "./todo.css";
import bin from "../images/bin.png";


const Todo = () => {
  return (
    <div className="grid-rows-1">
      <div className="h-8 grid-cols-2 mt-8 border border-inherit flex items-center space-x-3 p-5">
        <button className="">
          <img src={bin} alt="" className="w-5 opacity-40" />
        </button>
        <span className="">First todo item</span>
      </div>
    </div>
  );
};

export default Todo;
