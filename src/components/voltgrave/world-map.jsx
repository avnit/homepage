import { districts, world } from "./content";

const WIDTH = 760;
const HEIGHT = 840;
const BOX_WIDTH = 180;
const BOX_PAD = 14;
const NAME_LINE = 26;
const NOTE_LINE = 15;

// Copper rail loop with the oxidized main bus down the middle.
const rails = [
  { x: 160, y: 140, w: 460, h: 3 },
  { x: 160, y: 140, w: 3, h: 560 },
  { x: 160, y: 420, w: 460, h: 3 },
  { x: 620, y: 140, w: 3, h: 560 },
  { x: 160, y: 700, w: 463, h: 3 },
];

function DistrictMarker({ district }) {
  const { x, y, name, note } = district.map;
  const height = BOX_PAD * 2 + name.length * NAME_LINE + 6 + note.length * NOTE_LINE;

  return (
    <g>
      <rect x={x} y={y} width={BOX_WIDTH} height={height} className="fill-vg-ground stroke-vg-glow" strokeWidth="1" />
      {name.map((line, i) => (
        <text
          key={line}
          x={x + BOX_PAD}
          y={y + BOX_PAD + NAME_LINE * (i + 1) - 5}
          className="fill-vg-glow font-vg-display"
          fontSize="26"
        >
          {line}
        </text>
      ))}
      {note.map((line, i) => (
        <text
          key={line}
          x={x + BOX_PAD}
          y={y + BOX_PAD + NAME_LINE * name.length + 6 + NOTE_LINE * (i + 1) - 3}
          className="fill-vg-muted font-vg-sans"
          fontSize="12"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export default function WorldMap() {
  const { centerpiece, legend } = world.map;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label="World map: six districts arranged around the Tesla Cathedral at spawn, joined by copper rail lines"
      className="block h-auto w-full"
    >
      <defs>
        <pattern id="vg-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" className="stroke-vg-grid" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={WIDTH} height={HEIGHT} className="fill-vg-panel" />
      <rect width={WIDTH} height={HEIGHT} fill="url(#vg-map-grid)" />

      {rails.map((rail) => (
        <rect
          key={`${rail.x}-${rail.y}-${rail.w}x${rail.h}`}
          x={rail.x}
          y={rail.y}
          width={rail.w}
          height={rail.h}
          className="fill-vg-copper"
        />
      ))}
      <rect x="390" y="140" width="3" height="560" className="fill-vg-oxide" />

      <g>
        <rect x="300" y="330" width="180" height="180" fill="#1a1410" className="stroke-vg-ember" strokeWidth="2" />
        {centerpiece.name.map((line, i) => (
          <text
            key={line}
            x="390"
            y={395 + i * 30}
            textAnchor="middle"
            className="fill-vg-ember font-vg-display"
            fontSize="30"
          >
            {line}
          </text>
        ))}
        <text x="390" y="455" textAnchor="middle" className="fill-vg-muted font-vg-sans" fontSize="12">
          {centerpiece.note}
        </text>
      </g>

      {districts.map((district) => (
        <DistrictMarker key={district.id} district={district} />
      ))}

      <g className="font-vg-mono" fontSize="12">
        {legend.map((item, i) => {
          const x = i === 0 ? 220 : 560;
          return (
            <g key={item.swatch}>
              <rect
                x={x}
                y="813"
                width="22"
                height="3"
                className={item.swatch === "copper" ? "fill-vg-copper" : "fill-vg-oxide"}
              />
              <text x={x + 30} y="818" className="fill-vg-muted">
                {item.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
