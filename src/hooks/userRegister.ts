import useUserState, { User } from "../stores/useUserStore";
import { useHistory } from "react-router-dom";
import { MD5 } from "crypto-js";
import { FormField } from "../utils/utils";

export interface FormRegister {
  username: FormField;
  firstname: FormField;
  lastname: FormField;
  password: FormField;
  [key: string]: FormField;
}

export const useRegister = () => {
  const { setUser } = useUserState();
  const history = useHistory();

  const handleRegister = async (formData: FormRegister) => {
    try {
      const hashPassword: string = MD5(formData.password.value).toString();
      const response = await fetch("https://storeapi-develop.up.railway.app/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username.value,
          password: hashPassword,
          firstname: formData.firstname.value,
          lastname: formData.lastname.value,
        }),
      });

      if (!response.ok) throw new Error("Error en la solicitud");

      const data: User = await response.json();
      setUser(data);
      history.push("/store");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };

  return {
    handleRegister,
  };
};
