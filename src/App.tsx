import { useNavigate } from "@solidjs/router";
import { View, ElementNode, renderer } from "@lightningtv/solid";
import { FPSCounter, setupFPS, useAnnouncer, useFocusManager, useMouse } from "@lightningtv/solid/primitives";
import { onMount, onCleanup } from "solid-js";

declare global {
  interface Window {
    APP: ElementNode;
  }
}

const App = props => {
  const navigator = useNavigate();
  const defaultKeyMap = {
    ArrowLeft: "Left",
    ArrowRight: "Right",
    ArrowUp: "Up",
    ArrowDown: "Down",
    Enter: "Enter",
  };

  function handleKey(value: {
    code: string;
    keyCode: number;
    stopPropagation: () => void;
    preventDefault: () => void;
  }) {
    console.log("[App] Key handler:", value);
    if (value.code === "Escape" || value.keyCode === 10009) {
      navigator(-1);
      value.stopPropagation();
      value.preventDefault();
      return true;
    }
    if (
      value.code === "ArrowUp" ||
      value.code === "ArrowDown" ||
      value.code === "ArrowLeft" ||
      value.code === "ArrowRight"
    ) {
      return false;
    }
    return false;
  }

  // Listen for postMessage events from Tizen parent iframe
  onMount(() => {
    const handlePostMessage = (event: MessageEvent) => {
      console.log("[App] PostMessage received:", event.data);

      if (event.data.type === "tizen-keydown") {
        // Create a synthetic keyboard event
        const syntheticEvent = new KeyboardEvent("keydown", {
          code: event.data.code,
          key: event.data.key,
          keyCode: event.data.keyCode,
          bubbles: true,
          cancelable: true,
        });

        console.log("[App] Dispatching synthetic keydown:", syntheticEvent);
        document.dispatchEvent(syntheticEvent);
      } else if (event.data.type === "tizen-video-ended") {
        // Dispatch custom event for video ended
        const videoEndedEvent = new CustomEvent("tizen-video-ended");
        window.dispatchEvent(videoEndedEvent);
      }
    };

    window.addEventListener("message", handlePostMessage);

    onCleanup(() => {
      window.removeEventListener("message", handlePostMessage);
    });
  });

  useFocusManager(defaultKeyMap);
  useMouse();
  const announcer = useAnnouncer();
  announcer.debug = false;
  announcer.enabled = false;

  setupFPS({ renderer });

  return (
    <View
      onKeyPress={handleKey}
      ref={window.APP}
      style={{
        width: 1920,
        height: 1080,
        clip: true,
        x: 0,
        y: 0,
      }}
    >
      {/* <FPSCounter mountX={1} x={1910} y={10} /> */}
      {props.children}
    </View>
  );
};

export default App;
