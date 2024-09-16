export const useUnfavorite = () => {
  //TODO: Estandarizar tipos
  const handleUnfavorite = async (productId: number, userId: number) => {
    try {
      const reponse = await fetch(
        `https://storeapi-develop.up.railway.app/api/wish?userId=${userId}&productId=${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!reponse.ok)
        throw new Error("No se ha podido elliminar el producto seleccionado.");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };
  return {
    handleUnfavorite,
  };
};
