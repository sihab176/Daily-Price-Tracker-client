import { useQuery } from "@tanstack/react-query";

import ProductCard from "./ProductCard";
import useAxios from "../../hooks/useAxios";
import Discount from "../../assets/discount.avif";

const ProductSection = () => {
  //   const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["approved-products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products?status=pending&limit=6");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">🛒 Market Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* test =============> */}
      <div
        className={`w-full h-[350px] bg-cover bg-center object-cover border bg-no-repeat `}
        style={{ backgroundImage: `url(${Discount})` }}
      >
        {/* <h1 className="text-4xl font-bold">20 % Discount </h1> */}
      </div>
    </section>
  );
};

export default ProductSection;
