import { hasCartItems } from "@/features/restaurant/utils/restaurant-utils";
import { View, Text } from "@lightningtv/solid";
import { Row } from "@lightningtv/solid/primitives";
import { useParams } from "@solidjs/router";
import { createMemo, createSignal, Show } from "solid-js";
import CartContainerView from "@/features/restaurant/views/CartContainerView";
import MealContainerView from "@/features/restaurant/views/MealsContainerView";

export default function RestaurantMealsScreen() {
  const params = useParams();
  const [selectedZone, setSelectedZone] = createSignal(0);

  const CART_WIDTH = 480;
  const GAP = 50;
  const FULL_WIDTH = 1778;

  const mealWidth = createMemo(() => (hasCartItems() ? FULL_WIDTH - CART_WIDTH - GAP : FULL_WIDTH));

  return (
    <View
      src="./assets/rest.jpg"
      style={{
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{params.category}</Text>
      <Row
        scroll="none"
        onSelectedChanged={index => setSelectedZone(index)}
        width={FULL_WIDTH}
        height={800}
        gap={GAP}
        clipping={true}
      >
        <MealContainerView width={mealWidth()} category={params.category} />
        <Show when={hasCartItems()}>
          <CartContainerView />
        </Show>
      </Row>
    </View>
  );
}
