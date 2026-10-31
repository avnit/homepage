import classNames from "classnames";

import { cathedral } from "./content";

const WIDTH = 720;
const HEIGHT = 960;
const LINE = 17.5;

// Coil rings, fresh copper at the top grading to oxidized at the base.
const rings = [
  { x: 300, y: 270, w: 92, fill: "#b87333" },
  { x: 306, y: 316, w: 80, fill: "#a86a35" },
  { x: 296, y: 362, w: 100, fill: "#8f6a3a" },
  { x: 290, y: 408, w: 112, fill: "#6e8f6a" },
  { x: 284, y: 454, w: 124, fill: "#4f8f7a" },
];

const windows = [160, 250, 398, 488];

export default function CathedralElevation() {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="South elevation of the Tesla Cathedral: a gothic nave with a Tesla coil spire, lightning rod on top and a storm pen below"
      className="block h-auto w-full"
    >
      <rect width={WIDTH} height={HEIGHT} className="fill-vg-panel" />
      <text x="20" y="28" className="fill-vg-dim font-vg-mono uppercase" fontSize="12" letterSpacing="1.7">
        {cathedral.elevationLabel}
      </text>

      {/* lightning bolt */}
      <path
        d="M352 42 L336 86 L354 86 L338 148"
        fill="none"
        className="stroke-vg-arc"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* rod, toroid, core */}
      <rect x="344" y="150" width="4" height="50" fill="#d8894b" />
      <rect x="273" y="199" width="146" height="34" rx="17" fill="none" className="stroke-vg-copper" strokeWidth="6" />
      <rect x="330" y="236" width="32" height="300" fill="#3a3f36" />
      {rings.map((ring) => (
        <rect key={ring.y} x={ring.x} y={ring.y} width={ring.w} height="12" fill={ring.fill} />
      ))}

      {/* nave */}
      <polygon points="110,538 582,538 346,500" fill="#262a23" />
      <rect x="111" y="537" width="470" height="278" fill="#1a1d18" stroke="#3a3f36" strokeWidth="2" />
      {windows.map((x) => (
        <path key={x} d={`M${x} 612 a22 22 0 0 1 44 0 V710 H${x} Z`} fill="#2b4a27" />
      ))}
      <path d="M317 816 V721 a29 29 0 0 1 58 0 V816" className="fill-vg-ground stroke-vg-ember" strokeWidth="2" />

      {/* ground and storm pen */}
      <rect x="40" y="816" width="640" height="3" fill="#4a4f45" />
      <rect x="40" y="819" width="640" height="120" fill="#141712" />
      <rect
        x="231"
        y="847"
        width="230"
        height="58"
        fill="none"
        className="stroke-vg-ember"
        strokeWidth="2"
        strokeDasharray="6 4"
      />

      {cathedral.annotations.map((note) => (
        <g key={`${note.tx}-${note.ty}`}>
          <line x1={note.x1} x2={note.x2} y1={note.y} y2={note.y} className="stroke-vg-dim" strokeWidth="1" />
          {note.lines.map((line, i) => (
            <text
              key={line}
              x={note.tx}
              y={note.ty + 13 + i * LINE}
              className={classNames("font-vg-sans", note.accent ? "fill-vg-ember-soft" : "fill-vg-ink-soft")}
              fontSize="13"
            >
              {line}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
