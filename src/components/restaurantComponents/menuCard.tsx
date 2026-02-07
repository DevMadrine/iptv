import { IntrinsicNodeProps, View,Text, loadFonts } from "@lightningtv/solid";
import { type Component } from "solid-js";

interface MenuCardProps extends IntrinsicNodeProps{
name: string;
menuImage: string
}

const MenuCard:Component<MenuCardProps>=props =>{
return(
  <View
{...props}
src={props.menuImage}
style={{
width: 220,
height:280,
borderRadius:10,
alpha: 1,         
scale: 1,         
shader: null,   
overflow: 'hidden', 
$focus:{
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

$unfocus: {
scale: 1,
alpha: 1,
shader: null,
},
}}
>
  <View
  style={{
    width: 220,
    height: 280,
    color: "#00000020",
    zIndex: 1,
  }}/>
  <View
  style={{
    width: 220,
    height: 280,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flexEnd',
    zIndex: 2,
    mountY: 1,
    y: 280,
  }}>
    <View
    style={{
      width: 160,
      height: 40,
      linearGradient: {
        colors: [0xE8451Aff, 0xF58520ff],
        angle: 135,
      },
      marginBottom: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      border: { width: 1, color: '#ffffff30' },
    }}
    >
      <Text
      style={{
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        letterSpacing: 1,
      }}
      >{props.name}</Text>
    </View>
  </View>
</View>
);
};

export default MenuCard;