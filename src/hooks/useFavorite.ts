export const useFavorite = () => {
  //TODO: Estandarizar tipos
  const handleFavorite = async (productId: number, userId: number) => {
    try {
      const reponse = await fetch("https://storeapi-develop.up.railway.app/api/wish/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          userId,
        }),
      });
      if (!reponse.ok)
        throw new Error("No se ha podido agregar el producto seleccionado.");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };
  return {
    handleFavorite,
  };
};
