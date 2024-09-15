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

export const Store: React.FC = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5137/api/products")
      .then((payload: any) => {
        return payload.json();
      })
      .then((res: any) => {
        setProducts(res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, []);

  const handleSearch = (path: string) => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="search-container">
          <IonIcon icon={filter} />
          <IonSearchbar
            searchIcon={searchCircle}
            animated={true}
            placeholder="Buscar"
            // onInput={handleSearch()}
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
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
