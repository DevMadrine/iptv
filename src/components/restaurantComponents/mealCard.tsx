import Button from "./button";
import { IntrinsicNodeProps, View, Text, NodeStyles, TextStyles} from "@lightningtv/solid";
import { Row } from "@lightningtv/solid/primitives";
import { Component, createSignal } from "solid-js";

interface MealCardProps extends IntrinsicNodeProps{
mealImage: string;
mealName: string;
mealDescription: string;
mealPrice: string;
quantity: string;
onIncrease: () => void;
onDecrease: () => void;
}

const mealCardStyles: NodeStyles | undefined ={
  width: 360,
  height: 160,
  borderRadius:10,
  color: "#00000060",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap:10,
  $focus:{
  border:{width: 2, color: "#ffffff"},
  transition: {scale: { duration: 150, easing: "ease-out" }}
  },
  $unfocus: { alpha: 0.85}
}

const descriptionStyles: TextStyles | undefined ={
fontSize: 16,
color: "#ffffff",
contain: "width",       
maxLines: 3,           
overflowSuffix: "...",  
wordWrap: 180,          
textAlign: "left",
letterSpacing: 0,
fontStyle: "italic",
lineHeight: 20, 
}

const mealNameStyles : TextStyles | undefined ={
  color: "#ffffff",
  fontSize: 24,
  fontWeight: "lighter",
  fontStyle: "italic",
  letterSpacing: 1,
}

const [editing, setEditing] = createSignal(false);
const [activeButton, setActiveButton] = createSignal<"plus" | "minus" | null>(null);

const MealCard:Component<MealCardProps> = props =>{
return(
  <View 
  focusable
  autofocus={props.autofocus}
  onEnter={() => {setEditing(!editing()); setActiveButton(null)}}
  onBack={() => {setEditing(false); setActiveButton(null)}}
  onBlur={() => {
        setEditing(false);
        setActiveButton(null);
      }}
  onLeft={(e) => {
        if (editing()) {
          setActiveButton("minus");
          props.onDecrease();
          e.stopPropagation();
        }
      }}
  onRight={(e) => {
        if (editing()) {
          setActiveButton("plus")
          props.onIncrease();
          e.stopPropagation();
        }
      }}    
  style={mealCardStyles}>

    <View style={{
    width: 150,
    height: 150,
    display: "flex",
    flexDirection: "column",
    gap: 10
    }}>

    <View src={props.mealImage} style={{
      width: 150,
      height: 90,
      borderRadius: 6,
      color: "#ffffff",
    }}/>

    <View style={{
      width: 150,
    height: 40,
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
    }}>

    <View style={{
    width: 100,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    height: 40,
    }}>
    <Button
     type="plus"
     active={editing() && activeButton() === "plus"}
     />
    <Button 
    type="minus"
    active={editing() && activeButton() === "minus"}
    />
    </View>

    <Text style={{fontSize: 35}}>{props.quantity}x</Text>
    </View>
    </View>

    <View style={{
    width: 180,
    height: 140,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    }}>

    <Text style={mealNameStyles}>{props.mealName}</Text>
        <View style={{
        width: 180,
        height: 60
        }}>
      <Text style={descriptionStyles}>{props.mealDescription}</Text>
      </View>
    <Text style={{fontSize: 28, fontWeight: "bold"}}>Ugx {props.mealPrice}</Text>
</View>
</View>
)
};
export default MealCard;