import { View } from "@lightningtv/solid";

export default function RestaurantMealsScreen(){
  return(
    <View
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
        color: "#F58520",
      }}></View>

       <View style={{
        width: 480,
        height: 800,
        color: "#ffffff",
      }}></View>


    </View>
  )
}