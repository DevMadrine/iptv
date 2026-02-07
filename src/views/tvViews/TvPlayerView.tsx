import { IntrinsicNodeProps, Show, Text } from "@lightningtv/solid";
import { Component, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { CommonPlayer } from "#devices/common/player";

export interface PlayerComponentProps extends IntrinsicNodeProps {
  url: string;
}

const TvPlayerView:Component<PlayerComponentProps> = props => {
  const [error, setError] = createSignal("");
  const [playerReady, setPlayerReady] = createSignal(false);

  let playerInstance: CommonPlayer | undefined;

  onMount(async () => {
    try {
      playerInstance = new CommonPlayer();
      await playerInstance.init();
      setPlayerReady(true);
    } catch (e: any) {
      console.error("Player init error:", e);
      setError(`Init error: ${e.message}`);
    }
  });

  createEffect(async () => {
    if (!playerReady()) return;
    const currentUrl = props.url;
    if (playerInstance && currentUrl) {
      try {
        setError("");
        await playerInstance.load(currentUrl, true);
        console.log("Playing:", currentUrl);
      } catch (e: any) {
        console.error("Load error:", e);
        setError(`Playback error: ${e.message || e.code}`);
      }
    }
  });

  onCleanup(async () => {
    if (playerInstance) await playerInstance.destroy();
  });

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
