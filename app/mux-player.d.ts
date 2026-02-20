import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        "playback-id"?: string;
        "stream-type"?: "on-demand" | "live";
        autoplay?: boolean;
        muted?: boolean;
        loop?: boolean;
        playsinline?: boolean;
        preload?: string;
        poster?: string;
      };
    }
  }
}
