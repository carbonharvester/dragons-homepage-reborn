import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { noise2D } from "@remotion/noise";

/* ------------------------------------------------------------------ */
/*  Brand constants                                                    */
/* ------------------------------------------------------------------ */
const KAPES_ORANGE = "#FF7700";
const KAPES_CHARCOAL = "#1A1A1A";
const KAPES_CREAM = "#FAFAF8";
const WHITE = "#FFFFFF";

const FONT_FAMILY =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */
type Orientation = "landscape" | "portrait";

interface AdProps {
  orientation: Orientation;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const rs = (px: number, orientation: Orientation) =>
  orientation === "portrait" ? Math.round(px * 0.75) : px;

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function interpolateColor(t: number, from: string, to: string): string {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r},${g},${bl})`;
}

/* ------------------------------------------------------------------ */
/*  Ken Burns background image                                         */
/* ------------------------------------------------------------------ */
const KenBurnsImage: React.FC<{
  src: string;
  durationInFrames: number;
  startScale?: number;
  endScale?: number;
  overlayOpacity?: number;
  overlayColor?: string;
}> = ({
  src,
  durationInFrames,
  startScale = 1.0,
  endScale = 1.15,
  overlayOpacity = 0.6,
  overlayColor = "rgba(0,0,0,",
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, durationInFrames], [startScale, endScale], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${scale})`,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: `${overlayColor}${overlayOpacity})` }} />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Film grain overlay                                                 */
/* ------------------------------------------------------------------ */
const FilmGrain: React.FC<{ intensity?: number }> = ({ intensity = 0.06 }) => {
  const frame = useCurrentFrame();
  const grainOpacity = intensity + noise2D("grain", frame * 0.3, 0) * 0.02;

  return (
    <AbsoluteFill
      style={{
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: grainOpacity,
        mixBlendMode: "overlay",
        pointerEvents: "none",
      }}
    />
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 1 — The Hook (0-4s)                                         */
/* ------------------------------------------------------------------ */
const SceneHook: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textProgress = spring({ frame: frame - 15, fps, config: { damping: 18, mass: 0.8 } });
  const textOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025wed_klein-22.jpg"
        durationInFrames={120}
        overlayOpacity={0.6}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: orientation === "portrait" ? 60 : 120,
        }}
      >
        <div
          style={{
            color: WHITE,
            fontFamily: FONT_FAMILY,
            fontSize: rs(64, orientation),
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.3,
            opacity: textOpacity,
            transform: `translateY(${interpolate(textProgress, [0, 1], [40, 0])}px)`,
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
          }}
        >
          Your students come home saying{" "}
          <span style={{ fontStyle: "italic", color: KAPES_CREAM }}>
            it was life-changing.
          </span>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 2 — The Pause (4-7s)                                        */
