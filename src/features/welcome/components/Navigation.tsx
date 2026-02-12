import { View, IntrinsicNodeProps, Text } from "@lightningtv/solid";
import { Component } from "solid-js";

interface NavButtonProps extends IntrinsicNodeProps {
  icon: string;
  label: string;
}

const NavigationButton: Component<NavButtonProps> = props => {
  return (
    <View
      {...props}
      width={215}
      height={48}
      borderRadius={15}
      color="#00000000"
      clipping={true}
      transition={{
        color: { duration: 200, easing: "ease-out" },
      }}
      style={{
        $focus: {
          linearGradient: {
            colors: [0xe8451aff, 0xf58520ff],
            angle: 135,
          },
        },
        $unfocus: {
          color: "#00000000",
        },
      }}
    >
      <View x={17} y={10} width={30} height={30}>
        <View
          src={props.icon}
          width={25}
          height={25}
          autosize={false}
          scale={props.icon.includes("settings") ? 1.6 : 1}
        />
      </View>

      <Text
        x={60}
        y={12}
        style={{
          fontSize: 28,
          color: "#ffffffff",
          fontWeight: "lighter",
        }}
      >
        {props.label}
      </Text>
    </View>
  );
};

export default NavigationButton;
