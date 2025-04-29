import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from 'react-toastify';

const FoodCard = ({item}) => {
  const {name, recipe, image, price, _id} = item
  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  

  const handleFoodCart =(food) =>{
    console.log(food);
    if(user && user.email){
      //Todo: Send data to the server
      console.log(user.email , food);
      const cartItem ={
        foodId : _id,
        email: user.email,
        name,
        image,
        price
      }
      axios.post('http://localhost:5000/carts', cartItem)
      .then(data =>{
        console.log(data.data);
        if(data.data.insertedId){
          toast.success('😋 Food added to the cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      })
    } else {
      Swal.fire({
        title: "Please Login to Order",
        text: "You need to login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login' ,{state: {from: location}})
        }
      });
    }
  }
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
          <button onClick={() => handleFoodCart(item)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
