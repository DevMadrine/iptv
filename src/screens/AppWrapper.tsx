import NavMenu from "@/components/navigation/NavMenu";
import { useNavFocus } from "@/hooks/useNavFocus";
import { renderer, View, ElementNode } from "@lightningtv/solid";
import { useAnnouncer, useMouse, setupFPS } from "@lightningtv/solid/primitives";
import { useNavigate } from "@solidjs/router";


export default function AppWrapper(props) {
  const navigate = useNavigate();
  const announcer = useAnnouncer();
  announcer.debug = false;
  announcer.enabled = false;

  useMouse();
  setupFPS({ renderer });

  let navMenu: ElementNode | undefined;
  let pageContainer: ElementNode | undefined;

  const { focusNavMenu, restoreFocus, shouldRestoreFromNav } = useNavFocus(
    () => navMenu,
    () => pageContainer,
  );

  return (
    <View
      ref={window.APP as any}
      style={{ width: 1920, height: 1080, color: "transparent" }}
      onAnnouncer={() => (announcer.enabled = !announcer.enabled)}
      onLast={() => history.back()}
      onMenu={() => navigate("/")}
      onBack={() => navigate(-1)}
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
