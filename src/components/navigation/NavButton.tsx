import { View, Text, IntrinsicNodeProps, Show } from "@lightningtv/solid";

interface NavButtonProps extends IntrinsicNodeProps {
  icon: string;
  label: string;
  hideIcon?: boolean;
}

export default function NavButton(props: NavButtonProps) {
  return (
    <View 
      {...props} 
      forwardStates
      width={100}
      height={55}
      color={"transparent"} 
      style={{
        $focus: {
          linearGradient: {
        colors: [0xE8451Aff, 0xF58520ff],
        angle: 135,
      },
          borderRadius: 12,
          border: { width: 1, color: '#ffffff30' },
        },
        $active: {
          width: 250,
          x: 20,
        },
        $unfocus: {
          color: "#00000000"
        }
      }}
    >
      <View 
        x={17}
        y={8}
        width={35}
        height={35}
        transition={{
          alpha: { duration: 220, easing: "ease-in-out" }
        }}
        style={{
          alpha: props.hideIcon ? 0 : 1, 
          $active: { alpha: 1 },
        }}
      >
        <View 
          src={props.icon}
          width={35}
          height={35}
          autosize={false}
        />
      </View>
      <Show when={!props.hideIcon}>
      <Text 
        x={70}
        y={15}
        transition={{
          alpha: { duration: 220, easing: "ease-in-out" },
        }}
        style={{
          fontSize: 30,
          color: "#ffffffff",
          fontWeight: "normal",
        }}
      >
        {props.label}
      </Text>
      </Show>
    </View>
  );
}