import { View, IntrinsicNodeProps, Show, Text, type ElementNode } from "@lightningtv/solid";
import { Component, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { CommonPlayer } from "#devices/common/player";

export interface PlayerComponentProps extends IntrinsicNodeProps {
  url: string;
  overlay?: boolean;
  onPlayerReady?: (player: CommonPlayer) => void;
}

const TvPlayerView:Component<PlayerComponentProps> = props => {
  const [error, setError] = createSignal("");
  const [playerReady, setPlayerReady] = createSignal(false);

  let playerInstance: CommonPlayer | undefined;
  let nodeRef: ElementNode | undefined;

  onMount(() => {
    // Wait for Lightning layout to fully compute absolute positions
    setTimeout(async () => {
      try {
        const absX = nodeRef?.lng?.absX ?? 0;
        const absY = nodeRef?.lng?.absY ?? 0;
        console.log("TvPlayerView position:", { absX, absY });

        playerInstance = new CommonPlayer(undefined, {
          width: props.width as number,
          height: props.height as number,
          x: absX,
          y: absY,
          borderRadius: props.borderRadius as number,
          overlay: props.overlay,
        });
        await playerInstance.init();
        setPlayerReady(true);
        props.onPlayerReady?.(playerInstance);
      } catch (e: any) {
        console.error("Player init error:", e);
        setError(`Init error: ${e.message}`);
      }
    }, 100);
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
    <View ref={nodeRef} width={props.width} height={props.height} borderRadius={props.borderRadius} border={props.border}>
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
    </View>
  );
};

export default TvPlayerView;
