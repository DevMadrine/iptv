import ButtonComponent from "@/shared/components/ButtonComponent";
import CartCard from "@/features/restaurant/components/cartCard";
import {
  addToCart,
  cartItems,
  decreaseFromCart,
  removeFromCart,
  subtotal,
  tax,
  total,
} from "@/features/restaurant/utils/restaurant-utils";
import { View, Text, For } from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";

export default function CartContainerView() {
  return (
    <View
      width={480}
      height={800}
      color="#ffffff"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={10}
      clipping={true}
    >
      {/* Invoice Header */}
      <View width={380} height={28} y={10} skipFocus>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#000000ff",
            lineHeight: 20,
          }}
        >
          Invoice
        </Text>
      </View>

      {/* Main Content Column - manages vertical navigation */}
      <Column
        autofocus
        width={480}
        height={680}
        gap={20}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Cart Items Section */}
        <View forwardFocus={0} width={480} height={500} clipping={true}>
          <Column
            scroll="always"
            width={480}
            height={500}
            gap={3}
            justifyContent="flexStart"
            alignItems="center"
          >
            <For each={cartItems()}>
              {(item, index) => (
                <CartCard
                  autofocus={index() === 0}
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
          </Column>
        </View>

        {/* Payment Summary + Buttons Section */}
        <View
          width={400}
          height={180}
          color="#00000018"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={15}
        >
          {/* Payment Summary Header */}
          <View width={380} height={20} skipFocus>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: "#000000ff",
                lineHeight: 20,
              }}
            >
              Payment Summary
            </Text>
          </View>

          {/* Payment Details */}
          <View width={380} height={80} display="flex" flexDirection="column" gap={8} skipFocus>
            <View display="flex" flexDirection="row" gap={200}>
              <Text style={{ fontSize: 16, color: "#000000ff" }}>Subtotal</Text>
              <Text style={{ fontSize: 16, fontWeight: 400, color: "#000000ff" }}>
                UGX {subtotal().toLocaleString()}
              </Text>
            </View>

            <View display="flex" flexDirection="row" gap={235}>
              <Text style={{ fontSize: 16, color: "#000000ff" }}>Tax</Text>
              <Text style={{ fontSize: 16, fontWeight: 400, color: "#000000ff" }}>
                UGX {tax().toLocaleString()}
              </Text>
            </View>

            <View width={380} height={2} color="#00000040" />

            <View display="flex" flexDirection="row" gap={200}>
              <Text style={{ fontSize: 18, fontWeight: 400, color: "#000000ff" }}>Total</Text>
              <Text style={{ fontSize: 18, fontWeight: 400, color: "#000000ff" }}>
                UGX {total().toLocaleString()}
              </Text>
            </View>
          </View>

          {/* Action Buttons Row */}
          <Row width={380} height={50} gap={50}>
            <ButtonComponent
              autofocus
              width={150}
              height={50}
              name="Order"
              onEnter={() => {
                console.log("Order placed!");
                // Add your order logic here
              }}
            />

            <ButtonComponent
              width={150}
              height={50}
              name="Cancel"
              onEnter={() => {
                console.log("Order cancelled");
                // Add your cancel logic here
              }}
            />
          </Row>
        </View>
      </Column>
    </View>
  );
}
