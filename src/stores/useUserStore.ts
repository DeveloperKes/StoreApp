import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export interface User {
  username: string;
  id: number;
  firstname: string;
  lastname: string;
}

export interface UserState {
  user: User | null;
  setUser: (newUser: User) => void;
  removeUser: () => void;
}

type userPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>;

const useUserState = create<UserState>(
  (persist as userPersist)(
    (set) => ({
      user: null,
      setUser: (newUser: User) =>
        set(() => ({
          user: newUser,
        })),
      removeUser: () => set(() => ({ user: null })),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserState;
