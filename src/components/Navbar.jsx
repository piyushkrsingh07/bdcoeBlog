import React from 'react'
import { NavLink } from 'react-router-dom';




const Navbar = () => {

  return (
     
  
    <nav className='relative flex justify-between space-x-3  bg-deepBlue h-[50px] mt-0 pl-2 pr-3 items-center w-full ' >
       <div className='text-white font-mulish font-extrabold hover:text-lightBlue '>WELCOME TO MY BLOGGING WEBSITE</div>
       <div className='flex gap-x-8 items-baseline'>
      <NavLink className={(e)=>{return e.isActive?" text-white cursor-pointer hover:text-lightBlue border border-hidden transition-all duration-200 hover:border-solid hover:border-lightBlue py-1 px-4 -ml-4":"text-white"}} to="/">
        <div>Skills</div>
      </NavLink>
  
   
      <NavLink  className={(e)=>{return e.isActive?" text-white cursor-pointer hover:text-lightBlue border border-hidden transition-all duration-200 hover:border-solid hover:border-lightBlue py-1 px-4 -ml-4":"text-white"}} to="/Sports">
        <div>Sports</div>
      </NavLink>
   
   
      <NavLink className={(e)=>{return e.isActive?"text-white cursor-pointer hover:text-lightBlue border border-hidden transition-all duration-200 hover:border-solid hover:border-lightBlue py-1 px-4 -ml-4":"text-white"}} to="/Travel">
        <div>Travel</div>
      </NavLink>


      <NavLink className={(e)=>{return e.isActive?"text-white cursor-pointer hover:text-lightBlue border border-hidden transition-all duration-200 hover:border-solid hover:border-lightBlue py-1 px-4 -ml-4":"text-white"}} to="/Post">
        <div>Post</div>
      </NavLink>

      
      </div>
  
      </nav>
      



  
  )
}




export default Navbar
