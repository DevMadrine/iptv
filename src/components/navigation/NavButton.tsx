import { View, Text, IntrinsicNodeProps, NodeStyles, TextStyles, Show } from "@lightningtv/solid";

interface NavButtonProps extends IntrinsicNodeProps {
  icon: string;
  label: string;
  hideIcon?: boolean;
}

const NavButtonStyles: NodeStyles = {
  zIndex: 102,
  height: 70,
  width: 100,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: 12,
  color: 0,
  border: { width: 0, color: 0x00000000 },
  transition: {
    width: { duration: 250, easing: "ease-in-out" },
    height: { duration: 250, easing: "ease-in-out" },
    x: { duration: 250, easing: "ease-in-out" },
    color: { duration: 300, easing: "ease-in-out" },
    scale: { duration: 250, easing: "ease-in-out" },
    borderColor: { duration: 300, easing: "ease-in-out" },
  },

  $focus: {
    linearGradient: {
      angle: 135,
      stops: [0, 1],
      colors: [0xf5a623ff, 0xe8600aff],
    },
    border: { width: 2, color: 0xffd080ff },
    scale: 1.05,
  },
  $active: {
    width: 325,
    height: 70,
    x: 20,
  },
};

const iconContainerStyles: NodeStyles = {
  width: 70,
  height: 70,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyles: NodeStyles = {
  width: 35,
  height: 35,
};

const NavButtonTextStyles: TextStyles = {
  fontSize: 38,
  x: 10,
  height: 50,
  alpha: 0,
  transition: {
    alpha: { duration: 220, easing: "ease-in-out" },
  },
  // $base: { alpha: 0 }, // hidden initially
  $focus: { alpha: 1 },
  $active: { alpha: 1 },
};

export default function NavButton(props: NavButtonProps) {
  return (
    <View {...props} forwardStates style={NavButtonStyles}>
      <Show when={!props.hideIcon}>
        <View style={iconContainerStyles}>
          <View src={props.icon} style={iconStyles} />
        </View>
      </Show>
      <Text style={NavButtonTextStyles}>{props.label}</Text>
    </View>
  );
}
