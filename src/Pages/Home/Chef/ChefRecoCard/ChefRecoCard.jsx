
const ChefRecoCard = ({recommend}) => {
  const {name, image,recipe} = recommend;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img className="h-[300px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-gray-200">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center items-center ">
      <button className="btn w-3/4 btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
  );
};

export default ChefRecoCard;