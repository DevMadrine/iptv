import { View, Text, IntrinsicNodeProps } from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import Button from "./button";
import { Component, createSignal } from "solid-js";

interface CartCardProps extends IntrinsicNodeProps {
  mealImage: string;
  mealName: string;
  mealDescription: string;
  mealPrice: string;
  quantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const CartCard:Component<CartCardProps> = props => {
  const [isEditing, setIsEditing] = createSignal(false);
  const [isFocused, setIsFocused] = createSignal(false);
  const [localActiveButton, setLocalActiveButton] = createSignal<"plus" | "minus" | null>(null);

  function pulseButton(type: "plus" | "minus") {
    setLocalActiveButton(null);
    setTimeout(() => setLocalActiveButton(type), 50);
  }

  return (
    <View
      focusable
      autofocus={props.autofocus}
      border={isFocused() ? { width: 2, color: "#F58520" } : undefined}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsEditing(false);
        setLocalActiveButton(null);
        setIsFocused(false);
      }}
      onEnter={(e) => {
        setIsEditing(!isEditing());
        setLocalActiveButton(isEditing() ? "plus" : null);
        e.stopPropagation();
      }}
      onBack={() => {
        setIsEditing(false);
        setLocalActiveButton(null);
      }}
      onLeft={(e) => {
        if (isEditing()) {
          e.stopPropagation();
          pulseButton("minus");
          props.onDecrease?.();
          return true;
        }
      }}
      onRight={(e) => {
        if (isEditing()) {
          e.stopPropagation();
          pulseButton("plus");
          props.onIncrease?.();
          return true;
        }
      }}
      onUp={(e) => {
        if (isEditing()) {
          e.stopPropagation();
        }
      }}
      onDown={(e) => {
        if (isEditing()) {
          e.stopPropagation();
        }
      }}
      style={{
        width: 400,
        height: 130,
        borderRadius: 10,
        scale: 1,
        alpha: 1,
        transition: { scale: { duration: 150, easing: "ease-out" } },
        $focus: { scale: 1.03 },
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
          <View src={props.mealImage} style={{ width: 90, height: 80, borderRadius: 10 }} />

          <View style={{ width: 150, height: 80, display: "flex", flexDirection: "column", gap: 2 }}>
            <Text style={{ fontSize: 16, fontWeight: "lighter", color: "#000000ff" }}>
              {props.mealName}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F58520" }}>
              {String(props.quantity)}X
            </Text>

            <View style={{ width: 150, height: 40 }}>
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

          <View style={{ width: 100, height: 80, display: "flex", flexDirection: "column", gap: 28 }}>
            <View style={{ width: 80, height: 35, display: "flex", flexDirection: "row", gap: 18

             }}>
              <Button
                type="plus"
                active={isEditing() && localActiveButton() === "plus"}
              />
              <Button
                type="minus"
                active={isEditing() && localActiveButton() === "minus"}
              />
            </View>
            <Text style={{ fontSize: 16, fontWeight: "lighter", color: "#000000ff", contain: "width", overflowSuffix: "...", wordWrap: 80 }}>
              UGX {(Number(props.mealPrice) * props.quantity).toLocaleString()}
            </Text>
          </View>
        </View>
      </Column>
    </View>
  );
}

export default CartCard;
