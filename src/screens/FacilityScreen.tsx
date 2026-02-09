import ButtonComponent from "@/components/ButtonComponent";
import FacilityCard from "@/components/facilitiesComponents/FacilityCard";
import { facilityModel } from "@/models/facilityModel/facility";
import TvPlayerView from "@/views/tvViews/TvPlayerView";
import type { CommonPlayer } from "#devices/common/player";
import { View, Text, For } from "@lightningtv/solid";
import { Column, Row } from "@lightningtv/solid/primitives";
import { createMemo, createSignal } from "solid-js";

const facility = facilityModel();

export default function FacilityScreen() {
  const [selectedFacilityIndex, setSelectedFacilityIndex] = createSignal(0);
  const [focusedIndex, setFocusedIndex] = createSignal(0);
  const [isPlaying, setIsPlaying] = createSignal(true); 

  let playerRef: CommonPlayer | undefined;

  const activeFacility = createMemo(() => {
    const facilities = facility.facility();
    const index = selectedFacilityIndex(); 
    return facilities[index] || facilities[0];
  });

  const handleCardSelect = (index: number) => {
    setSelectedFacilityIndex(index); 
    setIsPlaying(true);
    console.log("Card selected:", facility.facility()[index].facilityName);
  };

   const handlePlayPause = () => {
    if (playerRef) {
      playerRef.togglePlayPause();
      setIsPlaying(!isPlaying());
    }
  };

  return (
    <View
      src={"./assets/rest.jpg"}
      width={1920}
      height={1080}
    >
      <View
        width={1920}
        height={1080}
        color="#00000060"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Column
        scroll="none"
          width={1920}
          height={1080}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={100}
        >
          
          <View
          forwardFocus={1}
            width={1600}
            height={400}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap={80}
            alignItems="center"
          >

            <View
              width={814}
              height={414}
              borderRadius={15}
              color="#ffffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <TvPlayerView
                url={activeFacility().facilityUrl}
                width={800}
                height={400}
                borderRadius={8}
                overlay
                onPlayerReady={(player) => { playerRef = player; }}
              />
            </View>

            <View
              forwardFocus={2}
              width={500}
              height={400}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap={20}
            >
              <Text
                style={{
                  fontSize: 32,
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                {activeFacility().facilityName}
              </Text>

              <View width={500} height={220}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#ffffffff",
                    contain: "width",
                    maxLines: 8,
                    width: 500,
                    lineHeight: 26,
                    letterSpacing: 0,
                  }}
                >
                  {activeFacility().facilityDescription}
                </Text>
              </View>

              <Row
                width={500}
                height={60}
                gap={80}
              >
                <ButtonComponent
                  width={150}
                  height={50}
                 name={isPlaying() ? "Pause" : "Play"}
                  icon={isPlaying() ? "./assets/pause.svg" : "./assets/play.svg"}
                  onEnter={handlePlayPause}
                />

                <ButtonComponent
                  width={150}
                  height={50}
                  name={"More Info"}
                />
              </Row>
            </View>
          </View>

          <Row
            autofocus
            width={1600}
            height={300}
            gap={100}
            onSelectedChanged={(index) => {
              setFocusedIndex(index);
            }}
          >
            <For each={facility.facility()}>
              {(facilityData, index) => (
                <FacilityCard
                  autofocus={index() === 0}
                  facilityImage={facilityData.facilityImage}
                  facilityName={facilityData.facilityName}
                  isActive={selectedFacilityIndex() === index()} 
                  onEnter={() => handleCardSelect(index())} 
                />
              )}
            </For>
          </Row>
        </Column>
      </View>
    </View>
  );
}