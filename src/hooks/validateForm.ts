import { useState } from "react";
import { FormLogin } from "./userLogin";
import { validateFieldValue } from "../utils/utils";
import { FormRegister } from "./userRegister";

export interface ErrorField {
  field: string;
  error: string;
}
export const useValidateForm = () => {
  const [valid, setValid] = useState<boolean>(true);
  const [errors, setErrors] = useState<ErrorField[]>([]);

  const handleValidate = (formData: FormLogin | FormRegister) => {
    const newErrors: ErrorField[] = [];

    for (const field of Object.keys(formData)) {
      if (formData[field].value == null)
        newErrors.push({
          error: `El campo ${field} es requerido.`,
          field: field,
        });
      else if (
        !validateFieldValue(formData[field].value, formData[field].regex)
      )
        newErrors.push({
          error: `El campo ${field} es inválido.`,
          field: field,
        });

      setErrors(newErrors);
      setValid(newErrors.length === 0);

      return newErrors.length === 0;
    }
  };
  return {
    handleValidate,
    valid,
    errors,
  };
};
