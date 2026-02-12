import { createStore } from "solid-js/store";

export type CartItem = {
  mealId: string;
  quantity: number;
};

const [cart, setCart] = createStore<CartItem[]>([]);

export { cart, setCart };
