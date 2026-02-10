import { View, For, ElementNode } from "@lightningtv/solid";
import { Column } from "@lightningtv/solid/primitives";
import NavigationButton from "../../components/welcomeScreenComponents/Navigation";

type Props = {
  ref?: ElementNode | ((el: ElementNode) => void);
  items: () => Array<{
    icon: string;
    label: string;
    route: string;
  }>;
  onSelect: (route: string) => void;
  onDown?: () => void;
};

export function WelcomeNavigationView(props: Props) {
  return (
    <View
    style={{
    x:130,
    y:320,
    width:250,
    height:330,
     linearGradient: {
        colors: [0xEF5E2C4D, 0xFFFFFF20],
        angle: 90 / 360 * Math.PI,
      },
    borderRadius:10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    }}

    >
      <Column
        ref={props.ref}
        autofocus
        width={260}
        height={360}
        gap={8}
        display="flex"
        alignItems="center"
        justifyContent="center"
        onDown={props.onDown}
      >
        <For each={props.items()}>
          {(item, index) => (
            <NavigationButton
              autofocus={index() === 0}
              icon={item.icon}
              label={item.label}
              onEnter={() => props.onSelect(item.route)}
            />
          )}
        </For>
      </Column>
    </View>
  );
}