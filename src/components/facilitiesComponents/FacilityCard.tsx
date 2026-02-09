import { View, Text, IntrinsicNodeProps } from "@lightningtv/solid";
import { Component } from "solid-js";

interface FacilityCardProps extends IntrinsicNodeProps {
facilityImage: string;
facilityName: string;
isActive?: boolean;
}


const FacilityCard:Component<FacilityCardProps> = props =>{
return(
  <View 
  {...props}
  src={props.facilityImage}
  style={{
    width: 250,
    height: 250,
    borderRadius:10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alpha: 1,
    scale: 1,
    shader: null,
    $focus: {
      scale: 1.15,
    transition: {
  scale: { duration: 200, easing: 'ease-out'},
  alpha: { duration: 200, easing: 'ease-out'}
  },
shader: {
  type: "roundedRect",
  shadow: true,
},
border:{width: 8, color:"#ffffffff"},
    },
$unfocus:{
scale: 1,
alpha: 1,
shader: props.isActive ? {type: "roundedRect", shadow: true} : null,
border: props.isActive ? {width: 4, color: "#F58520"} : {width: 0, color: "#00000000"},
}
  }}>
    <View
    style={{
      width: 234,
      height: 234,
      x: 8,
      y: 8,
      borderRadius: 6,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#00000020",
    }}>
      <Text
      style={{
        fontSize: 35,
        fontFamily: 'Roboto',
        fontWeight: 'lighter',
        color: '#ffffffff',
        letterSpacing: 1,
      }}
      >{props.facilityName}</Text>
    </View>
  </View>
)
}

export default FacilityCard;