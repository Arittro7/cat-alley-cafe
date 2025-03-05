import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Call from "./Call/Call";
import Category from "./Category/Category";
import Chef from "./Chef/Chef";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import StatusBnr from "./StatusBnr/StatusBnr";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="w-[1320px] mx-auto">
      <Helmet>
        <title>CatAlley | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <StatusBnr></StatusBnr>
      <PopularMenu></PopularMenu>
      <Call></Call>
      <Chef></Chef>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;