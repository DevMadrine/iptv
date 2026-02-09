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
  borderRadius: 8,
  color: 0,
  transition: {
    width: { duration: 220, easing: "ease-in-out" },
    height: { duration: 220, easing: "ease-in-out" },
    x: { duration: 220, easing: "ease-in-out" },
    color: { duration: 220, easing: "ease-in-out" },
  },

  $focus: {
    color: "#F58520",
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
