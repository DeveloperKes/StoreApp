import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import "./ProductCard.css";
import { Icons } from "../../utils/utils";
import { FavoriteButton } from "../utils/FavoriteButton";
import useProductState, {
  Category,
  Product,
} from "../../stores/useProductStore";
import { useHistory } from "react-router";

export const ProductCard: React.FC<Product> = ({
  categories,
  description,
  image,
  name,
  price,
  id,
  isFavorite,
  rate,
}: Product) => {
  const { product, setProduct } = useProductState();
  const history = useHistory();
  const handleDetails = () => {
    setProduct({
      categories,
      description,
      id,
      image,
      isFavorite,
      name,
      price,
      rate,
    });
    setTimeout(() => history.push("/details"), 100);
  };
  const imageStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <IonCard className="card">
      <div
        style={imageStyle}
        className="card_image"
        onClick={handleDetails}
      ></div>
      <FavoriteButton id={id} initial={isFavorite} />
      <IonCardHeader>
        <section className="card__categories">
          {categories.map((category: Category) => (
            <IonIcon
              key={category.id}
              title={category.name}
              icon={Icons[category.icon]}
            ></IonIcon>
          ))}
        </section>
        <IonCardTitle onClick={handleDetails} className="card__title">
          {name}
        </IonCardTitle>
        <IonCardSubtitle onClick={handleDetails}>
          <IonText color="secondary">
            {new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(price)}
          </IonText>
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
