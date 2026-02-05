import CartCard from "@/components/restaurantComponents/cartCard";
import { addToCart, cartItems, decreaseFromCart, mealModel, removeFromCart, subtotal, tax, total } from "@/utils/restaurantUtils/restaurant-utils";
import { View, Text, For } from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";


export default function CartContainerContainer(){
  
  return(
    <View style={{
      width: 480,
      height: 800,
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap:10
    }}>
     <View 
      style={{
        width:380,
        height:28,
        y: 10
      }}>
        <Text
      style={{
        fontSize: 28,
        fontWeight: "lighter",
        color: "#000000ff",
        lineHeight: 20,
      }}
      >Invoice</Text>
      </View>
      <View
      selected={1}
       style={{
      width: 480,
      height: 500,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap:3,
      // color: "#F58520",
      clipping: true
      }}>
  <For each={cartItems()}>
  {(item, index) => (
    <CartCard
     autofocus ={index() === 0}
      mealImage={item.mealImage}
      mealName={item.mealName}
      mealDescription={item.mealDescription}
      mealPrice={item.mealPrice}
      quantity={item.quantity}
     onIncrease={() => addToCart(item.mealId)}
      onDecrease={() => decreaseFromCart(item.mealId)}
      onRemove={() => removeFromCart(item.mealId)}
    />
  )}
    </For>
    </View>
    <View style={{
      height: 180,
      width: 400,
      color: "#00000018",
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "center",
      gap: 15
    }}>
      <View 
      style={{
        width:380,
        height:20,
        y: 10
      }}>
       <View 
      style={{
        width:380,
        height:20,
        y: 10
      }}>
        <Text
      style={{
        fontSize: 18,
        fontWeight: "lighter",
        color: "#000000ff",
        lineHeight: 20,
      }}
      >Payment Summary</Text>
      </View>
      </View>
      <View style={{
        width: 380,
        height:80,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }}>

       <View style={{display: "flex", flexDirection: "row", gap:200, }}>
        <Text style={{
        fontSize: 16,
        color: "#000000ff",
        }}>Subtotal</Text>
        <Text style={{
          fontSize: 16,
        fontWeight: "lighter",
        color: "#000000ff",
        }}>UGX {subtotal().toLocaleString()}</Text>
       </View>
      <View style={{display: "flex", flexDirection: "row", gap:235, }}>
        <Text style={{
        fontSize: 16,
        color: "#000000ff",
        }}>Tax</Text>
        <Text style={{
          fontSize: 16,
        fontWeight: "lighter",
        color: "#000000ff",
        }}>UGX {tax().toLocaleString()}</Text>
       </View>
       <View style={{width: 380, height: 2, color:"#00000040"}}/>
       <View style={{display: "flex", flexDirection: "row", gap:200, }}>
        <Text style={{
        fontSize: 18,
        fontWeight: "lighter",
        color: "#000000ff",
        }}>Total</Text>
        <Text style={{
          fontSize: 18,
        fontWeight: "lighter",
        color: "#000000ff",
        }}>UGX {total().toLocaleString()}</Text>
       </View>                                                   
      </View>
      
      
       <Row style={{
        width: 380,
        height: 40,
        gap: 50
       }}>
        <View style={{
          width: 150,
          height: 40,
          color: "#F58520",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{fontSize: 20, color: "#ffffff", fontFamily: "Roboto", fontWeight:"lighter"}}>Order</Text>
        </View>

       <View style={{
          width: 150,
          height: 40,
          color: "#F58520",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{fontSize: 20, color: "#ffffff", fontFamily: "Roboto", fontWeight:"lighter"}}>Cancel</Text>
        </View>
       </Row>
    </View>
    </View>
  )
}