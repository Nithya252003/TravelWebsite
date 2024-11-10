import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import {FiChevronRight, FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore } from 'react-icons/md'
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai'
import {FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect (()=>{
    Aos.init({duration:2000})
}, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>


          <div className="inputDiv flex">
            <input data-aos="fade-up" type='text' placeholder='Enter the Email Address' />
            <button  data-aos="fade-up" className='btn flex' type='submit'> SEND
            <FiSend  className="icon"/>


            </button>
          </div>
        </div>


        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore  className="icon"/>

              </a>
            </div>

            <div data-aos="fade-up"  className="footerparagraph">Discover endless
               possibilities on our website! Dive 
               in and explore to find the perfect solutions 
               and insights just for you.</div>


              <div data-aos="fade-up" className='footerSocials'>
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />


              </div>

          </div>

          <div className="footerLinks grid">

             {/* group1 */}
            <div data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>
           

              <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Services
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Insurance
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Agency
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Tourism
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Payment
                </li>

            </div>
            {/* group2*/}
            <div data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                PARNERS
              </span>
           

              <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Bookings
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Rentcar
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                HostelWorld
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Trivago
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                TripAdvisor
                </li>

            </div>
            {/* group3*/}
            <div data-aos="fade-up" className="linkGroup">
              <span className='groupTitle'>
                LASTMINUTE
              </span>
           

              <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Tamilnadu
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Bali
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Maldives
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Paris
                </li>

                <li className='footerList flex'>
                <FiChevronRight class name="icon" />
                Calcutta
                </li>

            </div>
          </div>
          
         

        </div>
      </div>
    </section>
  )
}

export default Footer