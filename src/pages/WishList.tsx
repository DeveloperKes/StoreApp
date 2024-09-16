import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonImg,
  IonText,
  IonButton,
  IonIcon,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./WishList.css";
import {
  arrowUp,
  chevronDown,
  chevronUp,
  heart,
  heartDislike,
  helpCircle,
  remove,
} from "ionicons/icons";
import useUserState from "../stores/useUserStore";
import useWishChange from "../stores/useWishAdd";
import { useUnfavorite } from "../hooks/useUnfavorite";
import { useHistory } from "react-router";

export const WishList: React.FC = () => {
  const { user } = useUserState();
  const { change, setChange } = useWishChange();
  const { handleUnfavorite } = useUnfavorite();
  const [wishProducts, setWishProducts] = useState<any>([]);

  const [sortOptions, setSortOptions] = useState<{
    date: "up" | "down" | "no-set";
    name: "up" | "down" | "no-set";
    price: "up" | "down" | "no-set";
  }>({
    date: "no-set",
    name: "no-set",
    price: "no-set",
  });

  const history = useHistory();
  useEffect(() => {
    if (user) {
      fetch(
        `https://storeapi-develop.up.railway.app/api/wish/?userId=${user.id}`
      )
        .then((payload: any) => {
          return payload.json();
        })
        .then((res: any) => {
          setWishProducts(res);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }, [user, change]);

  const handleFavorite = (productId: number) => {
    if (user) {
      handleUnfavorite(productId, user.id);
      setTimeout(() => setChange(Date.now()), 200);
    }
  };

  useEffect(() => {
    handleSorted();
  }, [sortOptions]);

  const handleSorted = () => {
    const sortedProducts = [...wishProducts].sort((a, b) => {
      if (sortOptions.name === "down")
        return a.product.name.localeCompare(b.product.name);
      else if (sortOptions.name === "up")
        return b.product.name.localeCompare(a.product.name);

      if (sortOptions.price === "down")
        return a.product.price - b.product.price;
      else if (sortOptions.price === "up")
        return b.product.price - a.product.price;

      if (sortOptions.date === "down") {
        return new Date(a.dateAdd).getTime() - new Date(b.dateAdd).getTime();
      } else if (sortOptions.date === "up") {
        return new Date(b.dateAdd).getTime() - new Date(a.dateAdd).getTime();
      }

      return 0;
    });
    setWishProducts(sortedProducts);
  };

  const handleChangeSorted = (sortedType: "date" | "name" | "price") => {
    const dicStateNext: {
      [key: string]: "up" | "down" | "no-set";
    } = {
      "no-set": "up",
      up: "down",
      down: "no-set",
    };
    const newState = dicStateNext[sortOptions[sortedType]];
    setSortOptions((prevSortOptions) => ({
      ...prevSortOptions,
      [sortedType]: newState,
    }));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de deseos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <section className="sorted">
          <IonText>Ordenar favoritos por: </IonText>
          <IonButton
            onClick={() => {
              handleChangeSorted("name");
            }}
            color={
              sortOptions["name"] == "no-set"
                ? "tertiary"
                : sortOptions["name"] == "down"
                ? "warning"
                : "primary"
            }
            size="small"
          >
            <IonText>Nombre</IonText>
            <IonIcon
              icon={
                sortOptions["name"] == "no-set"
                  ? remove
                  : sortOptions["name"] == "down"
                  ? chevronDown
                  : chevronUp
              }
            ></IonIcon>
          </IonButton>
          <IonButton
            onClick={() => {
              handleChangeSorted("price");
            }}
            color={
              sortOptions["price"] == "no-set"
                ? "tertiary"
                : sortOptions["price"] == "down"
                ? "warning"
                : "primary"
            }
            size="small"
          >
            <IonText>Precio</IonText>
            <IonIcon
              icon={
                sortOptions["price"] == "no-set"
                  ? remove
                  : sortOptions["price"] == "down"
                  ? chevronDown
                  : chevronUp
              }
            ></IonIcon>
          </IonButton>
          <IonButton
            onClick={() => {
              handleChangeSorted("date");
            }}
            color={
              sortOptions["date"] == "no-set"
                ? "tertiary"
                : sortOptions["date"] == "down"
                ? "warning"
                : "primary"
            }
            size="small"
          >
            <IonText>Fecha</IonText>
            <IonIcon
              icon={
                sortOptions["date"] == "no-set"
                  ? remove
                  : sortOptions["date"] == "down"
                  ? chevronDown
                  : chevronUp
              }
            ></IonIcon>
          </IonButton>
        </section>
        <IonList>
          {wishProducts.map((wish: any) => (
            <IonItem key={wish.id}>
              <main className="product">
                <section>
                  <IonImg className="product__image" src={wish.product.image} />
                </section>
                <section className="product__texts">
                  <h5>
                    <IonText color="warning">{wish.product.name}</IonText>
                  </h5>
                  <h5>
                    <IonText color="secondary">
                      {new Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0,
                      }).format(wish.product.price)}
                    </IonText>
                  </h5>
                  <IonButton
                    className="product__button"
                    color="danger"
                    fill="solid"
                    onClick={() => handleFavorite(wish.product.id)}
                  >
                    <IonText>Eliminar de favoritos</IonText>
                    <IonIcon slot="end" icon={heartDislike}></IonIcon>
                  </IonButton>
                  <IonText className="product__date">
                    <span>Agregado: </span>{" "}
                    {new Date(wish.dateAdd).toLocaleString()}
                  </IonText>
                </section>
              </main>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
