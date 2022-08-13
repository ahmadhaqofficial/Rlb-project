import React from 'react'
import logo from '../assets/navbarlogo.png'
import background from '../assets/backgroudnavbar.png'
import navright from '../assets/navright.png'


export default function Home() {
  return (
    <div className='rlb__project'>
      <div className='img_nav'>
      <img className='body__img' src={background} alt="" />
      </div>
        <div className='rlb__project__navbar'>
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

        </div >
        <div className='rlb__project__content'>
        <div className='rlb__project__content__one'>
          <div className='rlb__project__heading'>
            Get the Best Job <br /><span>You Deserve</span>
          </div>
          <div className='rlb__project__sub__heading'>
          Tell us who you are and let us <br />
find the best job for you
          </div>
          <div className='rlb__project__content__button'>
            <button className='nav__buton'>
              see more
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
        <div className='rlb__project__navbar__right__logo'>
<img src={navright} alt="" />
        </div>
        </div>
        <div className='choose__friend__container'>
          Choose your friend
        </div>
     


    </div>
  )
}
