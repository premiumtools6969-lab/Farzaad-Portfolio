import { useState } from "react";
import { site } from "@/lib/site";

export function Portrait() {
  const [failed, setFailed] = useState(false);

  if (!site.portraitPath || failed) {
    return (
      <div
        role="img"
        aria-label={`${site.name} monogram`}
        className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden bg-secondary sm:aspect-[5/5.4]"
      >
        <div className="grid-paper absolute inset-0" aria-hidden="true" />
        <div className="relative text-center">
          <span className="font-display text-8xl font-extrabold tracking-tighter text-primary sm:text-9xl">
            {site.initials}
          </span>
          <p className="mt-4 font-display text-lg font-semibold text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Civil Engineering</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={site.portraitPath}
      alt={`Portrait of ${site.name}`}
      className="aspect-[4/5] w-full object-cover object-[72%_center] transition-transform duration-700 hover:scale-[1.03] sm:aspect-[5/5.4]"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
