import { View, Text } from "@lightningtv/solid";

export default function SettingsScreen(){
  return(
    <View style={{
      width: 1920,
      height: 1080,
      display: "flex",
      color: "#000000",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gpa: 20
    }}>
      <View
      style={{
        width: 200,
        height: 200
      }}
      src={"./assets/lock.png"}/>
     <View style={{width: 800, height: 300, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
       <Text style={{fontSize: 60}}>Sorry!</Text>
      <Text style={{fontSize: 60}}>This feature is currently locked</Text>
     </View>
    </View>
  )
}