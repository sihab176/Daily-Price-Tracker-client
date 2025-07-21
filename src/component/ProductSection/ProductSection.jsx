import { useQuery } from "@tanstack/react-query";

import ProductCard from "./ProductCard";
import useAxios from "../../hooks/useAxios";
import LoadingComponent from "../Loading/LoadingComponent";

const ProductSection = () => {
  //   const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["approved-products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products?status=approved&limit=6");
      return res.data;
    },
  });

  if (isLoading) return <LoadingComponent />;

  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">🛒 Market Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={product._id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
