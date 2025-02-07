import bnrImg from "../../../assets/home/chef-service.jpg"
const StatusBnr = () => {
  return (
    <div className="md:w-[1320px] mx-auto relative flex items-center justify-center">
      <img
      className="md:h-[530px] h-[250px] object-cover"
      src={bnrImg} alt="" />

      
      <h1 className="absolute w-2/3 text-center md:top-52 top-14 md:px-6 px-2 md:py-12 py-2 md:mx-10 mx-2 bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat et reiciendis libero minima, aut atque repellat soluta dicta provident ipsum, quo perspiciatis amet quidem quis neque quod. Suscipit doloribus nam impedit voluptatibus esse magni molestias temporibus reprehenderit amet ex vel mollitia nostrum, quos provident et maiores vero necessitatibus sint!</h1>
      
    </div>
  );
};

export default StatusBnr;