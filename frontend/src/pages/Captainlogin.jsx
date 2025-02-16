import React from 'react'
import { Link } from 'react-router-dom';
import { use, useState } from 'react';


function UserLogin() {
  const[email,setEmail]= useState('');
    const[password, setPassword] = useState('');
  
    const[userData,setUserData] = useState({})   // this is for storing all the login user record..
  
    const submitHandler=(e)=>{
      e.preventDefault() // this function use to prvent us from imediate loading value...
      // The preventDefault() method cancels the event if it is cancelable, meaning that the 
      // default action that belongs to the event will not occur. For example, this can be useful
      //  when: Clicking on a "Submit" button, prevent it from submitting a form. 
      // Clicking on a link, prevent the link from following the URL
      alert(`you are loged in  ${email}`)
      setUserData({
        email:email,
        password:password
      })
      // console.log(userData);
      setEmail('') // ishka fayda haiki ajb ham login kar lengye tho mera input me koi value nahi rahega;
      setPassword('')// 
      
    }





function Captainlogin() {
  return (
<div className="p-7 h-screen flex flex-col justify-between">
     <div>
     <img
        className="w-20 mb-10"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt=""
      />

      <form onSubmit={(e)=>{
        submitHandler(e);
      }} action="">
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="email"
          required
          value={email}  //wrapping the email id to set the value of email for the reference.........
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>

        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          type="password"
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          placeholder="password"
        />
        <button className="bg-[#111] font-semibold mb-3 rounded px-4 py-2  w-full text-lg text-white">
          Login
        </button>

        <p className="text-center mt-3">New Here?<Link to='/signup' className="text-blue-600">Create new Account</Link></p>
      </form>
     </div>
     <div>
      <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center font-semibold mb-15 rounded px-4 py-2  w-full text-lg text-white">Sign in as Captain</Link>
     </div>
    </div>
  )
}
}
export default Captainlogin
