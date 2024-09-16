import { Product } from "../stores/useProductStore";

const useFilterProduct = () => {
  const handleFilter = async (str: string) => {
    try {
      if (str != "") {
        const response = await fetch(
          `https://storeapi-develop.up.railway.app/api/products/filter/?name=${str}`
        );
        const products: Product[] = await response.json();
        return products;
      }
      return;
    } catch (error: any) {
      console.error(error);
      return;
    }
  };
  return {
    handleFilter,
  };
};

export default useFilterProduct;
