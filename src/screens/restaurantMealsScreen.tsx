import MealCard from "@/components/restaurantComponents/mealCard";
import { restaurantMenu } from "@/models/restaurantModel/restaurant";
import { For, View, Text} from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";

export default function RestaurantMealsScreen(){

const mealModel = restaurantMenu();

return(
  <View
 src="./assets/rest.jpg"
  style={{
    width: 1920,
    height: 1080,
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }}
  >
    <View style={{
      width: 1248,
      height: 800,
      // color: "#F58520",
      clipping: true
      
    }}> 
      <Column 
      style={{
        width: 1280,
        height: 800
      }}>
        <For each={Object.entries(mealModel.meal())}>
          {([categoryName,meals], rowIndex) =>(
            <View style={{width: 1280, height:200, display: 'flex', flexDirection: "column", gap:10}}>
              <Text style={{fontSize: 24, fontWeight: 'lighter'}}>{categoryName}</Text>
        <Row 
        style={{
        width: 1248,
        height: 160,
      }}>
        <For each = {meals}>
          {(mealData, itemIndex) => (
            <MealCard
               autofocus={rowIndex() === 0 && itemIndex() === 0}
                mealImage={mealData.mealImage}
                quantity={mealData.quantity}
                mealName={mealData.mealName}
                mealDescription={mealData.mealDescription}
                mealPrice={mealData.mealPrice}
              />
          )}
        </For>
      </Row>
      </View>
          )}
        </For>
      </Column>
    </View>
      <View style={{
      width: 480,
      height: 800,
      color: "#ffffff",
    }}></View>
  </View>
)
}