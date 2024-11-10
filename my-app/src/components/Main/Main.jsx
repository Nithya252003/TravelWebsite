import React,{useEffect} from 'react'
import './main.css'
import img1 from  '../../assets/img1.jpg'
import img2 from  '../../assets/img2.jpg'
import img3 from  '../../assets/img3.jpg'
import img4 from  '../../assets/img4.jpg'
import img5 from  '../../assets/img5.jpg'
import img6 from  '../../assets/img6.jpg'
import img7 from  '../../assets/img7.jpg'
import img8 from  '../../assets/img8.jpg'
import img9 from  '../../assets/img9.jpg'


import {HiLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:img1,
    desTitle:'TamilNadu',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'₹5000',
    description:'Tamil Nadu, a vibrant state in southern India, is famed for its magnificent temples, scenic beaches, and lush hill stations. Rich in culture and history, it offers travelers an enchanting blend of tradition, natural beauty, and heritage.'
  },
  {
  id:2,
  imgSrc:img2,
  desTitle:'Kerala',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'₹2500',
  description:'Kerala, known as God Own Country, offers serene backwaters, lush green landscapes, and pristine beaches along with vibrant cultural traditions and Ayurvedic wellness. Its unique blend of nature and heritage makes it a peaceful and enchanting travel destination.' 
},
{
  id:3,
  imgSrc:img3,
  desTitle:'Tajmahal',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'₹15000',
  description:'The Taj Mahal, a UNESCO World Heritage Site in Agra, India, is an architectural marvel built by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. Renowned for its stunning white marble design, intricate inlay work, and breathtaking symmetry, it stands as a timeless symbol of love and one of the world’s most iconic monuments. '

},
{
  id:4,
  imgSrc:img4,
  desTitle:'Calcutta',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'₹21,000',
  description:'' 
},
{
  id:5,
  imgSrc:img5,
  desTitle:'kashmir',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'₹20,000',
  description:'Kashmir, often called "Paradise on Earth," is a breathtaking region in northern India, renowned for its stunning landscapes of snow-capped mountains, lush valleys, and serene lakes like Dal and Nigeen. With vibrant gardens, houseboats, and rich cultural heritage, Kashmir offers a peaceful retreat and an unforgettable experience for nature lovers and adventurers alike.' 
},
{
  id:img6,
  imgSrc:img6,
  desTitle:'Seoul',
  location:'Southkorea',
  grade:'CULTURAL RELAX',
  fees:'₹40,000',
  description:'Seoul, the dynamic capital of South Korea, blends ancient tradition with cutting-edge modernity, featuring historic palaces like Gyeongbokgung alongside futuristic skyscrapers. Known for its bustling markets, vibrant nightlife, and rich K-pop culture, Seoul is a vibrant city full of energy, innovation, and cultural charm.' 
},
{
  id:img7,
  imgSrc:img7,
  desTitle:'Bali',
  location:'Indonesia',
  grade:'CULTURAL RELAX',
  fees:'₹35,000',
  description:'Bali, Indonesia’s tropical paradise, is known for its lush landscapes, vibrant culture, and stunning beaches. With ancient temples, terraced rice paddies, and a warm, welcoming spirit, it offers a unique blend of relaxation, adventure, and spiritual experience for travelers.'
},
{
  id:img8,
  imgSrc:img8,
  desTitle:'Paris',
  location:'France',
  grade:'CULTURAL RELAX',
  fees:'₹45,000',
  description:'Paris, the enchanting capital of France, is famed for its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Known as the "City of Light," it captivates visitors with its rich history, world-class art, charming cafés, and romantic ambiance along the Seine River.'
},
{
  id:img9,
  imgSrc:img9,
  desTitle:'Maldives',
  location:'the north central indian ocean',
  grade:'CULTURAL RELAX',
  fees:'₹50,000',
  description:'The Maldives, an island paradise in the Indian Ocean, is celebrated for its crystal-clear turquoise waters, white sandy beaches, and vibrant coral reefs. Known for luxurious overwater villas and diverse marine life, it’s a dream destination for relaxation and adventure alike.'
}

]

const Main = () => {

  //scroll animation

useEffect (()=>{
  Aos.init({duration:2000})
}, [])


  return (
    <section className='main container section'>
          
          <div className="secTitle">
            <h3 data-aos="fade-right" className=" title">
              Most visited destinations
            </h3>
          </div>

          

             {/* array */}

             <div className="secContent grid">
               
               {
                Data.map(({ id, imgSrc, desTitle,location,grade,fees,
                        description}) =>{
                          return(
                            
                            <div key={id}  data-aos="fade-up" className="singleDestination">
                              <div 
                               className="imageDiv">
                                <img src={imgSrc} alt={desTitle}/>
                              </div>
                               <div className="cardInfo">
                                <h4 className="desTitle">
                                  {desTitle}
                                </h4>
                                <span className="containent flex">
                                <HiLocationMarker className="icon" />
                                <span className="name">{location}</span>
                                </span>
                                <div className="fees flex">
                                  <div className="grade" >
                                    <span>{grade} <small>+1</small></span>
                                  </div>
                                  <div className="price">
                                    <h5>{fees}</h5>
                                  </div>
                                </div>

                                <div className="desc">
                                  <p>{description}</p>
                                </div>
                                <button className="btn flex">DETAILS
                                <HiOutlineClipboardCheck  className="icon"/>

                                </button>
                               </div>
                              
                            </div>
                          )



                })
               }


             </div>

             {
            
             }
          

    </section>

  )
}

export default Main