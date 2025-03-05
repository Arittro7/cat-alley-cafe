import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/menu.json"); 
        if (!response.ok) {
          throw new Error("Failed to load menu.json");
        }
        const data = await response.json();
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []); 

  return (
    <section className="my-20">
      <SectionTitle heading="Popular Menu" subHeading="Our Best Selling Items" />

      {loading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {menu.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularMenu;
