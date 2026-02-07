import { createSignal } from "solid-js";

export function createTvModel() {
 
  const [tv] = createSignal([
    { channelIcon: './assets/breakfast.jpg', channelNumber: '001', channelName: 'Hotel', 
      channelUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"},
    { channelIcon: './assets/breakfast.jpg', channelNumber: '002', channelName: 'UBC',
       channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '003', channelName: 'NBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '004', channelName: 'WBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
     { channelIcon: './assets/breakfast.jpg', channelNumber:'005', channelName: 'Hotel', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '006', channelName: 'UBC', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '007', channelName: 'NBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '008', channelName: 'WBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '001', channelName: 'Hotel', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '002', channelName: 'UBC', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '003', channelName: 'NBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '004', channelName: 'WBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
     { channelIcon: './assets/breakfast.jpg', channelNumber:'005', channelName: 'Hotel', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '006', channelName: 'UBC', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '007', channelName: 'NBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
    { channelIcon: './assets/breakfast.jpg', channelNumber: '008', channelName: 'WBS', 
      channelUrl: "https://feed.hydeinnovations.com/tayari_tv/index.m3u8" },
  ]);

  return {
    tv,
  };
}