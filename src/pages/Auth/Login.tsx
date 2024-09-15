import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonInputPasswordToggle,
  IonText,
  IonContent,
} from "@ionic/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import authAnimation from "../../lottie/login.json";
import "./Auth.css";
import { RedirectAuth } from "./Redirect";
import { FormLogin, useLogin } from "../../hooks/userLogin";
import { useValidateForm } from "../../hooks/validateForm";

export const Login: React.FC = () => {
  const { handleValidate, valid, errors } = useValidateForm();
  const { handleLogin } = useLogin();
  const [formData, setFormData] = useState<FormLogin>({
    username: { value: "", regex: "username" },
    password: { value: "", regex: "password" },
  });

  const handleChange = (e: CustomEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [id]: { value, regex: formData[id].regex },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = handleValidate(formData);
    if (isValid) handleLogin(formData);
    else console.log(errors);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="auth-title">
            <IonText>Bienvenido de nuevo</IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <main className="auth-content">
          <IonCard className="auth-content__card">
            <Lottie
              className="auth-content__card__lottie"
              animationData={authAnimation}
            ></Lottie>
            <IonCardContent>
              <form
                onSubmit={handleSubmit}
                className="auth-content__card__form"
              >
                <IonInput
                  fill="outline"
                  label="Nombre de usuario"
                  placeholder="Ej.: compradorcompulsivo123"
                  labelPlacement="stacked"
                  onIonChange={handleChange}
                  type="text"
                  id="username"
                  autocomplete={"off"}
                ></IonInput>
                <IonInput
                  fill="outline"
                  label="Contraseña"
                  placeholder="Ej.: 12345"
                  labelPlacement="stacked"
                  type="password"
                  onIonChange={handleChange}
                  id="password"
                >
                  <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                </IonInput>
                <IonButton
                  className="auth-content__card__form__button"
                  expand="block"
                  shape="round"
                  type="submit"
                >
                  Iniciar sesión
                </IonButton>
              </form>
            </IonCardContent>
          </IonCard>
          <RedirectAuth route="/register" type="login" />
        </main>
      </IonContent>
    </IonPage>
  );
};
