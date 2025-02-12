import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg"
import "./featuredStyle.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-24"> 
      <div>
      <SectionTitle  
      subHeading="check it out"
      heading="From our menu"
      ></SectionTitle>
      </div>
      <div className="md:flex items-center justify-between  pb-20 pt-12 px-32">
        <div>
          <img className="rounded-2xl" src={featureImg} alt="" />
        </div>
      <div className="md: ml-12">
        <p>May 08,2025</p>
        <p className="uppercase">Where Can I get Some?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae odio cum eius nam blanditiis culpa omnis quia velit nemo enim incidunt animi aspernatur sunt suscipit numquam, fuga quasi aut?</p>
        <button className="btn btn-outline border-0 border-b-4 text-gray-100 mt-5">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Featured;