import classNames from "classnames";

import { SectionLabel } from "./board";

export default function DistrictCard({ district }) {
  const { final } = district;
  const body = final ? "text-vg-ink-warm" : "text-vg-ink-soft";

  return (
    <article
      id={district.id}
      className={classNames(
        "flex flex-col gap-3.5 border p-6",
        final ? "border-vg-ember bg-vg-panel-warm" : "border-vg-line bg-vg-panel",
      )}
    >
      <div
        className={classNames(
          "font-vg-mono text-xs uppercase tracking-[0.14em]",
          final ? "text-vg-ember" : "text-vg-dim",
        )}
      >
        {district.index} · {district.compass} · {district.difficulty}
      </div>
      <h3 className="m-0 font-vg-display text-[44px] font-normal leading-[0.95] text-vg-glow">{district.name}</h3>
      <p className="m-0 text-[15px] leading-normal">{district.blurb}</p>
      <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
        {district.blocks.map((block) => (
          <li
            key={block}
            className={classNames(
              "font-vg-mono px-2 py-1 text-xs",
              final ? "bg-vg-chip-warm text-vg-ink-warm" : "bg-vg-chip text-vg-ink-soft",
            )}
          >
            {block}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-1">
        <SectionLabel className="text-xs tracking-[0.08em]">Signature build</SectionLabel>
        <div className={classNames("text-sm leading-normal", body)}>{district.signature}</div>
      </div>
      <div className="mt-auto flex flex-col gap-1">
        <SectionLabel className="text-xs tracking-[0.08em]">The haunt</SectionLabel>
        <div className={classNames("text-sm leading-normal", body)}>{district.haunt}</div>
      </div>
    </article>
  );
}
