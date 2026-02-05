import { View, Text, IntrinsicNodeProps } from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import Button from "./button";
import { Component, createSignal } from "solid-js";
import { activeButton, editing, flashButton, setEditing } from "@/utils/restaurantUtils/restaurant-utils";

interface CartCardProps extends IntrinsicNodeProps {
  mealImage: string;
  mealName: string;
  mealDescription: string;
  mealPrice: string;
  quantity: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const CartCard:Component<CartCardProps> = props => {
 
  return (
    <View
  forwardfocus
  autofocus={props.autofocus}
  onEnter={() => setEditing(!editing())}
  onBack={() => setEditing(false)}
    onLeft={(e) => {
    if (editing()) {
      flashButton("minus");
      props.onDecrease?.();
      e.stopPropagation();
    }
  }}
  onRight={(e) => {
    if (editing()) {
      flashButton("plus");
      props.onIncrease?.();
      e.stopPropagation();
    }
  }}
  style={{
    width: 400,
    height: 130,
    borderRadius: 10,
  }}
>
      <Column style={{ width: 400, height: 130, gap: 1 }}>
        <Text 
        focusable
          onEnter={props.onRemove}
          style={{
            color: "#F58520",
            fontSize: 16,
            fontWeight: "lighter",
            x: 330,
            $focus:{
                color: "#000000",
            }
          }}
        >
          Remove
        </Text>   
        <View style={{
          width: 400,
          height: 110,
          borderRadius: 10,
          color: "#00000018",
          border: { width: 2, color: "#00000060" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10
        }}>
          {/* Map Image */}
          <View src={props.mealImage} style={{ width: 90, height: 80, borderRadius: 10 }} />
          
          <View style={{ width: 150, height: 80, display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Map Name and Quantity */}
            <Text style={{ fontSize: 16, fontWeight: "lighter", color: "#000000ff" }}>
              {props.mealName}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F58520" }}>
              {props.quantity}X
            </Text>
            
            <View style={{ width: 150, height: 40 }}>
              {/* Map Description */}
              <Text style={{
                fontSize: 12,
                color: "#000000ff",
                contain: "width",
                maxLines: 2,
                overflowSuffix: "...",
                wordWrap: 150,
                lineHeight: 20,
              }}>
                {props.mealDescription}
              </Text>
            </View>
          </View>

          <View style={{ width: 80, height: 80, display: "flex", flexDirection: "column", gap: 15 }}>
            <View style={{ width: 80, height: 35, display: "flex", flexDirection: "row", gap: 32 }}>
              <Button
                type="plus"
                active={editing() && activeButton() === "plus"}
              />
              <Button
                type="minus"
                active={editing() && activeButton() === "minus"}
              />
            </View>
            {/* Map Price */}
            <Text style={{ fontSize: 20, fontWeight: "lighter", color: "#000000ff" }}>
              UGX {props.mealPrice}
            </Text>
          </View>
        </View>
      </Column>
    </View>
  );
}

export default CartCard;
