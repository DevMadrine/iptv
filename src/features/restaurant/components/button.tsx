import { View, Text } from "@lightningtv/solid";
import { type Component } from "solid-js";

interface ButtonProps {
  type: "plus" | "minus";
  active?: boolean;
}

const Button: Component<ButtonProps> = props => {
  const symbol = props.type === "plus" ? "+" : "-";

  return (
    <View
      border={{ width: 2, color: props.active ? "#F58520" : "#00000070" }}
      scale={props.active ? 0.8 : 1.0}
      transition={{ scale: { duration: 100, easing: "ease-in-out" } }}
      style={{
        width: 35,
        height: 35,
        borderRadius: 8,
        color: props.active ? "#F5852040" : "#00000060",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#ffffff",
        }}
      >
        {symbol}
      </Text>
    </View>
  );
};

export default Button;
