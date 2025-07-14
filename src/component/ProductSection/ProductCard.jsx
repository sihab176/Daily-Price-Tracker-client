import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(product);

  // Filter today's price from price history
  const today = new Date().toISOString().split("T")[0];
  const todayPrice = product?.prices.find((p) => p.date === today);

  const handleViewDetails = () => {
    if (!user) navigate("/login");
    else navigate(`/productDetails/${product._id}`);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-base-200 w-[360px] shadow-sm">
        <figure className="bg-[#c4bc7b59] py-9">
          <img
            src={product?.image}
            alt="Shoes"
            className="w-full h-40 object-contain "
          />
        </figure>
        <div className=" px-4 py-3">
          <h2 className="card-title text-[20px] mb-1">{product?.marketName}</h2>
          <p>
            <strong className="text-gray-500">Date :</strong> {product?.date}
          </p>
          <p className="text-base">
            <strong className="text-gray-500">Item Name :</strong>{" "}
            {product?.itemName.trim()} <br />
            <strong className="text-gray-500">Price :</strong> ৳
            {todayPrice ? todayPrice.price : product?.pricePerUnit}/kg
          </p>
          <div onClick={handleViewDetails} className="card-actions mt-2">
            <button  className="px-7 py-1 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
