import MealCard from "@/features/restaurant/components/mealCard";
import { addToCart, decreaseFromCart, mealModel } from "@/features/restaurant/utils/restaurant-utils";
import { For, View, Text, IntrinsicNodeProps } from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";
import { createMemo, Show } from "solid-js";

interface Props extends IntrinsicNodeProps {
  width: number;
  category?: string;
}

export default function MealContainerView(props: Props) {
  const filteredMeals = createMemo(() => {
    const allMenus = mealModel.meal();
    if (!props.category) {
      return Object.values(allMenus).flatMap(menu => Object.entries(menu));
    }
    const menuMeals = allMenus[props.category];
    if (!menuMeals) return [];
    return Object.entries(menuMeals);
  });

  return (
    <View forwardFocus={0} width={props.width} height={800} clipping={true}>
      <Column scroll="always" width={props.width} height={800}>
        <For each={filteredMeals()}>
          {([categoryName, meals], rowIndex) => (
            <View
              forwardFocus={1}
              width={props.width}
              height={200}
              display="flex"
              flexDirection="column"
              gap={10}
            >
              <Text style={{ fontSize: 24, fontWeight: "lighter" }}>{categoryName}</Text>

              <Show when={props.width} keyed>
                {w => (
                  <Row scroll="always" width={w} height={160} clipping={true}>
                    <For each={meals}>
                      {(mealData, itemIndex) => (
                        <MealCard
                          autofocus={rowIndex() === 0 && itemIndex() === 0}
                          mealId={mealData.mealId}
                          mealImage={mealData.mealImage}
                          mealName={mealData.mealName}
                          mealDescription={mealData.mealDescription}
                          mealPrice={mealData.mealPrice}
                          onIncrease={() => addToCart(mealData.mealId)}
                          onDecrease={() => decreaseFromCart(mealData.mealId)}
                        />
                      )}
                    </For>
                  </Row>
                )}
              </Show>
            </View>
          )}
        </For>
      </Column>
    </View>
  );
}
