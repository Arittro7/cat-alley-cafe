import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {

  const [reviews, setReviews] = useState([])
  useEffect(() =>{
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="Testimonials"
      >
      </SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
          reviews.map(review =><SwiperSlide
          key={review._id}
          >
            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
            <FaQuoteLeft className="size-24 my-3" />
            <div className="mx-24 my-3">
              <h3>{review.details}</h3>
              <p className="text-2xl text-orange-500 font-semibold">{review.name}</p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;
