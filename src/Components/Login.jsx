import React from 'react'
import "./Login.css"
// import logo from '../images/logo.png'

const Login = () => {
  return (
    <div className='Login grid justify-items-center mt-24 '>
      <div className='w-96'>
        <div className='first text-start text-2xl'>
          Sign in <br /> 
        </div>
        or <a href="#" className='acct text-blue-600 font-light'>create an account </a> 
      </div>
      <div>
        <form action="">
          <input 
          type="email" 
          placeholder='Email'
          className='input mt-7 pl-2 border border-zinc-400 w-96 h-10'
          required/> <br />

          <input 
          type="password" 
          placeholder='Password'
          className='input mt-4 border pl-2 border-zinc-400 w-96 h-10'
          required/> <br />

         <input type="checkbox" className='p-5 mt-7'/>
          <label> Remember me</label><br/>

          <button
             type="submit"
             className="w-96 h-12 text-white bg-blue-500 mt-4 "
              >
                Submit
          </button><br />
          <button
             type="submit"
             className="w-96 h-12 text-black bg-stone-500 mt-4 border border-zinc-400 row">
                <span className='col-6'>Sign in with Google</span>
                  
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default Login