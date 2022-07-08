import React from 'react'
import './Home.css'
import Todo from './Todo.jsx'

const Home = () => {
  return (
    <div className="grid-rows-2 ">
    
    <div className="grid grid-cols-3 p-3 py-5 pb-4 text-white bg-neutral-700">
      <a href="#" className='text-lg'>TodoApp</a>
      <a href='#' className='text-stone-400 justify-self-center'>Home</a>
      <a href='#' className='text-stone-400 justify-self-end'>Login</a>
    </div>
    <div className="grid-rows-2 p-8 ">
      <div className="w-full border rounded box">
        <div className='pl-5 text-xl border-b bg-neutral-100'>TODO LIST</div>
        <div>
          <form action="">
            <input type="text" className='w-48 py-1 mt-8 border rounded' placeholder='enter text...'/>
            <button className="w-20 h-8 ml-2 text-white bg-blue-500 rounded">Submit</button>
            <Todo />
         </form>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Home