import { createSignal } from "solid-js";

export function createWelcomeModel() {
  const [apps] = createSignal([
    "./assets/youtube.png",
    "./assets/chromecast.jpg",
    "./assets/prime.jpg",
    "./assets/disney.svg",
    "./assets/netflix.jpg",
  ]);

  const [navigationItems] = createSignal([
    { icon: "./assets/tv.svg", label: "LiveTv", route: "/tv" },
    { icon: "./assets/facilities.svg", label: "Facilities", route: "/facilities" },
    { icon: "./assets/restaurant.svg", label: "Restaurant", route: "/restaurant" },
    { icon: "./assets/settings.svg", label: "Settings", route: "/settings" },
  ]);

  return {
    apps,
    navigationItems,
  };
}
