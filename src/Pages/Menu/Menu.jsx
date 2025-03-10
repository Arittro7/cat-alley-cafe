import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menubg.jpg";
import DessertImg from "../../assets/menu/dessert-bg.jpeg"
import SoupImg from "../../assets/menu/soup-bg.jpg"
import SaladImg from "../../assets/menu/salad-bg.jpg"
import PizzaImg from "../../assets/menu/pizza-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [ menu ]  = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");


  return (
    <div className="w-[1320px] mx-auto">
      <Helmet>
        <title>CatAlley | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"Our menu"}
        coverDesc={
          "We have a wide range of dishes to choose from. Check out our menu below."
        }
      ></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menus */}
      <MenuCategory items={dessert} title="Dessert" img={DessertImg} desc="Check our Desserts"></MenuCategory>
      {/* Soup Menus */}
      <MenuCategory items={soup} title="Soup" img={SoupImg} desc="Check our Soups"></MenuCategory>
      {/* Salad Menus */}
      <MenuCategory items={salad} title="Salad" img={SaladImg} desc="Check out our Verity of Salads"></MenuCategory>
      {/* Pizza Menus */}
      <MenuCategory items={pizza} title="Pizza" img={PizzaImg} desc="Check out our Pizza Menu"></MenuCategory>
    </div>
  );
};

export default Menu;
