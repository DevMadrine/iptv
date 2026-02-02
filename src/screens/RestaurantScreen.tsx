import MenuCard from '../components/restaurantComponents/menuCard'
import { restaurantMenu } from "@/models/restaurantModel/restaurant";
import { For, View } from "@lightningtv/solid";
import { Row } from "@lightningtv/solid/primitives";

const model = restaurantMenu();

export default function RestaurantScreen(){
return(
  <View src="./assets/rest.jpg" 
  style={{
    width: 1920,
    height: 1080,
    resizeMode: "contain",
  }}
  >
    <View
    style={{
      width: 1920,
      height: 1080,
      color: "#00000060",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flexEnd',
      
    }}
    >
  <Row
  autofocus={1}
  scroll='center'
  style={{
    x: 200,              
    y: 500,
    gap: 80,            
    width: 1520,
    height: 300,
    marginBottom: 200
  }}
  >
    <For each={model.menu()}>
    {menuData =>(
      <MenuCard
      name={menuData.name}
      menuImage={menuData.menuImage}
      />
    )}
  </For>
  </Row>
  </View>
</View>
)

}