import Button from "./button";
import { IntrinsicNodeProps, View, Text, NodeStyles, TextStyles } from "@lightningtv/solid";
import { Component, createSignal } from "solid-js";

interface MealCardProps extends IntrinsicNodeProps {
  mealId: string;
  mealImage: string;
  mealName: string;
  mealDescription: string;
  mealPrice: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const mealCardStyles: NodeStyles | undefined = {
  width: 360,
  height: 160,
  borderRadius: 10,
  color: "#00000060",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  $focus: {
    transition: { scale: { duration: 150, easing: "ease-out" } },
  },
  $unfocus: { alpha: 0.85 },
};

const descriptionStyles: TextStyles | undefined = {
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
};

const mealNameStyles: TextStyles | undefined = {
  color: "#ffffff",
  fontSize: 24,
  fontWeight: "lighter",
  fontStyle: "italic",
  letterSpacing: 1,
};

const MealCard: Component<MealCardProps> = props => {
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
      border={isFocused() ? { width: 2, color: "#ffffff" } : undefined}
      onFocus={() => setIsFocused(true)}
      onEnter={e => {
        setIsEditing(!isEditing());
        setLocalActiveButton(isEditing() ? "plus" : null);
        e.stopPropagation();
      }}
      onBack={() => {
        setIsEditing(false);
        setLocalActiveButton(null);
      }}
      onBlur={() => {
        setIsEditing(false);
        setLocalActiveButton(null);
        setIsFocused(false);
      }}
      onLeft={e => {
        if (isEditing()) {
          e.stopPropagation();
          pulseButton("minus");
          props.onDecrease();
          return true;
        }
      }}
      onRight={e => {
        if (isEditing()) {
          e.stopPropagation();
          pulseButton("plus");
          props.onIncrease();
          return true;
        }
      }}
      onUp={e => {
        if (isEditing()) {
          e.stopPropagation();
        }
      }}
      onDown={e => {
        if (isEditing()) {
          e.stopPropagation();
        }
      }}
      style={mealCardStyles}
    >
      <View
        style={{
          width: 150,
          height: 150,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <View
          src={props.mealImage}
          style={{
            width: 150,
            height: 90,
            borderRadius: 6,
            color: "#ffffff",
          }}
        />

        <View
          style={{
            width: 150,
            height: 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              width: 100,
              display: "flex",
              flexDirection: "row",
              gap: 20,
              height: 40,
            }}
          >
            <Button type="plus" active={isEditing() && localActiveButton() === "plus"} />
            <Button type="minus" active={isEditing() && localActiveButton() === "minus"} />
          </View>
        </View>
      </View>

      <View
        style={{
          width: 180,
          height: 140,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Text style={mealNameStyles}>{props.mealName}</Text>
        <View
          style={{
            width: 180,
            height: 60,
          }}
        >
          <Text style={descriptionStyles}>{props.mealDescription}</Text>
        </View>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Ugx {props.mealPrice}</Text>
      </View>
    </View>
  );
};
export default MealCard;
