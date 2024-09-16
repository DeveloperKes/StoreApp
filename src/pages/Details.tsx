import {
  IonBackButton,
  IonBadge,
  IonButtons,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect } from "react";
import useProductState, { Category } from "../stores/useProductStore";
import { useHistory } from "react-router";
import { IonContent } from "@ionic/react";
import { Icons } from "../utils/utils";
import { star, starOutline } from "ionicons/icons";
import "./Details.css";
export const Details: React.FC = () => {
  const { product } = useProductState();
  const history = useHistory();

  useEffect(() => {
    if (!product) history.push("/store");
  }, [product]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{product?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={product?.image} />
        <main className="details">
          <section className="details__categories">
            {product?.categories.map((category: Category) => (
              <IonBadge
                className="details__categories__category"
                key={category.id}
              >
                <IonIcon icon={Icons[category.icon]} />
                <IonText>{category.name}</IonText>
              </IonBadge>
            ))}
          </section>
          <section className="details__rate">
            {[1, 2, 3, 4, 5].map((rate: number) => (
              <IonIcon
                icon={product?.rate || 0 >= rate ? star : starOutline}
                className="details__rate__starRate"
              ></IonIcon>
            ))}
            <IonText>({product?.rate})</IonText>
          </section>
          <section className="details__price">
            <IonText>{`$${product?.price.toFixed(0)}`} </IonText>
            <small>Envío gratis a todo el país</small>
          </section>
          <section className="details__description">
            <IonText>{product?.description}</IonText>
          </section>
        </main>
      </IonContent>
    </IonPage>
  );
};
