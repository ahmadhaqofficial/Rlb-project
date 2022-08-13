import React from 'react'
import logo from '../assets/navbarlogo.png'


export default function Home() {
  return (
    <div className='rlb__project'>
        <header className='rlb__project__navbar'>
            <div className='rlb__project__navbar__logo'>
<img src={logo} alt="" />
            </div>
<div className='rlb__project__navbar__button'>
    <a href="">Jobs</a>
    <a href="">Professionals</a>
    <a href="">traineeships</a>
    <a href="">Clients</a>
    <a href="">About us</a>
    
</div>

        </header>



    </div>
  )
}
