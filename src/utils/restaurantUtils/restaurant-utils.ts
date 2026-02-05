import { cart, setCart } from "@/models/restaurantModel/cartStore";
import { restaurantMenu } from "@/models/restaurantModel/restaurant";
import { createMemo, createSignal } from "solid-js";

export  const mealModel = restaurantMenu();
export const [editing, setEditing] = createSignal(false);
export const [activeButton, setActiveButton] = createSignal<"plus" | "minus" | null>(null);

export function flashButton(type: "plus" | "minus") {
  setActiveButton(type);
  setTimeout(() => setActiveButton(null), 120);
}


export function addToCart(mealId: string) {
  setCart(items => {
    const existing = items.find(i => i.mealId === mealId);

    if (existing) {
      return items.map(i =>
        i.mealId === mealId
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    }

    return [...items, { mealId, quantity: 1 }];
  });
}

export function decreaseFromCart(mealId: string) {
  setCart(items => {
    const item = items.find(i => i.mealId === mealId);
    if (!item) return items;

    if (item.quantity === 1) {
      return items.filter(i => i.mealId !== mealId);
    }

    return items.map(i =>
      i.mealId === mealId
        ? { ...i, quantity: i.quantity - 1 }
        : i
    );
  });
}

export function removeFromCart(mealId: string) {
  setCart(items => items.filter(i => i.mealId !== mealId));
}



export const cartItems = createMemo(()=>{
  const mealsById = Object.entries(mealModel.meal()).flatMap(
    ([categoryName, meals]) =>
      meals.map((meal, index) => ({
        ...meal,
        categoryName,
        index
      }))
  );

  return cart.map(cartItem =>{
    const matchingMeal = mealsById.find(
      meal => meal.mealId === cartItem.mealId
    );
    if(!matchingMeal) return null;
     return {
      ...matchingMeal,
      quantity: cartItem.quantity
    };

  }).filter(Boolean);
  
});

 export const hasCartItems = createMemo(() => cartItems().length > 0);


export const subtotal = createMemo(() => {
  return cartItems().reduce((total, item) => {
    const price = Number(item.mealPrice);
    const qty = Number(item.quantity);

    return total + price * qty;
  }, 0);
});

export const tax = createMemo(() => Number(subtotal()) * 0.1);

export const total = createMemo(() => Number(subtotal()) + Number(tax()));

