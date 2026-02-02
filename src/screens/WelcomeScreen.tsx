import { View, Text, For } from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";
import { createWelcomeModel} from "@/models/welcomeModel/welcomeData";
import WelcomeController from "@/controllers/welcomeControllers/welcomeConroller";

export default function WelocomeScreen(){

  const model = createWelcomeModel();

  return (
    <View src="./assets/kigo.jpg" width={1920} height={1080}>
      <View
      style={{
        color: "#00000060"
      }}
      />

      <View style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        height:200, 
        gap: 10,
        x: 1600, 
        justifyContent: 'center',
      }}>
        <View src="./assets/serena.svg" style={{
          width: 100,
          height: 100,
          x: 60,
        }}/>
        <Text
        style={{
          fontSize: 30,
          color: "#ffffff",
          
        }}
        >
          SERENA HOTELS
        </Text>
      </View>

      <Column
       style={{
        x: 50,
        y: 300,
        gap:100
      }}
      >
      <WelcomeController />
       <Row style={{
        gap: 60,
        x: 80
       }}>
         <For each={model.apps()}>
          {welcomeData =>(
            <View src={welcomeData}
            style={{
              width: 280,
              height: 180,
              borderRadius: 8
            }}
            />
          )}
        </For>

       </Row>
      </Column>
    </View>
  );
};