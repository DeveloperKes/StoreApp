import { create } from "zustand";

interface WishChangeState {
  change: number;
  setChange: (newValue: number) => void;
}

const useWishChange = create<WishChangeState>((set) => ({
  change: 0,
  setChange: (newValue: number) => set(() => ({ change: newValue })),
}));

export default useWishChange;
