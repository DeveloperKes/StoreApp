import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonText,
} from "@ionic/react";
import React from "react";
import "./ProductCard.css";
import { gameController, heart, heartCircle, star } from "ionicons/icons";

export const ProductCard: React.FC = () => {
  return (
    <IonCard className="card">
      <img src="https://i.imgur.com/ZANVnHE.jpeg" alt="Pending..." />
      <button className="card__favorites_button">
        <IonIcon icon={heart}></IonIcon>
      </button>
      <IonCardHeader>
        <section className="card__categories">
          <IonIcon icon={gameController}></IonIcon>
        </section>
        <IonCardTitle className="card__title">
          Sleek White & Orange Wireless Gaming Controller
        </IonCardTitle>
        <IonCardSubtitle>
          <IonText color="secondary">$100</IonText>
        </IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};
