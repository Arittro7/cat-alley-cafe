import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menubg.jpg"
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div className="w-[1320px] mx-auto">
      <Helmet>
        <title>CatAlley | Menu</title>
      </Helmet>
      <Cover
      img={menuImg}
      title={"Our menu"}
      coverDesc={"We have a wide range of dishes to choose from. Check out our menu below."}
      ></Cover>
      <PopularMenu></PopularMenu>

      <Cover
      img={menuImg}
      title={"Our menu"}
      coverDesc={"We have a wide range of dishes to choose from. Check out our menu below."}
      ></Cover>

      <PopularMenu></PopularMenu>
      <Cover
      img={menuImg}
      title={"Our menu"}
      coverDesc={"We have a wide range of dishes to choose from. Check out our menu below."}
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
