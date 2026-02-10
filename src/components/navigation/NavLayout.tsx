import NavMenu from "@/components/navigation/NavMenu";
import { useNavFocus } from "@/hooks/useNavFocus";
import { View, ElementNode } from "@lightningtv/solid";

export default function NavLayout(props) {
  let navMenu: ElementNode | undefined;
  let pageContainer: ElementNode | undefined;

  const { focusNavMenu, restoreFocus, shouldRestoreFromNav } = useNavFocus(
    () => navMenu,
    () => pageContainer,
  );

  return (
    <View
      onBackspace={focusNavMenu}
      onLeft={focusNavMenu}
      onRight={() => {
        if (shouldRestoreFromNav()) {
          restoreFocus();
        }
      }}
    >
      <View ref={pageContainer}>{props.children}</View>
      <NavMenu
        ref={navMenu as any}
        focusPage={() => {
          restoreFocus();
        }}
      />
    </View>
  );
}
