import { createTvModel } from "@/features/tv/store/tv";
import { LiveTvNavigationView } from "@/features/tv/views/LiveTvNavigationView";
import PlayerView from "@/shared/views/PlayerView";
import { View, Text } from "@lightningtv/solid";
import { createSignal, onCleanup } from "solid-js";

export default function LiveTvScreen() {
  const tvModel = createTvModel();
  const [selectedChannelIndex, setSelectedChannelIndex] = createSignal(0);
  const selectedChannel = () => tvModel.tv()[selectedChannelIndex()];

  const [showOverlay, setShowOverlay] = createSignal(true);
  let hideTimer: ReturnType<typeof setTimeout>;

  function resetHideTimer() {
    clearTimeout(hideTimer);
    setShowOverlay(true);
    hideTimer = setTimeout(() => setShowOverlay(false), 5000);
  }

  // Start the initial timer
  resetHideTimer();
  onCleanup(() => clearTimeout(hideTimer));

  const [dotVisible, setDotVisible] = createSignal(true);
  const pulseInterval = setInterval(() => setDotVisible(v => !v), 800);
  onCleanup(() => clearInterval(pulseInterval));

  return (
    <View
      // src={selectedChannel().channelUrl}
      style={{
        width: 1920,
        height: 1080,
      }}
    >
      <PlayerView url={selectedChannel().channelUrl} />
      <View
        style={{
          width: 1920,
          height: 1080,
          color: "#03030360",
        }}
      />
      <View
        style={{ width: 1920, height: 1080, display: "flex", flexDirection: "row" }}
        alpha={showOverlay() ? 1 : 0}
      >
        <LiveTvNavigationView
          items={tvModel.tv}
          onSelect={index => {
            setSelectedChannelIndex(Number(index));
            resetHideTimer();
          }}
        />
        <View
          style={{
            width: 1620,
            height: 300,
            y: 700,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              color: "#ffffff",
              textAlign: "left",
              letterSpacing: 0,
              fontStyle: "italic",
              fontWeight: "lighter",
              lineHeight: 20,
            }}
          >
            Showing Now:
          </Text>
          <View
            style={{
              width: 400,
              height: 1,
              color: "#ffffffff",
            }}
          />
          <View
            style={{
              width: 400,
              height: 40,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 240,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                color: "#ffffff",
                textAlign: "left",
                letterSpacing: 0,
                fontStyle: "italic",
                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {selectedChannel().channelName}
            </Text>
            <View
              style={{
                width: 80,
                height: 25,
                color: "#ffffff",
                borderRadius: 5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <View
                alpha={dotVisible() ? 1 : 0.2}
                transition={{ alpha: { duration: 600, easing: "ease-in-out" } }}
                style={{
                  width: 14,
                  height: 14,
                  color: "#FF0000",
                  borderRadius: 9,
                }}
              />
              <Text style={{ color: "#FF0000", fontSize: 16, fontWeight: "bold" }}>Live</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
