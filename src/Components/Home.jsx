import React from "react";
import "./Home.css";
import Todo from "./Todo.jsx";
import { Link } from 'react-router-dom';

  

const Home = () => {
  return (
    <div className="grid-rows-2 ">
      <div className="grid grid-cols-3 p-3 py-5 pb-4 text-white bg-neutral-700">
          TodoApp
        <Link to="/" className="text-stone-400 justify-self-center">
          Home
        </Link>
        <Link to="/Login" className="text-stone-400 justify-self-end">
          Login
        </Link>
      </div>
      <div className="grid-rows-2 p-8 ">
        <div className="w-full border rounded box">
          <div className="pl-5 text-xl border-b bg-neutral-100">TODO LIST</div>
          <div>
            <form action="">
              <input
                type="text"
                className="w-48 py-1 mt-8 border rounded"
                placeholder="enter text..."
                required
              />
              <button
                type="submit"
                className="w-20 h-8 ml-2 text-white bg-blue-500 rounded"
              >
                Submit
              </button>
            </form>
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
