import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({items, title, img, desc}) => {
  return (
    <div className="pt-8">
      { title && <Cover
        img={img}
        title={title}
        coverDesc={desc}
      ></Cover>}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12 mb-5">
          {items.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-black mt-5">Order Now</button>
        </Link>
    </div>
  );
};

export default MenuCategory;