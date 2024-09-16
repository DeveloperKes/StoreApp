import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import { filter, searchCircle } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/core/ProductCard";
import "./Store.css";
import useUserState from "../stores/useUserStore";
import useWishChange from "../stores/useWishAdd";
import { Product } from "../stores/useProductStore";
import useFilterProduct from "../hooks/useFilterProducts";

export const Store: React.FC = () => {
  const { user } = useUserState();
  const { change } = useWishChange();
  const { handleFilter } = useFilterProduct();
  const [products, setProducts] = useState<Product[]>([]);
  let timerSearch: any;

  useEffect(() => {
    handleGetAllProducts();
  }, [change]);

  const handleGetAllProducts = () => {
    fetch(
      `http://localhost:5137/api/products${user ? "?userId=" + user.id : ""}`
    )
      .then((payload: any) => {
        return payload.json();
      })
      .then((res: Product[]) => {
        setProducts(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  const handleSearch = async (e: CustomEvent) => {
    clearTimeout(timerSearch);
    const { value } = e.target as HTMLInputElement;
    const filterResult = await handleFilter(value);
    timerSearch = setTimeout(() => {
      if (filterResult) setProducts(filterResult);
      else handleGetAllProducts();
    }, 500);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search-container">
          <IonSearchbar
            searchIcon={searchCircle}
            animated={true}
            placeholder="Buscar"
            onIonInput={handleSearch}
          ></IonSearchbar>
        </div>
        <IonGrid fixed={true}>
          <IonRow>
            {products.map((product: any) => (
              <IonCol
                title={product.name}
                key={`Product-Home-${product.id}`}
                size="6"
                size-sm="3"
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  categories={product.categories}
                  id={product.id}
                  isFavorite={product.isFavorite}
                  rate={product.rate}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
