import { View, Text } from "@lightningtv/solid";
import { type Component } from "solid-js";

interface ButtonProps {
  type: "plus" | "minus"; 
 active?: boolean;  
}

const Button: Component<ButtonProps> = (props) => {
  const symbol = props.type === "plus" ? "+" : "-";

  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 8,
        color: "#00000060",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: { 
          width:2,  
          color: props.active? "#F58520" : "#ffffff80" 
        },
       
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
