import { createTvModel } from "@/models/tvModel/tv";
import { LiveTvNavigationView } from "@/views/tvViews/LiveTvNavigationView";
import TvPlayerView from "@/views/tvViews/TvPlayerView";
import { View, Text} from "@lightningtv/solid";
import { createSignal } from "solid-js";

export default function LiveTvScreen(){

const tvModel = createTvModel();
const [selectedChannelIndex, setSelectedChannelIndex] = createSignal(0);
const selectedChannel = () => tvModel.tv()[selectedChannelIndex()];


  return(
    <View
      // src={selectedChannel().channelUrl}
      style={{
        width: 1920,
        height: 1080,
        
      }}
    >
      <TvPlayerView
      url={selectedChannel().channelUrl}
      x={0}
      y={0}
      zindex={0}
      width={1920}
      height={1080}
      />
        <View style={{width: 1920, height: 1080, display: "flex", flexDirection: "row"}}>
    <LiveTvNavigationView
     items={tvModel.tv}
     onSelect={(index) => setSelectedChannelIndex(Number(index))}
     />
   <View style={{
    width: 1620,
    height: 300,
    y: 700,
    display: "flex",
    flexDirection: "column",
    gap:12
   }}>
    <Text style={{
      fontSize: 32,
      color: "#ffffff",
      textAlign: "left",
      letterSpacing: 0,
      fontStyle: "italic",
      fontWeight: "lighter",
     lineHeight: 20, 
    }}>Showing Now:</Text>
    <View style={{
      width: 400,
      height:1,
      color:"#ffffffff"
    }}/>
    <View style={{
      width: 400,
      height:40,
      display: "flex",
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"center",
      gap: 240
    }}>
      <Text style={{
      fontSize: 32,
      color: "#ffffff",
      textAlign: "left",
      letterSpacing: 0,
      fontStyle: "italic",
      fontWeight: "bold",
     lineHeight: 20, 
    }}>{selectedChannel().channelName}</Text>
    <View
    style={{
      width: 80,
      height:25,
      color:"#ffffff",
      borderRadius:5,
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
      alignItems: "center",
      gap: 4
    }}
    >
      <View style={{
        width: 14,
        height:14,
        color: "#F58520",
        borderRadius:9
      }}/>
      <Text style={{color: "#F58520", fontSize:16,fontWeight: "bold"}}>Live</Text>
    </View>
    </View>
   </View>
      </View>
     
     
    
    </View>
  );
}
