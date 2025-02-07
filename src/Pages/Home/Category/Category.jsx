import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

// import images for slide
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <div className=' '>
      <SectionTitle
      subHeading={"From 9am to 10pm"}
      heading={"Online Order"}
      >
      </SectionTitle>
      
      <section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-6"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" />
          <h1 className='uppercase text-2xl lg:text-3xl -mt-14 text-white bg-black w-full py-2 bg-opacity-40'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="Slide 1" />
        <h1 className='uppercase text-2xl lg:text-3xl -mt-14 text-white bg-black w-full py-2 bg-opacity-40'>Pizzas</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="Slide 1" />
        <h1 className='uppercase text-2xl lg:text-3xl -mt-14 text-white bg-black w-full py-2 bg-opacity-40'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="Slide 1" />
        <h1 className='uppercase text-2xl lg:text-3xl -mt-14 text-white bg-black w-full py-2 bg-opacity-40'>Desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="Slide 1" />
        <h1 className='uppercase text-2xl lg:text-3xl -mt-14 text-white bg-black w-full py-2 bg-opacity-40'>Salad</h1>
        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
};

export default Category;