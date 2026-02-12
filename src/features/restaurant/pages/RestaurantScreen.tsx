import { restaurantMenu } from "@/features/restaurant/store/restaurant";
import { For, View } from "@lightningtv/solid";
import { Row } from "@lightningtv/solid/primitives";
import { useNavigate } from "@solidjs/router";
import MenuCard from "../components/menuCard";

const model = restaurantMenu();

export default function RestaurantScreen() {
  const navigate = useNavigate();

  return (
    <View
      src="./assets/rest.jpg"
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
          display: "flex",
          justifyContent: "center",
          alignItems: "flexEnd",
        }}
      >
        <Row
          autofocus={1}
          scroll="center"
          style={{
            x: 200,
            y: 500,
            gap: 80,
            width: 1520,
            height: 300,
            marginBottom: 200,
          }}
        >
          <For each={model.menu()}>
            {menuData => (
              <MenuCard
                name={menuData.name}
                menuImage={menuData.menuImage}
                onEnter={() => navigate(`/restaurant-meals/${menuData.name}`)}
              />
            )}
          </For>
        </Row>
      </View>
    </View>
  );
}
