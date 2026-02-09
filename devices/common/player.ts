import shaka from "shaka-player";

export interface Player {
  isPaused(): boolean;
  getDuration(): number;
  getCurrentPosition(): number;
  play(): void;
  pause(): void;
  stop(): void;
  seek(time: number): void;
}

export interface PlayerOptions {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  borderRadius?: number;
  overlay?: boolean;
}

export class CommonPlayer implements Player {
  private _player: shaka.Player | null = null;
  private _videoElement: HTMLVideoElement;

  constructor(videoElement?: HTMLVideoElement, options?: PlayerOptions) {
    this._videoElement = videoElement || this.createVideoElement(options);
  }

  private static getOverlayContainer(): HTMLElement {
    let container = document.getElementById("video-overlay");
    if (!container) {
      container = document.createElement("div");
      container.id = "video-overlay";
      container.style.position = "fixed";
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "1920px";
      container.style.height = "1080px";
      container.style.transformOrigin = "0 0";
      container.style.zIndex = "20";
      container.style.pointerEvents = "none";
      container.style.overflow = "hidden";

      const canvas = document.querySelector("#app canvas") as HTMLCanvasElement | null;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        container.style.transform = `scale(${rect.width / 1920}, ${rect.height / 1080})`;
      }

      document.body.appendChild(container);
    }
    return container;
  }

  private createVideoElement(options?: PlayerOptions): HTMLVideoElement {
    const video = document.createElement("video");

    video.style.position = "absolute";
    video.style.top = options?.y != null ? `${options.y}px` : "0";
    video.style.left = options?.x != null ? `${options.x}px` : "0";
    video.style.width = options?.width != null ? `${options.width}px` : "100%";
    video.style.height = options?.height != null ? `${options.height}px` : "100%";
    video.style.objectFit = "cover";
    if (options?.borderRadius != null) {
      video.style.borderRadius = `${options.borderRadius}px`;
      video.style.overflow = "hidden";
    }
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    if (options?.overlay) {
      CommonPlayer.getOverlayContainer().appendChild(video);
    } else {
      const container = document.getElementById("video") || document.body;
      container.appendChild(video);
    }
    return video;
  }

  async init(): Promise<void> {
    shaka.polyfill.installAll();
    this._player = new shaka.Player();
    await this._player.attach(this._videoElement);
    this._player.addEventListener("error", (event) => {
      console.error("Shaka Player error:", event);
    });
  }

  async load(streamUrl: string, autoPlay = false, startTime?: number): Promise<void> {
    if (!this._player) throw new Error("Player is not initialized.");

    try {
      await this._player.load(streamUrl, startTime);
      if (autoPlay) {
        await this._videoElement.play();
        this.unmuteOnInteraction();
      }
      console.log("Stream loaded successfully");
    } catch (error) {
      console.error("Failed to load stream:", error);
      throw error;
    }
  }

  isPaused(): boolean {
    return this._videoElement.paused;
  }

  getDuration(): number {
    return this._videoElement.duration;
  }

  getCurrentPosition(): number {
    return this._videoElement.currentTime;
  }

  togglePlayPause(): void {
    if (this._videoElement.paused) this._videoElement.play();
    else this._videoElement.pause();
  }

  play(): void {
    this._videoElement.play();
  }

  stop(): void {
    this._player?.unload();
  }

  pause(): void {
    this._videoElement.pause();
  }

  seek(time: number): void {
    this._videoElement.currentTime += time;
  }

  private _unmuteHandler: (() => void) | null = null;

  private unmuteOnInteraction(): void {
    if (!this._videoElement.muted || this._unmuteHandler) return;
    const unmute = () => {
      this._videoElement.muted = false;
      if (this._videoElement.paused) this._videoElement.play();
      window.removeEventListener("keydown", unmute, true);
      window.removeEventListener("pointerdown", unmute, true);
      this._unmuteHandler = null;
      console.log("Audio unmuted");
    };
    this._unmuteHandler = unmute;
    window.addEventListener("keydown", unmute, { capture: true, once: true });
    window.addEventListener("pointerdown", unmute, { capture: true, once: true });
  }

  async destroy(): Promise<void> {
    if (this._player) {
      await this._player.destroy();
      this._player = null;
    }
    this._videoElement.remove();
  }
}
