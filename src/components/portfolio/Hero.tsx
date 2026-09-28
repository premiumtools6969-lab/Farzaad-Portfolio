import { ArrowRight, Mail } from "lucide-react";
import rawImage from "@/assets/farzaad.png";

const chips = ["AutoCAD", "ETABS", "Microsoft Excel", "Leadership"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* decorative background */}
      <div className="grid-paper pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="blob-sage pointer-events-none absolute -top-24 -left-24 h-96 w-96 animate-float-slow rounded-full opacity-70 blur-2xl"
        aria-hidden
      />
      <div
        className="blob-lime pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] animate-float rounded-full opacity-60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <span
            className="animate-hero-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-leaf opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to opportunities
          </span>

          <h1
            className="animate-hero-up font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[58px]"
            style={{ animationDelay: "120ms" }}
          >
            Farzaad <span className="text-gradient-forest">Bin Sarwar</span>
          </h1>

          <p
            className="animate-hero-up font-display text-lg font-semibold text-primary sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Civil Engineering Student <span className="text-accent">|</span> Technical
            Professional <span className="text-accent">|</span> Entrepreneur
          </p>

          <p
            className="animate-hero-up max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "360ms" }}
          >
            Civil Engineering student from the Islamic University of Technology (IUT) with
            experience in engineering software, data analysis, leadership, entrepreneurship,
            education, event management, and competitive problem-solving.
          </p>

          <div
            className="animate-hero-up flex flex-wrap items-center gap-3 pt-1"
            style={{ animationDelay: "480ms" }}
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_32px_-14px_var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_20px_36px_-14px_var(--primary)]"
            >
              Explore Experience
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-secondary"
            >
              <Mail className="h-4 w-4 text-primary" />
              Contact Me
            </a>
          </div>

          <ul
            className="animate-hero-up mt-2 flex flex-wrap items-center gap-2"
            style={{ animationDelay: "600ms" }}
          >
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-border bg-secondary/70 px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors duration-300 hover:border-primary/40 hover:bg-secondary"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait */}
        <div
          className="animate-hero-up relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: "300ms" }}
        >
          <div
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage/70 via-transparent to-lime-leaf/40 blur-xl"
            aria-hidden
          />
          <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card shadow-[0_40px_80px_-40px_var(--forest)]">
            <img
              src={rawImage}
              alt="Portrait of Farzaad Sarwar"
              className="aspect-[4/5] w-full object-cover object-[72%_center] transition-transform duration-700 hover:scale-[1.03] sm:aspect-[5/5.4]"
              loading="eager"
            />
          </div>
          <div
            className="animate-float absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-[0_20px_40px_-20px_var(--forest)] backdrop-blur"
            aria-hidden
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-primary">
              BSc. Civil Engineering
            </p>
            <p className="mt-0.5 text-xs font-medium text-muted-foreground">
              Islamic University of Technology (IUT) — OIC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

