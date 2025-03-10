import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu()
  const popular = menu.filter(item => item.category === "popular")
  
  return (
    <section className="my-20">
      <SectionTitle heading="Popular Menu" subHeading="Our Best Selling Items" />

      {loading && <p className="text-center text-lg">Loading...</p>}
      {/* {error && <p className="text-center text-red-500">Error: {error}</p>} */}

      {!loading && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {popular.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularMenu;
