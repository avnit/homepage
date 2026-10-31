import Board, { BoardHeader, Eyebrow, SectionLabel, Stat } from "components/voltgrave/board";
import CathedralElevation from "components/voltgrave/cathedral-elevation";
import CircuitCard from "components/voltgrave/circuit-card";
import { cathedral, districts, mechanics, world, zones } from "components/voltgrave/content";
import DistrictCard from "components/voltgrave/district-card";
import WorldMap from "components/voltgrave/world-map";
import Head from "next/head";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=VT323&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";

function WorldOverview() {
  return (
    <Board id="overview">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-14">
        <div className="flex flex-col gap-7">
          <Eyebrow>{world.eyebrow}</Eyebrow>
          <h1 className="m-0 font-vg-display text-[112px] font-normal leading-[0.82] tracking-[0.01em] text-vg-glow-bright sm:text-[168px]">
            {world.title[0]}
            <br />
            {world.title[1]}
          </h1>
          <p className="m-0 text-[22px] leading-[1.45] text-vg-ink">{world.lede}</p>
          <p className="m-0 text-base leading-relaxed text-vg-muted">{world.twist}</p>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {world.stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} size="lg" />
            ))}
          </div>
          <div className="mt-auto font-vg-mono text-[13px] leading-relaxed text-vg-dim">
            {world.server[0]}
            <br />
            {world.server[1]}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 font-vg-mono text-[13px] sm:flex-row sm:items-baseline sm:justify-between">
            <div className="uppercase tracking-[0.16em] text-vg-muted">{world.map.label}</div>
            <div className="text-vg-dim">{world.map.scale}</div>
          </div>
          <div className="border border-vg-line">
            <WorldMap />
          </div>
        </div>
      </div>
    </Board>
  );
}

function Districts() {
  return (
    <Board id="districts">
      <div className="flex flex-col gap-8">
        <BoardHeader eyebrow={zones.eyebrow} title={zones.title} intro={zones.intro} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {districts.map((district) => (
            <DistrictCard key={district.id} district={district} />
          ))}
        </div>
      </div>
    </Board>
  );
}

function Cathedral() {
  return (
    <Board id="cathedral">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-4">
          <Eyebrow>{cathedral.eyebrow}</Eyebrow>
          <h2 className="m-0 font-vg-display text-[56px] font-normal leading-[0.9] text-vg-glow sm:text-[84px]">
            {cathedral.title}
          </h2>
          <div className="border border-vg-line">
            <CathedralElevation />
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:pt-2">
          <p className="m-0 text-lg leading-[1.55]">{cathedral.lede}</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {cathedral.stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <SectionLabel>Material palette</SectionLabel>
            <dl className="m-0 grid grid-cols-1 gap-x-6 gap-y-2 text-sm leading-[1.45] text-vg-ink-soft sm:grid-cols-2">
              {cathedral.materials.map((material) => (
                <div key={material.block} className="flex gap-1.5">
                  <dt className="font-vg-mono text-vg-ink">{material.block}</dt>
                  <dd className="m-0">{material.role}</dd>
                </div>
              ))}
            </dl>
            <div className="text-[13px] leading-normal text-vg-muted">{cathedral.materialsNote}</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <SectionLabel>The storm ritual</SectionLabel>
            <ol className="m-0 flex list-decimal flex-col gap-2 pl-[22px] text-[15px] leading-normal text-vg-ink">
              {cathedral.ritual.map((step) => (
                <li key={step.text}>
                  {step.text}
                  {step.strong && <strong className="font-semibold text-vg-arc">{step.strong}</strong>}
                  {step.tail}
                </li>
              ))}
            </ol>
            <div className="text-[13px] leading-normal text-vg-muted">{cathedral.ritualNote}</div>
          </div>
        </div>
      </div>
    </Board>
  );
}

function Mechanics() {
  const { nightMode, buildOrder } = mechanics;

  return (
    <Board id="mechanics">
      <div className="flex flex-col gap-7">
        <BoardHeader eyebrow={mechanics.eyebrow} title={mechanics.title} intro={mechanics.intro} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mechanics.circuits.map((circuit) => (
            <CircuitCard key={circuit.name} circuit={circuit} />
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-3.5 border border-vg-line bg-vg-panel-deep p-6">
            <SectionLabel>{nightMode.title}</SectionLabel>
            <pre className="m-0 overflow-x-auto whitespace-pre font-vg-mono text-[15px] leading-[1.75] text-vg-lime-soft">
              {nightMode.commands.join("\n")}
            </pre>
            <div className="text-[13px] leading-normal text-vg-muted">{nightMode.note}</div>
          </div>
          <div className="flex flex-col gap-3.5 border border-vg-line bg-vg-panel p-6">
            <SectionLabel>{buildOrder.title}</SectionLabel>
            <ol className="m-0 flex list-decimal flex-col gap-2 pl-[22px] text-[15px] leading-[1.45] text-vg-ink">
              {buildOrder.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Board>
  );
}

export default function Voltgrave() {
  return (
    <>
      <Head>
        <title>Voltgrave — Halloween Electro World Concept</title>
        <meta
          name="description"
          content="Voltgrave: a Minecraft Java Halloween world concept built on a dead power grid."
        />
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
      </Head>
      <main className="min-h-screen bg-vg-ground font-vg-sans text-vg-ink antialiased">
        <WorldOverview />
        <Districts />
        <Cathedral />
        <Mechanics />
      </main>
    </>
  );
}
