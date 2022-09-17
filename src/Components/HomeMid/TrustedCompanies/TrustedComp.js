import './TrustedComp.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'


export default function TrustedComp() {
    return (
        <div className='trustedComp'>
            <div className='compHeading'>
                <div className='line'></div>
                <h3>Trusted Companies</h3>
                <div className='line'></div>
            </div>

            <Swiper
                className='companiesSwiper'
                modules={[Navigation]}
                navigation
                speed={800}
                slidesPerView={4}
                breakpoints={{
                    1300: {
                        slidesPerView: 4
                    },
                    700: {
                        slidesPerView: 3
                    },
                    450: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                loop
            >
                <SwiperSlide className='compLogo'><img src={require("./Logo1.png")} alt="Logo1" /></SwiperSlide>
                <SwiperSlide className='compLogo'><img src={require("./Logo2.png")} alt="Logo2" /></SwiperSlide>
                <SwiperSlide className='compLogo'><img src={require("./Logo3.png")} alt="Logo3" /></SwiperSlide>
                <SwiperSlide className='compLogo'><img src={require("./Logo4.png")} alt="Logo4" /></SwiperSlide>
            </Swiper>
        </div>
    )
}