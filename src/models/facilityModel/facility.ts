import { createSignal } from "solid-js";

export function facilityModel(){
  
  const [facility]  = createSignal([
   {
    facilityId: "1",
    facilityName: "Sports",
    facilityImage: "./assets/breakfast.jpg",
    facilityDescription:
     "Experience live sports coverage from around the world. Watch your favorite teams compete in real-time with high-quality streaming. From football to basketball, tennis to cricket - we've got all your sports needs covered. Stay updated with the latest scores,highlights, and exclusive sports content.",
    facilityUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8"
  },

  {
    facilityId: "2",
    facilityName: "Golf",
    facilityImage: "./assets/breakfast.jpg",
    facilityDescription: "Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out",
    facilityUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },

  {
    facilityId: "2",
    facilityName: "Spa",
    facilityImage: "./assets/breakfast.jpg",
    facilityDescription: "Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out",
    facilityUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8"
  },

  {
    facilityId: "4",
    facilityName: "Swimming",
    facilityImage: "./assets/breakfast.jpg",
    facilityDescription: "Delicious beef lasagne with double chilli. Served with a cold coke or juice. You should not miss out",
    facilityUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  }
  ]);

  return {
    facility,
  }

}