import { IntrinsicNodeProps, Show, Text } from "@lightningtv/solid";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import shaka from "shaka-player";

export interface PlayerComponentProps extends IntrinsicNodeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  zindex: number;
  url: string;
}

const TvPlayerView = (props: PlayerComponentProps) => {
  const [status, setStatus] = createSignal("Initializing...");
  const [error, setError] = createSignal("");

  let video!: HTMLVideoElement;
  let player!: shaka.Player;

  onMount(() => {
    shaka.polyfill.installAll();
    if (!shaka.Player.isBrowserSupported()) {
      setError("Browser not supported");
      return;
    }

    video = document.createElement("video");
    video.style.cssText = `position:absolute; left:${props.x}px; top:${props.y}px; width:${props.width}px; height:${props.height}px; z-index:${props.zindex}; background:black;`;
    video.autoplay = true;
    video.muted = true;

    document.getElementById("video")?.appendChild(video);
    player = new shaka.Player(video);

    player.configure({
      manifest: { retryParameters: { timeout: 30000 } }
    });

    player.addEventListener("error", (event: any) => {
      const e = event.detail as shaka.util.Error;
      console.error("Shaka Error", e.code, e.data);
      setError(`Error ${e.code}: ${e.message}`);
    });
  });

    createEffect(async () => {
    const currentUrl = props.url;
    if (player && currentUrl) {
      try {
        setError(""); // Clear previous errors
        await player.load(currentUrl);
        console.log("Playing:", currentUrl);
      } catch (e: any) {
        // Errors are handled by the event listener
      }
    }
  });

  onCleanup(async () => {
    if (player) await player.destroy();
    video?.remove();
  })

  return (
    <Show when={error()}>
      <Text
        style={{
          fontSize: 30,
          color: "#ff0000",
          contain: "both",
          textAlign: "left",
        }}
      >
        {error()}
      </Text>
    </Show>
  );
};

export default TvPlayerView;
