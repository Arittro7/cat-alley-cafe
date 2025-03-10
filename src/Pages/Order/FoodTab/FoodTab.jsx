import FoodCard from "../../Shared/FoodCard/FoodCard";

const FoodTab = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-2 mx-auto">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default FoodTab;
