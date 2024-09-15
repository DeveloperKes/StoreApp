import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import { Store } from "../../pages/Store";
import { WishList } from "../../pages/WishList";
import { heart, logIn, person, pricetags } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import useUserState from "../../stores/useUserStore";
import { Login } from "../../pages/Auth/Login";
import { Register } from "../../pages/Auth/Register";

export const Tabs: React.FC = () => {
  const { user } = useUserState();
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/favorites">
            <WishList />
          </Route>
          <Route path="/profile">
            <div></div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Redirect to="/store" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="store" href="/store">
            <IonIcon aria-hidden="true" icon={pricetags} />
            <IonLabel>Productos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="favorites" href="/favorites">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel>Deseados</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href={user ? "/profile" : "/login"}>
            <IonIcon aria-hidden="true" icon={user ? person : logIn} />
            <IonLabel>{user ? "Perfil" : "Iniciar sesión"}</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