/* ------------------------------------------------------------------ */
const ScenePause: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textProgress = spring({ frame: frame - 20, fps, config: { damping: 18, mass: 0.8 } });
  const opacity = interpolate(frame, [10, 40], [0, 1], { extrapolateRight: "clamp" });

  const lineWidth = interpolate(frame, [50, 75], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025thur_klein-9.jpg"
        durationInFrames={90}
        startScale={1.05}
        endScale={1.15}
        overlayOpacity={0.7}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: orientation === "portrait" ? 60 : 120,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              color: KAPES_ORANGE,
              fontFamily: FONT_FAMILY,
              fontSize: rs(60, orientation),
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.3,
              opacity,
              transform: `translateY(${interpolate(textProgress, [0, 1], [30, 0])}px)`,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            But did it change anything
            <br />
            for the community?
          </div>
          <div
            style={{
              width: `${lineWidth}%`,
              height: 5,
              backgroundColor: KAPES_ORANGE,
              borderRadius: 3,
              margin: "24px auto 0",
              boxShadow: "0 0 20px rgba(255,119,0,0.5)",
            }}
          />
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 3 — The Stat (7-11s)                                        */
/* ------------------------------------------------------------------ */
const SceneStat: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleIn = spring({ frame, fps, config: { damping: 20, mass: 0.6 } });
  const countEnd = 70;
  const count = Math.round(
    interpolate(frame, [20, 90], [0, countEnd], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const labelOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025thur_klein-20.jpg"
        durationInFrames={120}
        overlayOpacity={0.8}
        overlayColor="rgba(26,26,26,"
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${scaleIn})`,
        }}
      >
        <div style={{ fontFamily: FONT_FAMILY, textAlign: "center" }}>
          <div
            style={{
              color: KAPES_ORANGE,
              fontSize: rs(160, orientation),
              fontWeight: 800,
              lineHeight: 1,
              textShadow: "0 0 40px rgba(255,119,0,0.3)",
            }}
          >
            {count}%
          </div>
          <div
            style={{
              color: WHITE,
              fontSize: rs(36, orientation),
              fontWeight: 500,
              marginTop: 24,
              opacity: labelOpacity,
              maxWidth: orientation === "portrait" ? 700 : 900,
              lineHeight: 1.4,
            }}
          >
            of tourism revenue never reaches
            <br />
            local communities
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 4 — The Problem (11-16s)                                     */
/* ------------------------------------------------------------------ */
const problemLines = [
  "Projects built for visitors",
  "Impact that stops when the bus leaves",
  "No transparency on where money goes",
];

const SceneProblem: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025thur_klein-35.jpg"
        durationInFrames={150}
        overlayOpacity={0.78}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: orientation === "portrait" ? "flex-start" : "center",
          padding: orientation === "portrait" ? 60 : 100,
        }}
      >
        <div
          style={{
            fontFamily: FONT_FAMILY,
            maxWidth: orientation === "portrait" ? undefined : 1300,
            width: "100%",
          }}
        >
          <div
            style={{
              color: KAPES_ORANGE,
              fontSize: rs(20, orientation),
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase" as const,
              opacity: headerOpacity,
              marginBottom: 40,
            }}
          >
            The voluntourism problem
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: rs(28, orientation) }}>
            {problemLines.map((line, i) => {
              const delay = 20 + i * 30;
              const progress = spring({
                frame: frame - delay,
                fps,
                config: { damping: 16, mass: 0.7 },
              });
              const opacity = interpolate(frame - delay, [0, 20], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  key={i}
                  style={{
                    fontFamily: FONT_FAMILY,
                    opacity,
                    transform: `translateX(${interpolate(progress, [0, 1], [60, 0])}px)`,
                    borderLeft: `4px solid ${KAPES_ORANGE}`,
                    paddingLeft: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <span
                    style={{
                      fontSize: rs(44, orientation),
                      fontWeight: 600,
                      color: WHITE,
                      textShadow: "0 2px 15px rgba(0,0,0,0.4)",
                    }}
                  >
                    {line}
                  </span>
                  <span
                    style={{
                      color: "#EF4444",
                      fontSize: rs(48, orientation),
                      fontWeight: 700,
                    }}
                  >
                    &times;
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 5 — The Solution (16-22s)                                    */
/* ------------------------------------------------------------------ */
const stats = [
  "200+ children fed daily",
  "72% of revenue stays in Kenya",
  "365 days a year",
];

const SceneSolution: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgProgress = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const headlineOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });
  const subOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025wed_klein-36.jpg"
        durationInFrames={180}
        startScale={1.0}
        endScale={1.12}
        overlayOpacity={0.55}
        overlayColor="rgba(255,119,0,"
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: orientation === "portrait" ? 60 : 100,
        }}
      >
        <div style={{ textAlign: "center", fontFamily: FONT_FAMILY }}>
          <div
            style={{
              color: WHITE,
              fontSize: rs(56, orientation),
              fontWeight: 700,
              opacity: headlineOpacity,
              marginBottom: 20,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            There&rsquo;s a different model.
          </div>
          <div
            style={{
              color: WHITE,
              fontSize: rs(32, orientation),
              fontWeight: 500,
              opacity: subOpacity,
              marginBottom: 60,
              lineHeight: 1.5,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Year-round programs. Community-led.
            <br />
            Fully transparent.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: orientation === "portrait" ? "column" : "row",
              gap: orientation === "portrait" ? 28 : 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {stats.map((stat, i) => {
              const delay = 70 + i * 20;
              const scaleProgress = spring({
                frame: frame - delay,
                fps,
                config: { damping: 14, mass: 0.6 },
              });

              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: orientation === "portrait" ? "20px 36px" : "24px 40px",
                    color: WHITE,
                    fontFamily: FONT_FAMILY,
                    fontSize: rs(28, orientation),
                    fontWeight: 600,
                    transform: `scale(${scaleProgress})`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {stat}
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain intensity={0.04} />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 6 — CTA (22-30s)                                            */
/* ------------------------------------------------------------------ */
const SceneCTA: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [10, 35], [0, 1], { extrapolateRight: "clamp" });

  const ctaScale = spring({
    frame: frame - 40,
    fps,
    config: { damping: 12, mass: 0.5 },
  });

  const urlOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" });

  const pulse = interpolate(
    Math.sin(((frame - 60) / fps) * Math.PI * 1.5),
    [-1, 1],
    [0.96, 1.04]
  );

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025wed_klein-51.jpg"
        durationInFrames={240}
        startScale={1.0}
        endScale={1.08}
        overlayOpacity={0.72}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: orientation === "portrait" ? 60 : 120,
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: FONT_FAMILY,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              color: WHITE,
              fontSize: rs(52, orientation),
              fontWeight: 700,
              opacity: headlineOpacity,
              lineHeight: 1.3,
              maxWidth: orientation === "portrait" ? 800 : 1100,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            Is your school trip
            <br />
            actually ethical?
          </div>

          <div
            style={{
              backgroundColor: KAPES_ORANGE,
              color: WHITE,
              fontSize: rs(36, orientation),
              fontWeight: 700,
              padding: "18px 48px",
              borderRadius: 14,
              transform: `scale(${frame > 50 ? pulse * ctaScale : ctaScale})`,
              marginTop: 10,
              boxShadow: "0 8px 30px rgba(255,119,0,0.4)",
            }}
          >
            Take the free 5-minute assessment
          </div>

          <div
            style={{
              color: KAPES_CREAM,
              fontSize: rs(28, orientation),
              fontWeight: 500,
              opacity: urlOpacity,
              letterSpacing: 1,
              marginTop: 4,
              textShadow: "0 2px 15px rgba(0,0,0,0.5)",
            }}
          >
            kapesadventures.com/scorecard
          </div>

          <div
            style={{
              opacity: logoOpacity,
              marginTop: 24,
            }}
          >
            <Img
              src={staticFile("kapes-logo.png")}
              style={{
                height: rs(48, orientation),
                width: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>

          <div
            style={{
              width: 60,
              height: 4,
              backgroundColor: KAPES_ORANGE,
              borderRadius: 2,
              opacity: logoOpacity,
              boxShadow: "0 0 15px rgba(255,119,0,0.4)",
            }}
          />
        </div>
      </AbsoluteFill>
      <FilmGrain intensity={0.04} />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Composition — uses TransitionSeries for smooth scene changes  */
/* ------------------------------------------------------------------ */
export const KapesMirrorTestAd: React.FC<AdProps> = ({ orientation }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      <TransitionSeries>
        {/* Scene 1: The Hook — 0-4s */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <SceneHook orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade({ shouldFadeOutExitingScene: true })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 2: The Pause — 4-7s */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <ScenePause orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 25 })}
        />

        {/* Scene 3: The Stat — 7-11s */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <SceneStat orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 20, mass: 1 } })}
        />

        {/* Scene 4: The Problem — 11-16s */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <SceneProblem orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade({ shouldFadeOutExitingScene: true })}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 5: The Solution — 16-22s */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <SceneSolution orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom-left" })}
          timing={linearTiming({ durationInFrames: 25 })}
        />

        {/* Scene 6: CTA — 22-30s */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <SceneCTA orientation={orientation} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
