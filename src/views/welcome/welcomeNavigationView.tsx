import { View, For, Text} from "@lightningtv/solid";
import NavButton from "../../components/welcomeScreenComponents/NavButton";
import { Column } from "@lightningtv/solid/primitives";

type Props = {
  items: () => Array<{
    icon: string;
    label: string;
    route: string;
  }>;
  onSelect: (route: string) => void;
};

export function WelcomeNavigationView(props: Props) {
return (
  <View
style={{
  width: 250,
  height: 350,
  color: "#00000080",
  borderRadius:5,
}}
>
  <Column style={{y: 40}} autofocus={1}>
  <For each={props.items()}>
    {item =>(
   <NavButton
   icon={item.icon}
   label={item.label}
   />
    )}
  </For>
  </Column>
</View>
)};