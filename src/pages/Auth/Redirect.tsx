import { IonIcon, IonPage, IonText } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router-dom";

interface RedirectAuthProps {
  route: string;
  type: "register" | "login";
}

export const RedirectAuth: React.FC<RedirectAuthProps> = ({
  route = "/login",
  type = "login",
}: RedirectAuthProps) => {
  const history = useHistory();
  return (
    <>
      <IonText className="information_text">
        {type == "login" ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
      </IonText>
      <a onClick={() => history.push(route)}>
        <IonText className="link">
          {type == "login" ? "Registrate gratis aquí" : "Inicia sesión aquí"}{" "}
          <IonIcon icon={arrowForward}></IonIcon>
        </IonText>
      </a>
    </>
  );
};
