import { IntrinsicNodeProps, View, Text } from "@lightningtv/solid";
import { Component, Show } from "solid-js";

interface ButtonProps extends IntrinsicNodeProps {
  name: string;
  width: number;
  height: number;
  icon?: string;
}

const ButtonComponent: Component<ButtonProps> = props => {
  return (
    <View
      focusable
      onEnter={props.onEnter}
      style={{
        width: props.width,
        height: props.height,
        color: "#F58520",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        scale: 1,
        transition: { scale: { duration: 100, easing: "ease-in-out" } },
        $focus: {
          scale: 1.05,
          border: { width: 3, color: "#ffffff" },
        },
      }}
    >
      <Show when={props.icon}>
        <View src={props.icon} style={{ width: 30, height: 30 }} />
      </Show>
      <Text style={{ fontSize: 25, color: "#ffffff", fontFamily: "Roboto", fontWeight: "lighter" }}>
        {props.name}
      </Text>
    </View>
  );
};
export default ButtonComponent;
