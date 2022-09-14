import React,{useEffect, useLayoutEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { MdDelete,MdLink,MdContentCopy } from "react-icons/md";
import { HiSwitchHorizontal } from "react-icons/hi";
import { IoStatsChartSharp } from "react-icons/io5";
import User from '../assets/user.png'


import {colors} from "../assets/colors"
import {Api} from '../utils/api'


const DashBoard = () => {
 const date = new Date()
 
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.user)

  const [links, setLinks] = useState([])


  useEffect(() => {
  Api.get(`api/get-urls/${user._id}`).then((response)=>{
    console.log(response.data)
    setLinks(response.data)
  }).catch(err =>{
    alert(err.response.data)
  })
  }, [])
  const handleLogout = ()=>{
    localStorage.clear("user")
    navigate('/welcome')
  }

  return (
    <div className='w-full  md:p-6 p-4'>
      <div className='flex justify-between'>
        <div className=''>
          <h4 
          onClick={()=>navigate('/')}
          style={{color:colors.pink}}
          className='text-2xl md:text-3xl md:font-bold font-semibold cursor-pointer hover:opacity-80'>Shortly</h4>
        </div>
        <div className='flex items-center space-x-2'>
          <h5
          onClick={handleLogout}
          style={{color:colors.black}}
          className='text-lg font-medium hover:text-white cursor-pointer'
          >Signout</h5>
          <img className='hidden md:block w-8 h-8' src={User} alt='user' />
        </div>
      </div>
      <h3 className='text-base md:text-xl font-semibold mt-4 md:mt-6'>Your Links</h3>
      <div className='md:grid grid-cols-2 gap-2 space-y-4'>
        
        {links.length >0 && links.map((link, index)=>(
        <div key={index} className=' w-full md:w-full md:mx-3 space-y-5 my-4 p-4 shadow-md shadow-black-500/50'>
          <div className='flex justify-between items-center  '>
            <h6 className='font-bold text-base'>Link</h6>
            <div 
            style={{color:colors.red}}
            className='flex justify-between items-center cursor-pointer rounded-lg px-2 py-1 hover:bg-red-200 '>
           < MdDelete />
           <p>Delete</p>
            </div>
          </div>
          <div className='flex space-x-2 items-center'>
            <small style={{color:colors.gray}} className='text-sm font-extralight'>{date.toString(link.createdAt)}</small>
            <h6>by</h6>
            <h6 style={{color:colors.blue}}>Darlio Daniel</h6>
          </div>
          <div className='md:flex items-center justify-between border py-2 px-3 rounded-md'>
            <div className='flex items-center space-x-2 '>
            <MdLink color={colors.gray} />
            <small style={{color:colors.black}}>{link.shortUrl}</small>
            </div>
            <div style={{color:colors.blue}} className='rounded-lg px-2 py-1 hover:bg-indigo-200  flex items-center space-x-2 cursor-pointer'>
            <MdContentCopy />
            <p>copy</p>
            </div>
            
          </div>
          <div className=' space-x-1'>
          <div className='flex items-center space-x-2'>
          <HiSwitchHorizontal />
          <h6 className='font-bold'>Destination:</h6>
          </div>
          <small>{link.longUrl}</small>
          </div>
          <div>
           <div className='flex items-center space-x-1'>
           <h6 className='font-bold'>{link.clicks}</h6>
          <IoStatsChartSharp />
           </div>
           <h6 style={{color:colors.gray}}>Total clicks</h6>
          </div>
        </div>)
        )
}
      </div>
    </div>
  )
}

export default DashBoard