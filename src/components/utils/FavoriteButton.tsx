import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./FavoriteButton.css";
import { useFavorite } from "../../hooks/useFavorite";
import useUserState from "../../stores/useUserStore";
import { useUnfavorite } from "../../hooks/useUnfavorite";
import useWishChange from "../../stores/useWishAdd";
import { useHistory } from "react-router";
export const FavoriteButton: React.FC<{ id: number; initial: boolean }> = ({
  id,
  initial = false,
}: {
  id: number;
  initial: boolean;
}) => {
  const { handleFavorite } = useFavorite();
  const { handleUnfavorite } = useUnfavorite();
  const { user } = useUserState();
  const { change, setChange } = useWishChange();
  const [favorite, setFavorite] = useState(initial);
  const history = useHistory();

  const toggleFavorite = () => {
    if (user) {
      setFavorite(!favorite);
      if (!favorite && user) handleFavorite(id, user.id);
      else if (user) handleUnfavorite(id, user.id);

      if (user) setTimeout(() => setChange(Date.now()), 10);
    } else history.push("/login");
  };

  useEffect(() => {
    setFavorite(initial);
  }, [change, initial]);

  return (
    <button onClick={toggleFavorite} className="card__favorites_button">
      <IonIcon className={favorite ? "active" : ""} icon={heart}></IonIcon>
    </button>
  );
};
