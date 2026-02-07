import MealCard from "@/components/restaurantComponents/mealCard";
import { addToCart, decreaseFromCart, mealModel } from "@/utils/restaurantUtils/restaurant-utils";
import { For, View, Text, IntrinsicNodeProps} from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";

interface Props extends IntrinsicNodeProps {
  width: number;
}

export default function MealContainerController(props:Props){
 
  return(
      <View style={{
          width: props.width,
          height: 800,
          clipping: true
        }}> 
          <Column 
          style={{
            width: props.width,
            height: 800
          }}>
            <For each={Object.entries(mealModel.meal())}>
              {([categoryName, meals], rowIndex) => (
                <View 
                  forwardFocus={1} 
                  style={{
                    width: props.width, 
                    height: 200, 
                    display: 'flex', 
                    flexDirection: "column", 
                    gap: 10
                  }}
                >
                  <Text style={{fontSize: 24, fontWeight: 'lighter'}}>
                    {categoryName}
                  </Text>
                  
                  <Row 
                    scroll="always"
                    style={{
                      width: props.width,
                      height: 160,
                      clipping: true  
                    }}
                  >
                    <For each={meals}>
                      {(mealData, itemIndex) => (
                        <MealCard
                          autofocus={rowIndex() === 0 && itemIndex() === 0}
                          mealImage={mealData.mealImage}
                          quantity={mealData.quantity}
                          mealName={mealData.mealName}
                          mealDescription={mealData.mealDescription}
                          mealPrice={mealData.mealPrice}
                          onIncrease={() => addToCart(mealData.mealId)}
                          onDecrease={() => decreaseFromCart(mealData.mealId)}
                        />
                      )}
                    </For>
                  </Row>
                </View>
              )}
            </For>
          </Column>
        </View>
  )
}