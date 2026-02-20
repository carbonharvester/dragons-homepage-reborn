import { Composition } from "remotion";
import { KapesMirrorTestAd } from "./KapesMirrorTestAd";

export const Root: React.FC = () => {
  return (
    <>
      {/* 16:9 landscape for YouTube / LinkedIn */}
      <Composition
        id="KapesMirrorTestAd"
        component={KapesMirrorTestAd}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "landscape" as const }}
      />

      {/* 9:16 vertical for Instagram Reels / TikTok / Shorts */}
      <Composition
        id="KapesMirrorTestAdVertical"
        component={KapesMirrorTestAd}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "portrait" as const }}
      />
    </>
  );
};
