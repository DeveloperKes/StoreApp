import { useHistory } from "react-router";
import useUserState, { User } from "../stores/useUserStore";
import { FormField } from "../utils/utils";
import { MD5 } from "crypto-js";

export interface FormLogin {
  username: FormField;
  password: FormField;
  [key: string]: FormField;
}

export const useLogin = () => {
  const { setUser } = useUserState();
  const history = useHistory();

  const handleLogin = async (formData: FormLogin) => {
    try {
      const hashPassword: string = MD5(formData.password.value).toString();
      const response = await fetch("https://storeapi-develop.up.railway.app/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username.value,
          password: hashPassword,
        }),
      });
      if (!response.ok) throw new Error("Error en el inicio de sesión");
      const data: User = await response.json();
      setUser(data);
      history.push("/store");
    } catch (error: any) {
      console.error("Error:", error);
    }
  };
  return {
    handleLogin,
  };
};
