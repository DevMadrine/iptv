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
height:280,
color: "#00000020",
scaleMode: "cover",
display: 'flex',
justifyContent: 'center',
alignItems: 'flexEnd',
  }}>
<View
style={{
  width: 160,
  height: 40,
  color: "#F58520",
  marginBottom: 16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:6

}}
>
  <Text
  style={{
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#ffffff',
    
  }}
  >{props.name}</Text>
</View>
</View>
</View>
);
};

export default MenuCard;