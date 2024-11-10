import React,{useState} from 'react'
import './navbar.css'
import {MdOutlineModeOfTravel} from 'react-icons/md'
import {RiCloseCircleFill} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
   const [active ,setActive]= useState('navBar')

   //togglenavbar

  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  //removenavbar

  const removenavbar=()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineModeOfTravel  className="icon"/>  Let'sGo!</h1>
          </a>

        </div>
        <div className={active}>

          <li className="navLists flex">

          <li className="navItem">
            <a href="#" className="navLink">Home</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">Packages</a>
          </li>

          <li className="navItem">
            <a href="#"
             className="navLink">Shop</a>
          </li>
          

          <li className="navItem">
            <a href="#" className="navLink">About</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">Pages</a>
          </li>


          <li className="navItem">
            <a href="#" className="navLink">News</a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">Contact</a>
          </li>
          <button className='btn'>
            <a href="#">BOOK NOW</a>
          </button>

          
          </li>
          
          <div  onClick={removenavbar}
           className="closeNavbar">
          <RiCloseCircleFill  className="icon"/>

          </div>
          <div className="navBar">
          </div>
          
        </div>
        <div onClick={showNav}
         className="toggleNavbar">
          
          <TbGridDots  className="icon"/></div>
      </header>

    </section>
  )
}

export default Navbar