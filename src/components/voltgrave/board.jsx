import classNames from "classnames";

// One artboard of the concept, stacked full-width on the page.
export default function Board({ id, children, className }) {
  return (
    <section id={id} className={classNames("border-b border-vg-line last:border-b-0", className)}>
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-12 sm:py-14 lg:px-[72px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }) {
  return (
    <div className={classNames("font-vg-mono text-sm uppercase tracking-[0.18em] text-vg-ember", className)}>
      {children}
    </div>
  );
}

export function BoardHeader({ eyebrow, title, intro }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-col gap-2">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="m-0 font-vg-display text-[56px] font-normal leading-[0.9] text-vg-glow sm:text-[84px]">
          {title}
        </h2>
      </div>
      {intro && <p className="m-0 max-w-[520px] text-base leading-[1.55] text-vg-muted">{intro}</p>}
    </div>
  );
}

export function SectionLabel({ children, as: Tag = "h3", className }) {
  return (
    <Tag className={classNames("m-0 text-[13px] font-semibold uppercase tracking-[0.1em] text-vg-ember", className)}>
      {children}
    </Tag>
  );
}

export function Stat({ value, label, size = "md" }) {
  return (
    <div className={classNames("flex flex-col border border-vg-line", size === "lg" ? "gap-1.5 p-4" : "gap-1 p-3.5")}>
      <div
        className={classNames(
          "font-vg-display leading-none text-vg-ember",
          size === "lg" ? "text-[40px]" : "text-[36px]",
        )}
      >
        {value}
      </div>
      <div className="text-[13px] text-vg-muted">{label}</div>
    </div>
  );
}
