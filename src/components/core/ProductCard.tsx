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

export interface Category {
  id: number;
  name: string;
  icon: string;
}
export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  categories: Category[];
  price: number;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  categories,
  description,
  image,
  name,
  price,
  id,
}: ProductCardProps) => {
  return (
    <IonCard className="card">
      <img src={image} alt="Pending..." />
      <FavoriteButton id={id} />
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
        <IonCardTitle className="card__title">{name}</IonCardTitle>
        <IonCardSubtitle>
          <IonText color="secondary">${price.toFixed(0)}</IonText>
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
