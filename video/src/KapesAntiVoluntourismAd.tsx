import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  Audio,
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
/*  "Your students don't need to save Kenya."                          */
/* ------------------------------------------------------------------ */
const SceneHook: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Progress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 18, mass: 0.8 },
  });
  const line1Opacity = interpolate(frame, [5, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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
            fontFamily: FONT_FAMILY,
            textAlign: "center",
            maxWidth: orientation === "portrait" ? 900 : 1400,
          }}
        >
          <div
            style={{
              color: WHITE,
              fontSize: rs(64, orientation),
              fontWeight: 700,
              lineHeight: 1.25,
              opacity: line1Opacity,
              transform: `translateY(${interpolate(line1Progress, [0, 1], [40, 0])}px)`,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            Your students don&rsquo;t need
            <br />
            to save Kenya.
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 2 — The Reframe (4-8s)                                      */
/*  "Kenya has something to teach them."                               */
/* ------------------------------------------------------------------ */
const SceneReframe: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 16, mass: 0.7 },
  });
  const opacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineWidth = interpolate(frame, [50, 80], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025thur_klein-20.jpg"
        durationInFrames={120}
        startScale={1.05}
        endScale={1.18}
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
            fontFamily: FONT_FAMILY,
            textAlign: "center",
            maxWidth: orientation === "portrait" ? 900 : 1400,
          }}
        >
          <div
            style={{
              color: KAPES_ORANGE,
              fontSize: rs(68, orientation),
              fontWeight: 700,
              lineHeight: 1.25,
              opacity,
              transform: `translateY(${interpolate(textProgress, [0, 1], [30, 0])}px)`,
              display: "inline-block",
              textShadow: "0 4px 30px rgba(0,0,0,0.6)",
            }}
          >
            Kenya has something
            <br />
            to teach them.
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
/*  Scene 3 — The Problem (8-14s)                                     */
/* ------------------------------------------------------------------ */
const voluntourismProblems = [
  { text: "$173B voluntourism industry", sub: "built for visitors" },
  { text: "70% of revenue leaves communities", sub: "every single trip" },
  { text: "Projects stop when the bus leaves", sub: "because they were never for the community" },
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
        src="farming/Kapeskenya025thur_klein-9.jpg"
        durationInFrames={180}
        startScale={1.0}
        endScale={1.1}
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
            {voluntourismProblems.map((item, i) => {
              const delay = 20 + i * 35;
              const progress = spring({
                frame: frame - delay,
                fps,
                config: { damping: 16, mass: 0.7 },
              });
              const itemOpacity = interpolate(frame - delay, [0, 20], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });

              return (
                <div
                  key={i}
                  style={{
                    opacity: itemOpacity,
                    transform: `translateX(${interpolate(progress, [0, 1], [60, 0])}px)`,
                    borderLeft: `4px solid ${KAPES_ORANGE}`,
                    paddingLeft: 24,
                  }}
                >
                  <div
                    style={{
                      color: WHITE,
                      fontSize: rs(40, orientation),
                      fontWeight: 700,
                      lineHeight: 1.3,
                      textShadow: "0 2px 15px rgba(0,0,0,0.4)",
                    }}
                  >
                    {item.text}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: rs(24, orientation),
                      fontWeight: 400,
                      marginTop: 6,
                    }}
                  >
                    {item.sub}
                  </div>
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
/*  Scene 4 — The Pivot (14-18s)                                      */
/*  "We built something different."                                    */
/* ------------------------------------------------------------------ */
const ScenePivot: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, mass: 0.6 },
  });
  const headOpacity = interpolate(frame, [5, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025wed_klein-36.jpg"
        durationInFrames={120}
        startScale={1.0}
        endScale={1.12}
        overlayOpacity={0.55}
        overlayColor="rgba(255,119,0,"
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
            fontFamily: FONT_FAMILY,
            textAlign: "center",
            maxWidth: orientation === "portrait" ? 900 : 1200,
          }}
        >
          <div
            style={{
              color: WHITE,
              fontSize: rs(64, orientation),
              fontWeight: 700,
              lineHeight: 1.2,
              opacity: headOpacity,
              transform: `scale(${interpolate(headProgress, [0, 1], [0.85, 1])})`,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            We built something different.
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: rs(32, orientation),
              fontWeight: 500,
              marginTop: 30,
              opacity: subOpacity,
              lineHeight: 1.5,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Year-round programs. Kenyan-led.
            <br />
            Your students join work that&rsquo;s already happening.
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain intensity={0.04} />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 5 — The Proof (18-24s)                                      */
/* ------------------------------------------------------------------ */
const proofStats = [
  { number: "200+", label: "children fed daily" },
  { number: "365", label: "days a year our programs run" },
  { number: "100%", label: "Kenyan-led partners" },
];

const SceneProof: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025wed_klein-49.jpg"
        durationInFrames={180}
        startScale={1.05}
        endScale={1.15}
        overlayOpacity={0.75}
        overlayColor="rgba(26,26,26,"
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: orientation === "portrait" ? 60 : 100,
        }}
      >
        <div
          style={{
            fontFamily: FONT_FAMILY,
            textAlign: "center",
            width: "100%",
            maxWidth: orientation === "portrait" ? 900 : 1400,
          }}
        >
          <div
            style={{
              color: WHITE,
              fontSize: rs(48, orientation),
              fontWeight: 700,
              opacity: headerOpacity,
              marginBottom: 60,
              lineHeight: 1.3,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            The impact doesn&rsquo;t start when
            <br />
            your students arrive.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: orientation === "portrait" ? "column" : "row",
              gap: orientation === "portrait" ? 32 : 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {proofStats.map((stat, i) => {
              const delay = 30 + i * 25;
              const scaleProgress = spring({
                frame: frame - delay,
                fps,
                config: { damping: 14, mass: 0.6 },
              });

              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(26,26,26,0.85)",
                    backdropFilter: "blur(8px)",
                    borderRadius: 20,
                    border: "1px solid rgba(255,119,0,0.3)",
                    padding: orientation === "portrait" ? "28px 44px" : "36px 48px",
                    transform: `scale(${scaleProgress})`,
                    textAlign: "center",
                    minWidth: orientation === "portrait" ? 340 : 320,
                  }}
                >
                  <div
                    style={{
                      color: KAPES_ORANGE,
                      fontSize: rs(56, orientation),
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      color: WHITE,
                      fontSize: rs(22, orientation),
                      fontWeight: 500,
                      marginTop: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              color: KAPES_CREAM,
              fontSize: rs(28, orientation),
              fontWeight: 500,
              marginTop: 50,
              opacity: interpolate(frame, [100, 120], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              textShadow: "0 2px 15px rgba(0,0,0,0.5)",
            }}
          >
            And it doesn&rsquo;t stop when they leave.
          </div>
        </div>
      </AbsoluteFill>
      <FilmGrain />
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 6 — CTA (24-30s)                                            */
/* ------------------------------------------------------------------ */
const SceneCTA: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ctaScale = spring({
    frame: frame - 40,
    fps,
    config: { damping: 12, mass: 0.5 },
  });

  const urlOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = spring({
    frame: frame - 80,
    fps,
    config: { damping: 18, mass: 0.7 },
  });

  const pulse = interpolate(
    Math.sin(((frame - 50) / fps) * Math.PI * 1.5),
    [-1, 1],
    [0.96, 1.04]
  );

  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="farming/Kapeskenya025wed_klein-51.jpg"
        durationInFrames={180}
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
            Communities need partners.
            <br />
            Not tourists.
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
            See How Trips Work
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
            kapesadventures.com/school-trips
          </div>

          <div
            style={{
              opacity: logoOpacity,
              transform: `scale(${logoScale})`,
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
export const KapesAntiVoluntourismAd: React.FC<AdProps> = ({ orientation }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Background music */}
      <Audio
        src={staticFile("music/bg-track.mp3")}
        volume={(f) => {
          const fadeIn = interpolate(f, [0, 30], [0, 0.55], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const fadeOut = interpolate(f, [840, 900], [0.55, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return Math.min(fadeIn, fadeOut);
        }}
        name="Background Music"
      />

      <TransitionSeries>
        {/* Scene 1: Hook — 0-4s */}
        <TransitionSeries.Sequence durationInFrames={120} name="Hook">
          <SceneHook orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade({ shouldFadeOutExitingScene: true })}
          timing={linearTiming({ durationInFrames: 20 })}
        />

        {/* Scene 2: Reframe — 4-8s */}
        <TransitionSeries.Sequence durationInFrames={120} name="Reframe">
          <SceneReframe orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 25 })}
        />

        {/* Scene 3: Problem — 8-14s */}
        <TransitionSeries.Sequence durationInFrames={180} name="Problem">
          <SceneProblem orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade({ shouldFadeOutExitingScene: true })}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        {/* Scene 4: Pivot — 14-18s */}
        <TransitionSeries.Sequence durationInFrames={120} name="Pivot">
          <ScenePivot orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 20, mass: 1 } })}
        />

        {/* Scene 5: Proof — 18-24s */}
        <TransitionSeries.Sequence durationInFrames={180} name="Proof">
          <SceneProof orientation={orientation} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom-left" })}
          timing={linearTiming({ durationInFrames: 25 })}
        />

        {/* Scene 6: CTA — 24-30s */}
        <TransitionSeries.Sequence durationInFrames={180} name="CTA">
          <SceneCTA orientation={orientation} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
