import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

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

/** Responsive font-size helper — sizes are for 1920-wide; scale for portrait */
const rs = (px: number, orientation: Orientation) =>
  orientation === "portrait" ? Math.round(px * 0.75) : px;

/* ------------------------------------------------------------------ */
/*  Scene 1 — The Hook  (frames 0-120, 0-4 s)                         */
/* ------------------------------------------------------------------ */
const SceneHook: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textProgress = spring({ frame: frame - 15, fps, config: { damping: 18, mass: 0.8 } });
  const textOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        opacity: bgOpacity,
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
        }}
      >
        Your students come home saying{" "}
        <span style={{ fontStyle: "italic" }}>it was life-changing.</span>
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 2 — The Pause  (frames 120-210, 4-7 s)                      */
/* ------------------------------------------------------------------ */
const ScenePause: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textProgress = spring({ frame: frame - 20, fps, config: { damping: 18, mass: 0.8 } });
  const opacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: orientation === "portrait" ? 60 : 120,
      }}
    >
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
        }}
      >
        But did it change anything
        <br />
        for the community?
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 3 — The Stat  (frames 210-330, 7-11 s)                      */
/* ------------------------------------------------------------------ */
const SceneStat: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scale-in background
  const scaleIn = spring({ frame, fps, config: { damping: 20, mass: 0.6 } });

  // Number counts from 0 to 70
  const countEnd = 70;
  const count = Math.round(
    interpolate(frame, [20, 90], [0, countEnd], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const labelOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: KAPES_CHARCOAL,
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(${scaleIn})`,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: KAPES_ORANGE,
            fontSize: rs(160, orientation),
            fontWeight: 800,
            lineHeight: 1,
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
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 4 — The Problem  (frames 330-480, 11-16 s)                   */
/* ------------------------------------------------------------------ */
const problemLines = [
  "Projects built for visitors",
  "Impact that stops when the bus leaves",
  "No transparency on where money goes",
];

const SceneProblem: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: KAPES_CHARCOAL,
        justifyContent: "center",
        alignItems: orientation === "portrait" ? "flex-start" : "center",
        padding: orientation === "portrait" ? 60 : 120,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: rs(36, orientation),
          width: "100%",
          maxWidth: orientation === "portrait" ? undefined : 1200,
        }}
      >
        {problemLines.map((line, i) => {
          const delay = i * 30; // stagger by ~1 second each
          const progress = spring({
            frame: frame - delay - 10,
            fps,
            config: { damping: 16, mass: 0.7 },
          });
          const opacity = interpolate(frame - delay, [5, 25], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: rs(44, orientation),
                fontWeight: 600,
                color: WHITE,
                opacity,
                transform: `translateX(${interpolate(progress, [0, 1], [80, 0])}px)`,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <span>{line}</span>
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
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 5 — The Solution  (frames 480-660, 16-22 s)                  */
/* ------------------------------------------------------------------ */
const stats = [
  "200+ children fed daily",
  "72% of revenue stays in Kenya",
  "365 days a year",
];

const SceneSolution: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background wipe from charcoal to orange
  const bgProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const headlineOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
  });

  const subOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: interpolateColor(bgProgress, KAPES_CHARCOAL, KAPES_ORANGE),
        justifyContent: "center",
        alignItems: "center",
        padding: orientation === "portrait" ? 60 : 100,
      }}
    >
      <div style={{ textAlign: "center", fontFamily: FONT_FAMILY }}>
        {/* Headline */}
        <div
          style={{
            color: WHITE,
            fontSize: rs(56, orientation),
            fontWeight: 700,
            opacity: headlineOpacity,
            marginBottom: 20,
          }}
        >
          There&rsquo;s a different model.
        </div>

        {/* Sub-headline */}
        <div
          style={{
            color: WHITE,
            fontSize: rs(32, orientation),
            fontWeight: 500,
            opacity: subOpacity,
            marginBottom: 60,
            lineHeight: 1.5,
          }}
        >
          Year-round programs. Community-led.
          <br />
          Fully transparent.
        </div>

        {/* Stats */}
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
                  backgroundColor: "rgba(0,0,0,0.2)",
                  borderRadius: 16,
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
  );
};

/* ------------------------------------------------------------------ */
/*  Scene 6 — CTA  (frames 660-900, 22-30 s)                          */
/* ------------------------------------------------------------------ */
const SceneCTA: React.FC<{ orientation: Orientation }> = ({ orientation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateRight: "clamp",
  });

  const ctaOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
  });

  const urlOpacity = interpolate(frame, [65, 80], [0, 1], {
    extrapolateRight: "clamp",
  });

  const logoOpacity = interpolate(frame, [80, 100], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Subtle pulse on the CTA text
  const pulse = interpolate(
    Math.sin(((frame - 60) / fps) * Math.PI * 1.5),
    [-1, 1],
    [0.95, 1.05]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: KAPES_CHARCOAL,
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
          gap: 30,
        }}
      >
        {/* Headline */}
        <div
          style={{
            color: WHITE,
            fontSize: rs(52, orientation),
            fontWeight: 700,
            opacity: headlineOpacity,
            lineHeight: 1.3,
            maxWidth: orientation === "portrait" ? 800 : 1100,
          }}
        >
          Is your school trip
          <br />
          actually ethical?
        </div>

        {/* CTA */}
        <div
          style={{
            color: KAPES_ORANGE,
            fontSize: rs(40, orientation),
            fontWeight: 700,
            opacity: ctaOpacity,
            transform: frame > 60 ? `scale(${pulse})` : "scale(1)",
            marginTop: 10,
          }}
        >
          Take the free 5-minute assessment
        </div>

        {/* URL */}
        <div
          style={{
            color: KAPES_CREAM,
            fontSize: rs(30, orientation),
            fontWeight: 500,
            opacity: urlOpacity,
            letterSpacing: 1,
            marginTop: 10,
            padding: "14px 36px",
            border: `2px solid ${KAPES_ORANGE}`,
            borderRadius: 12,
          }}
        >
          kapesadventures.com/scorecard
        </div>

        {/* Logo text */}
        <div
          style={{
            color: WHITE,
            fontSize: rs(22, orientation),
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: logoOpacity,
            marginTop: 40,
          }}
        >
          Kapes Adventures
        </div>

        {/* Orange accent bar */}
        <div
          style={{
            width: 60,
            height: 4,
            backgroundColor: KAPES_ORANGE,
            borderRadius: 2,
            opacity: logoOpacity,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/*  Color interpolation helper (simple RGB lerp)                       */
/* ------------------------------------------------------------------ */
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
/*  Main Composition                                                   */
/* ------------------------------------------------------------------ */
export const KapesMirrorTestAd: React.FC<AdProps> = ({ orientation }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Scene 1: The Hook — 0-4s (frames 0-120) */}
      <Sequence from={0} durationInFrames={120}>
        <SceneHook orientation={orientation} />
      </Sequence>

      {/* Scene 2: The Pause — 4-7s (frames 120-210) */}
      <Sequence from={120} durationInFrames={90}>
        <ScenePause orientation={orientation} />
      </Sequence>

      {/* Scene 3: The Stat — 7-11s (frames 210-330) */}
      <Sequence from={210} durationInFrames={120}>
        <SceneStat orientation={orientation} />
      </Sequence>

      {/* Scene 4: The Problem — 11-16s (frames 330-480) */}
      <Sequence from={330} durationInFrames={150}>
        <SceneProblem orientation={orientation} />
      </Sequence>

      {/* Scene 5: The Solution — 16-22s (frames 480-660) */}
      <Sequence from={480} durationInFrames={180}>
        <SceneSolution orientation={orientation} />
      </Sequence>

      {/* Scene 6: CTA — 22-30s (frames 660-900) */}
      <Sequence from={660} durationInFrames={240}>
        <SceneCTA orientation={orientation} />
      </Sequence>
    </AbsoluteFill>
  );
};
