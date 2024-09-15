import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInfiniteScroll,
  IonImg,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonBadge,
  IonCardContent,
  IonText,
} from "@ionic/react";
import { searchCircle } from "ionicons/icons";
import React from "react";
import { ProductCard } from "../components/ProductCard";

export const Store: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Productos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          searchIcon={searchCircle}
          animated={true}
          placeholder="Buscar"
        ></IonSearchbar>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol size="6" size-sm="3">
              <ProductCard />
            </IonCol>
            <IonCol>
              <ProductCard />
            </IonCol>
            <IonCol>
              <ProductCard />
            </IonCol>
            <IonCol>
              <ProductCard />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
