import Banner from "./Banner/Banner";
import Call from "./Call/Call";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import StatusBnr from "./StatusBnr/StatusBnr";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="w-[1320px] mx-auto">
      <Banner></Banner>
      <Category></Category>
      <StatusBnr></StatusBnr>
      <Call></Call>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;