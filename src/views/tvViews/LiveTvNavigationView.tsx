import { View, For} from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import LiveTvMenu from "@/components/tvComponents/LiveTvMenu";

type Props = {
  items: () => Array<{
    channelIcon: string;
    channelNumber: string;
  }>; 
onSelect: (index: number) => void;
};

export function LiveTvNavigationView(props: Props) {

return (
  <View
style={{
  width: 250,
  height: 500,
  x: 20,
  y: 520,
  borderRadius:5,
   clipping: true
}}
>
  <Column
  autofocus={true} 
  scrollIndex={0}
  scroll={"always"}
  loop={true}
   style={{
    width: 250,
    height: 420,
    display: "flex", 
    justifyContent: "flexStart",
    alignItems: "center",
    gap:10,
  }} >
  <For each={props.items()}>
    {(item, index) =>(
   <LiveTvMenu
   channelIcon={item.channelIcon}
   channelNumber={item.channelNumber}
   onFocus={() => props.onSelect(index())}
   />
    )}
  </For>
  </Column>
</View>
)};