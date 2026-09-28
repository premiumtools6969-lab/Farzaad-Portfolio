import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/** Wraps content in a scroll-reveal container (see use-reveal.ts). */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const Tag = as;
  return (
    <Tag className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
