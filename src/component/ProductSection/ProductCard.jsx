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
        <div className="card-body">
          <h2 className="card-title">{product?.marketName}</h2>
          <p>📅 {product?.date}</p>
          <p className="text-base">
            {product?.itemName.trim()} — ৳
            {todayPrice ? todayPrice.price : product?.pricePerUnit}/kg
          </p>
          <div onClick={handleViewDetails} className="card-actions ">
            <button className="px-7 py-2 rounded-full bg-yellow-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
