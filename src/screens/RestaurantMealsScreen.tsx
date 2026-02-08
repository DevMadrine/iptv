import CartContainerContainer from "@/controllers/restaurantControllers/CartContainerController";
import MealContainerController from "@/controllers/restaurantControllers/MealsContainerController";
import { hasCartItems } from "@/utils/restaurantUtils/restaurant-utils";
import { View, Text } from "@lightningtv/solid";
import { Row } from "@lightningtv/solid/primitives";
import { useParams } from "@solidjs/router";
import { createMemo, createSignal, Show } from "solid-js";


export default function RestaurantMealsScreen(){
  const params = useParams();
  const [selectedZone, setSelectedZone] = createSignal(0);

  const CART_WIDTH = 480;
  const GAP = 50;
  const FULL_WIDTH = 1778;
  
  const mealWidth = createMemo(() => 
    hasCartItems() ? FULL_WIDTH - CART_WIDTH - GAP : FULL_WIDTH
  );

  return(
    <View 
      src="./assets/rest.jpg"
      style={{
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>{params.category}</Text>
      <Row
        scroll="none"
        onSelectedChanged={(index) => setSelectedZone(index)}
        width={FULL_WIDTH}  // Pass as JSX prop, not in style
        height={800}
        gap={GAP}
        clipping={true}
      >
        <MealContainerController
          width={mealWidth()}  // This is reactive now!
          category={params.category}
        />
        <Show when={hasCartItems()}>
          <CartContainerContainer/>
        </Show>
      </Row>
    </View>
  )
}