import { View, Text } from "@lightningtv/solid";
import { type Component } from "solid-js";

interface ButtonProps {
  type: "plus" | "minus"; 
  onClick?: () => void;   
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
        border: { width:2,  color: "#ffffff80"},
        // $focus: {
        //   color: "#00000080",
        //   border: { width:2, color: "#F58520"},
        //   transition: { scale: { duration: 150 } },
        // },
        // $unfocus: {
        //   scale: 1,
        // },
      }}
      onClick={props.onClick}
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
