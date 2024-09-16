import {
  fitness,
  gameController,
  people,
  shirt,
  paw,
  home,
  football,
  airplane,
  fastFood,
  library,
  thumbsUp,
} from "ionicons/icons";

export const Icons: {
  [key: string]: string;
} = {
  "game-controller": gameController,
  shirt: shirt,
  fitness: fitness,
  people: people,
  paw: paw,
  home: home,
  football: football,
  airplane: airplane,
  "fast-food": fastFood,
  library: library,
  "thumbs-up": thumbsUp,
};

export const validatorsRegex = {
  names: /^[a-zA-ZÀ-ÖØ-öø-ÿ'.\s-]{1,50}$/,
  username: /^[a-zA-Z0-9_]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!*$#+])[A-Za-z\d!*$#+]{8,}$/,
};

export type RegexType = "names" | "username" | "password";

export const validateFieldValue = (
  value: string,
  regex: RegexType
): boolean => {
  return validatorsRegex[regex].test(value);
};

export interface FormField {
  value: any;
  regex: RegexType;
}
