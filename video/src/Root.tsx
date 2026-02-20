import { Composition } from "remotion";
import { KapesMirrorTestAd } from "./KapesMirrorTestAd";
import { KapesAntiVoluntourismAd } from "./KapesAntiVoluntourismAd";

export const Root: React.FC = () => {
  return (
    <>
      {/* ── Mirror Test Ad (Angle 3) ────────────────────────────── */}
      <Composition
        id="KapesMirrorTestAd"
        component={KapesMirrorTestAd as React.FC}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "landscape" as const }}
      />
      <Composition
        id="KapesMirrorTestAdVertical"
        component={KapesMirrorTestAd as React.FC}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "portrait" as const }}
      />

      {/* ── Anti-Voluntourism Ad (Angle 1) ──────────────────────── */}
      <Composition
        id="KapesAntiVoluntourismAd"
        component={KapesAntiVoluntourismAd as React.FC}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ orientation: "landscape" as const }}
      />
      <Composition
        id="KapesAntiVoluntourismAdVertical"
        component={KapesAntiVoluntourismAd as React.FC}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ orientation: "portrait" as const }}
      />
    </>
  );
};
