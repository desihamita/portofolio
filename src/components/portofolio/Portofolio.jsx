import React, {useContext} from 'react'
import './Portofolio.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { portofolio } from '../../data'
import { themeContext } from '../../Context'

const Portofolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='portofolio' id='Portofolio'>
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portofolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portofolio-slider'
      >
        {portofolio.map((portofolio) => {
          return (
            <SwiperSlide key={portofolio.id}>
              <a href={portofolio.link}><img src={portofolio.img} alt="" /></a>
            </SwiperSlide>
          );
        })}
        
      </Swiper>
    </div>
  )
}

export default Portofolio
