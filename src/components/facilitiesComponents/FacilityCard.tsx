import { IntrinsicNodeProps } from "@lightningtv/core";
import { View, Text } from "@lightningtv/solid";
import { Component } from "solid-js";

interface FacilityCardProps extends IntrinsicNodeProps {
facilityImage: string;
facilityName: string;
}



const FacilityCard:Component<FacilityCardProps> = props =>{
return(
  <View 
  {...props}
  src={props.facilityImage}
  style={{
    width: 220,
    height: 280,
    borderRadius:10,
    alpha: 1,
    scale: 1,
    shader: null,
    $focus: {
      scale: 1.12,
    transition: {
  scale: { duration: 200, easing: 'ease-out'},
  alpha: { duration: 200, easing: 'ease-out'}
  },
shader: {
  type: "roundedRect",
  shadow: true,
},
border:{width: 4, color:"#ffffffff"},
    },
$unfocus:{
scale: 1,
alpha: 1,
shader: null,
}
  }}>
  <View
  style={{
    width: 220,
    height: 280,
    color: "#00000020",
    zIndex: 1,
  }}/>
    <Text
    style={{
       fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 1,
    }}
    >{props.facilityName}</Text>
  </View>
)
}

export default FacilityCard;