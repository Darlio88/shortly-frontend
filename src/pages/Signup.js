import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
import {Api} from '../utils/api'


 
import {colors} from "../assets/colors"

const Signin = () => {
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()


    const handleSubmit=()=>{ 
   Api.post('/user/create-user', {firstName,lastName,email,password}).then((res)=>{
      console.log(res.data)
      localStorage.setItem("user",JSON.stringify(res.data))
      navigation('/dashboard')
   }).catch((err)=>{
      console.log(err)
      alert(err.response.data)
   })
}
  return (
    <div style={{height:"100vh", width:"100vw"}} className='flex flex-col items-center justify-center'>
        <h1 
        style={{color:colors.black}}
        className='uppercase text-2xl md:text-3xl font-bold my-4'>Sign Up</h1>
        <div  className='w-11/12  md:space-y-4 md:w-5/12 flex flex-col items-center space-y-2'>
            <input 
            value={email}
            required
            onChange={(e)=>setEmail(e.target.value)}
            type='email' 
            className="w-full px-2 py-3 mb-2 rounded-xl border" 
            placeholder='Email' />
             <input 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            type='email' 
            className="w-full px-2 py-3 mb-2 rounded-xl border" 
            placeholder='First Name' />
             <input 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            type='email' 
            className="w-full px-2 py-3 mb-2 rounded-xl border" 
            placeholder='Last Name' />
            <input 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            className="w-full px-2 py-3 mb-2 rounded-xl border" 
            placeholder='Password' />
            <button 
            onClick={handleSubmit}
            style={{backgroundColor:colors.pink, color:colors.white}}
            className=" uppercase w-full px-2 py-3 rounded-xl mb-2.5 hover:text-zinc-600">
                sign up</button>
        </div>
        <div className='mt-2'>
            <h5>Already have an account? <Link to='/signin'>Sign in</Link></h5>
        </div>
    </div>
  )
}

export default Signin