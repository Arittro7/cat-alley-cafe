const FoodCard = ({item}) => {
  const {name, recipe, image, price} = item
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
        />
      </figure>
      <p className="absolute text-xl font-bold bg-black px-2 py-1 rounded-md text-white top-5 right-6">
        ${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {recipe}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
