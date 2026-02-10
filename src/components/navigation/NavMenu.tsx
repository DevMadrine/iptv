import { ElementNode, For, NodeStyles, Text, View } from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import { useLocation, useNavigate } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

import NavButton from "./NavButton";

const menuItems = [
  { label: "Home", icon: "./assets/home.webp", route: "/" },
  { label: "Facilities", icon: "./assets/facilities.svg", route: "/facilities" },
  { label: "Live Tv", icon: "./assets/tv.svg", route: "/tv" },
  { label: "Restaurant", icon: "./assets/restaurant.svg", route: "/restaurant" },
  { label: "Settings", icon: "./assets/set.png", route: "/settings" },
];

export default function NavMenu(props) {
  let backdrop: ElementNode | undefined;
  let header: ElementNode | undefined;
  let logo: ElementNode | undefined;

  const navigate = useNavigate();
  const location = useLocation();
  const [menuFocused, setMenuFocused] = createSignal(false);

  function onFocus(this: ElementNode) {
    console.log("NavMenu focused (expanded)");
    setMenuFocused(true);
    backdrop!.states.add("$focus");
    this.children.forEach((c, i) => {
      console.log(`NavButton ${i} adding $active state`);
      c.states!.add("$active");
    });
    this.children[this.selected || 0].setFocus();
    header?.states.add("$open");
    logo?.states.add("$open");
  }

  function onBlur(this: ElementNode) {
    console.log("NavMenu blurred (collapsed)");
    setMenuFocused(false);
    backdrop!.states.remove("$focus");
    this.children.forEach((c, i) => {
      console.log(`NavButton ${i} removing $active state`);
      c.states!.remove("$active");
    });
    this.selected = 0;
    header?.states.remove("$open");
    logo?.states.remove("$open");
  }

  function handleNavigate(page: string) {
    if (location.pathname === page) {
      props?.focusPage?.();
      return;
    }
    navigate(page);
  }

  const navMenuStyles: NodeStyles | undefined = {
    width: 320,
    height: 320,
    x: 35,
    y: 50,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    alignItems: "flexStart",
    justifyContent: "flexStart",
    zIndex: 105,
    transition: {
      x: { duration: 220, easing: "ease-in-out" },
      y: { duration: 220, easing: "ease-in-out" },
    },
    $open: {
      width: 250,
      height: 250,
      alignItems: "center",
      justifyContent: "center",
      y: 50,
      borderRadius: 12,
      border: { width: 3, color: "#ffffff" },
    },
  };

  const logoStyles: NodeStyles = {
    width: 50,
    height: 50,
    transition: {
      scale: { duration: 180, easing: "ease-in-out" },
    },
    $open: { width: 100, height: 100 },
  };

  const column: NodeStyles | undefined = {
    width: 140,
    height: 600,
    y: 400,
    gap: 20,
    zIndex: 101,
    transition: {
      x: { duration: 250, easing: "ease-in-out" },
      width: { duration: 250, easing: "ease-in-out" },
    },
    $focus: { width: 500, x: 20 },
  };

  const gradient: NodeStyles | undefined = {
    zIndex: 99,
    color: "#000000",
    src: "./assets/sidenav.png",
    alpha: 0,
    width: 100,
    height: 1080,
    $focus: { alpha: 1, width: 800 },
    transition: { alpha: true, width: true },
  };

  return (
    <>
      <View
        ref={el => {
          header = el;
        }}
        style={navMenuStyles}
      >
        <View
          ref={el => {
            logo = el;
          }}
          style={logoStyles}
          src={"./assets/serena.svg"}
        />

        <Show when={!menuFocused()}>
          <View style={{ display: "flex", flexDirection: "column", gap: 60, marginTop: 60 }}>
            <View src="./assets/home.webp" style={{ width: 35, height: 35 }} />
            <View src="./assets/facilities.svg" style={{ width: 35, height: 35}} />
            <View src="./assets/tv.svg" style={{ width: 35, height: 35}} />
            <View src="./assets/restaurant.svg" style={{ width: 35, height: 35}} />
            <View src="./assets/set.png" style={{ width: 42, height: 42}} />
          </View>
        </Show>

        <Show when={menuFocused()}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: "lighter",
              fontSize: 25,
              transition: { alpha: { duration: 150 } },
              skipFocus: true,
              $focus: { alpha: 1 },
            }}
          >
            {" "}
            SERENA HOTELS{" "}
          </Text>
        </Show>
      </View>
      <Column {...props} skipFocus onFocus={onFocus} onBlur={onBlur} style={column}>
        <For each={menuItems}>
          {menuItem => (
            <NavButton
              onEnter={() => handleNavigate(menuItem.route)}
              icon={menuItem.icon}
              label={menuItem.label}
              hideIcon={!menuFocused()}
            />
          )}
        </For>
      </Column>
      <View skipFocus ref={backdrop} style={gradient}></View>
    </>
  );
}
