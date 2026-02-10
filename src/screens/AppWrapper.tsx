import { renderer, View } from "@lightningtv/solid";
import { useAnnouncer, useMouse, setupFPS } from "@lightningtv/solid/primitives";
import { useNavigate } from "@solidjs/router";

export default function AppWrapper(props) {
  const navigate = useNavigate();
  const announcer = useAnnouncer();
  announcer.debug = false;
  announcer.enabled = false;

  useMouse();
  setupFPS({ renderer });

  return (
    <View
      ref={window.APP as any}
      style={{ width: 1920, height: 1080, color: "transparent" }}
      onAnnouncer={() => (announcer.enabled = !announcer.enabled)}
      onLast={() => history.back()}
      onMenu={() => navigate("/")}
      onBack={() => navigate(-1)}
    >
      {props.children}
    </View>
  );
}
