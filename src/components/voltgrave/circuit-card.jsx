import classNames from "classnames";

export default function CircuitCard({ circuit }) {
  const { final } = circuit;

  return (
    <article
      className={classNames(
        "flex flex-col gap-3 border p-[22px]",
        final ? "border-vg-ember bg-vg-panel-warm" : "border-vg-line bg-vg-panel",
      )}
    >
      <h3 className="m-0 font-vg-display text-[34px] font-normal leading-none text-vg-glow">{circuit.name}</h3>
      <div className="font-vg-mono text-[13px] leading-relaxed text-vg-ember-soft">{circuit.wiring}</div>
      <div className={classNames("text-sm leading-normal", final ? "text-vg-ink-warm" : "text-vg-ink-soft")}>
        {circuit.body}
      </div>
    </article>
  );
}
