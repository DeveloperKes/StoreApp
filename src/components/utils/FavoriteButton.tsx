import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import React, { useState } from "react";
import "./FavoriteButton.css";
export const FavoriteButton: React.FC<{ id: number }> = ({
  id,
}: {
  id: number;
}) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <button onClick={toggleFavorite} className="card__favorites_button">
      <IonIcon className={favorite ? "active" : ""} icon={heart}></IonIcon>
    </button>
  );
};
