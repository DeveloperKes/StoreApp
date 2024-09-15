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
import React from "react";
import "./WishList.css";
import { heart, heartDislike, helpCircle } from "ionicons/icons";

export const WishList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de deseos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem className="product">
            <IonImg
              className="product__image"
              src="https://i.imgur.com/ZANVnHE.jpeg"
            />
            <section>
              <h4>
                <IonText color="warning">
                  Sleek White & Orange Wireless Gaming Controller
                </IonText>
              </h4>
              <p>
                <IonText color="secondary">$100</IonText>
              </p>
            </section>
            <IonButton color="danger" fill="solid">
              Unfavorite
              <IonIcon slot="end" icon={heartDislike}></IonIcon>
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
