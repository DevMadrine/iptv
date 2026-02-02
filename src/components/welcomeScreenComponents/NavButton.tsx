import { View, NodeProps, IntrinsicNodeProps, Text } from "@lightningtv/solid";

interface NavButtonProps extends IntrinsicNodeProps {
  icon: string;
  label: string;
}



export default function NavButton(props: NavButtonProps) {
  return (
   <View {...props} style={{
    display: 'flex', 
    flexDirection: 'row',
    x: 20,
    height: 45,
    width: 200,
    gap: 18,
    $focus:{
      color: "#F58520",
      width: 200,
      borderRadius:8
    }
  }}
  autofocus
  >
    <View src={props.icon} forwardStates style={{
      width: 25, 
      height:25, 
      color: '#ffffff',
      y: 4, 

      }}/>
    <Text
    style={{
      fontSize: 25,
      y:6,
      fontWeight: 'lighter',
      color: '#ffffff'
    }}
    >{props.label}</Text>
  </View>
  );
}