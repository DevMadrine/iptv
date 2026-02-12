import { View, IntrinsicNodeProps, Text, NodeStyles } from "@lightningtv/solid";
import { Component } from "solid-js";

interface TvProps extends IntrinsicNodeProps {
  channelNumber: string;
  channelIcon: string;
  onEnter?: () => void;
  onFocus?: () => void;
}

const menuStyles: NodeStyles | undefined = {
  width: 200,
  height: 100,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,

  $focus: {
    linearGradient: {
      colors: [0xef5e2c4d, 0xffffff20],
      angle: (90 / 360) * Math.PI,
    },
  },
  transition: { scale: { duration: 120 } },
};
const LiveTvMenu: Component<TvProps> = props => {
  return (
    <View {...props} forwardStates style={menuStyles}>
      <Text style={{ color: "#FFFFFF" }}>{props.channelNumber}</Text>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 10,
        }}
        src={props.channelIcon}
      />
    </View>
  );
};
export default LiveTvMenu;
