import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonInputPasswordToggle,
} from "@ionic/react";
import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import Lottie from "lottie-react";
import authAnimation from "../../lottie/login.json";
import "./Auth.css";
import { FormRegister, useRegister } from "../../hooks/userRegister";
import { RedirectAuth } from "./Redirect";
import { useValidateForm } from "../../hooks/validateForm";

export const Register: React.FC = () => {
  const { handleValidate, valid, errors } = useValidateForm();
  const { handleRegister } = useRegister();
  const [formData, setFormData] = useState<FormRegister>({
    username: { value: "", regex: "username" },
    firstname: { value: "", regex: "names" },
    lastname: { value: "", regex: "names" },
    password: { value: "", regex: "password" },
  });

  const handleChange = (e: CustomEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [id]: { value, regex: formData[id].regex },
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = handleValidate(formData);
    if (isValid) handleRegister(formData);
    else console.log(errors);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="auth-title">Bienvenido a la familia</IonTitle>
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
                  id={`username`}
                ></IonInput>
                <IonInput
                  fill="outline"
                  label="Nombres"
                  placeholder="Ej.: Kevin Esteven"
                  labelPlacement="stacked"
                  onIonChange={handleChange}
                  id={`firstname`}
                ></IonInput>
                <IonInput
                  fill="outline"
                  label="Apellidos"
                  placeholder="Ej.: Sanchez Gomez"
                  labelPlacement="stacked"
                  onIonChange={handleChange}
                  id={`lastname`}
                ></IonInput>
                <IonInput
                  fill="outline"
                  label="Contraseña"
                  placeholder="Ej.: 12345"
                  labelPlacement="stacked"
                  type="password"
                  onIonChange={handleChange}
                  id={`password`}
                >
                  <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                </IonInput>
                <IonButton
                  className="auth-content__card__form__button"
                  expand="block"
                  shape="round"
                  type="submit"
                >
                  Registrarse
                </IonButton>
              </form>
              {/* {errors.length > 0 && (
                <div className="error-messages">
                  {errors.map((error: any, index: number) => (
                    <IonText color="danger" key={index}>
                      {error}
                    </IonText>
                  ))}
                </div>
              )} */}
            </IonCardContent>
          </IonCard>
          <RedirectAuth route="/login" type="register" />
        </main>
      </IonContent>
    </IonPage>
  );
};
