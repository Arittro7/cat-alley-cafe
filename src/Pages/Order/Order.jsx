import { useState } from "react";
import coverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodTab from "./FoodTab/FoodTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  // console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={coverImg} title="Order Food" />

      {/* Tabs */}
      <div className="w-[1320px] mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center py-2 text-xl uppercase font-semibold mb-3">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel><FoodTab items={salad}></FoodTab></TabPanel>
          <TabPanel><FoodTab items={pizza}></FoodTab></TabPanel>
          <TabPanel><FoodTab items={soup}></FoodTab></TabPanel>
          <TabPanel><FoodTab items={dessert}></FoodTab></TabPanel>
          <TabPanel><FoodTab items={drinks}></FoodTab></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
