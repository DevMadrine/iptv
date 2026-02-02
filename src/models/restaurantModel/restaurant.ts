import { createSignal } from "solid-js";

export function restaurantMenu() {
  const [menu] = createSignal([
    {name: 'Breakfast', menuImage: './assets/breakfast.jpg'},
    {name: 'Lunch', menuImage: './assets/lunch.jpeg'},
    {name: 'Dinner', menuImage: './assets/dinner.jpeg'},
    {name: 'Drinks', menuImage: './assets/drinks.jpeg'},
  ]);

  const [navigationItems] = createSignal([
    { icon: './assets/tv.svg', label: 'Live TV', route: 'live-tv' },
    { icon: './assets/facilities.svg', label: 'Facilities', route: 'facilities' },
    { icon: './assets/restaurant.svg', label: 'Restaurant', route: 'restaurant' },
    { icon: './assets/settings.svg', label: 'Settings', route: 'settings' },
  ]);

  return {
    menu,
    navigationItems,
  };
}