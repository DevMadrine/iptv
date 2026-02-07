import shaka from "shaka-player";
let player;
let videoElement;

export const state = {
playing: false,
ready: false,
};

export async function initPlayer(container?: HTMLElement) {
  if (player) return;

  shaka.polyfill.installAll();
  videoElement = document.createElement("video");
  videoElement.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background: black;
    z-index: 0;
  `;

  videoElement.autoplay = true;
  videoElement.muted = false;
  videoElement.preload = "auto";
  videoElement.playsInline = true;

   const root = document.getElementById("video")!;
      root.appendChild(videoElement);

  player = new shaka.Player();
  await player.attach(videoElement);
  await player.lo
  player.configure({
    streaming: {
      bufferingGoal: 10,
      rebufferingGoal: 3,
      bufferBehind: 30,
      retryParameters: {
        maxAttempts: 10,
        baseDelay: 1000,
        backoffFactor: 1.5,
        fuzzFactor: 0.5,
        timeout: 0
      }
    },

    manifest: {
      retryParameters: {
        maxAttempts: 10,
        baseDelay: 1000,
        backoffFactor: 1.5,
        fuzzFactor: 0.5,
        timeout: 0
      }
    }
  });
 

 player.addEventListener("error", (e) => {
    console.error("Shaka error", e);
  });

  videoElement.addEventListener("error", (e) => {
    console.error("Video Error:", e);
  });

  state.ready = true;
}

export async function loadStream(url: string) {
if (!player || !videoElement) throw new Error("Player not initialized");
await player.load(url);
}


export function play() {
videoElement?.play();
state.playing = true;
}


export function pause() {
videoElement?.pause();
state.playing = false;
}


export function stop() {
if (!videoElement) return;
videoElement.pause();
videoElement.currentTime = 0;
state.playing = false;
}

export async function destroyPlayer() {
if (player) await player.destroy();
player = null;
videoElement?.remove();
videoElement = null;
state.playing = false;
state.ready = false;
}

export function seek(seconds: number) {
if (videoElement) videoElement.currentTime += seconds;
}

export function getTime() {
return videoElement?.currentTime ?? 0;
}

export function getDuration() {
return videoElement?.duration ?? 0;
}