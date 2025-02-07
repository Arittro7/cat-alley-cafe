
const MenuItems = ({item}) => {
  const {name, recipe, image,price} = item
  return (
    <div className="flex gap-3 text-xl">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
      <div>
        <h1>{name}-----------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItems;