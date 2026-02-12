import { View, Text, For, ElementNode } from "@lightningtv/solid";
import { Row } from "@lightningtv/solid/primitives";
import { createWelcomeModel } from "@/features/welcome/store/welcomeData";
import WelcomeController from "@/features/welcome/controllers/welcomeConroller";

export default function WelocomeScreen() {
  const model = createWelcomeModel();

  let navRef: ElementNode | undefined;
  let appsRowRef: ElementNode | undefined;

  return (
    <View src="./assets/bg.jpg" width={1920} height={1080}>
      <View
        style={{
          width: 1920,
          height: 1080,
          color: "#00000020",
        }}
      />

      <View style={{ width: 1600, height: 200, x: 60 }}>
        <View style={{ width: 500, y: 80, x: 50 }}>
          <Text style={{ fontSize: 40, fontWeight: "lighter", fontFamily: "Roboto", color: "#ffffff" }}>
            Welcome To Lake Victoria Serena Golf Resort And Spa
          </Text>
          <Text style={{ fontSize: 35, color: "#ffffff", y: 60 }}>Mrs. Madrine</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: 200,
            height: 200,
            gap: 10,
            x: 1360,
            y: 30,
            justifyContent: "center",
          }}
        >
          <View
            src="./assets/serena.svg"
            style={{
              width: 100,
              height: 100,
              x: 60,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              color: "#ffffff",
            }}
          >
            SERENA HOTELS
          </Text>
        </View>
      </View>

      <WelcomeController ref={navRef} onDown={() => appsRowRef?.setFocus()} />

      <Row
        ref={appsRowRef}
        onUp={() => navRef?.setFocus()}
        style={{
          width: 1600,
          height: 150,
          x: 250,
          y: 780,
          gap: 40,
        }}
      >
        <For each={model.apps()}>
          {(welcomeData, index) => (
            <View
              src={welcomeData}
              style={{
                width: 250,
                height: 150,
                borderRadius: 10,
                scale: 1,
                $focus: {
                  scale: 1.15,
                  transition: { alpha: { duration: 150 } },
                },
              }}
            />
          )}
        </For>
      </Row>
    </View>
  );
}
