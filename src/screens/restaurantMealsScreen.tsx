import CartCard from "@/components/restaurantComponents/cartCard";
import CartContainerContainer from "@/controllers/restaurantControllers/CartContainerController";
import MealContainerController from "@/controllers/restaurantControllers/MealsContainerController";
import { cartItems, hasCartItems } from "@/utils/restaurantUtils/restaurant-utils";
import { For, View, Text} from "@lightningtv/solid";
import { Column, Row, Visible } from "@lightningtv/solid/primitives";
import { createEffect, createMemo, createSignal } from "solid-js";


export default function RestaurantMealsScreen(){
  const [selectedZone, setSelectedZone] = createSignal(0);

  const [mealWidth, setMealWidth] = createSignal(1778);

createEffect(() => {
    const hasItems = hasCartItems();
    const newWidth = hasItems ? 1248 : 1778;
    console.log('hasCartItems:', hasItems, 'mealWidth:', newWidth);
    setMealWidth(newWidth);
  });



return(
  <View 
  src="./assets/rest.jpg"
  style={{
    width: 1920,
    height: 1080,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    }}>
    <Row
 
  onSelectedChanged={(index) => setSelectedZone(index)}
  style={{
   width: hasCartItems() ? 1248 + 480 + 50 : 1778,
    height: 800,
    display: 'flex',
    gap: 50,
    justifyContent: 'center',
    alignItems: 'center',
    clipping: true
  }}
  >
   <MealContainerController
    width={mealWidth()}
   />
   <Visible when={cartItems().length>0}>
    <CartContainerContainer/>
   </Visible>
   
  </Row>
  </View>
  
)
}


 