import { site } from "@/lib/site";
import {
  Award,
  BadgeCheck,
  DraftingCompass,
  GraduationCap,
  Landmark,
  Medal,
  Presentation,
  Download,
  Mail,
  Linkedin,
  Sprout,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

/* ---------------- About ---------------- */

const aboutFacts = [
  { icon: GraduationCap, label: "Major", value: "BSc. in Civil Engineering" },
  { icon: Landmark, label: "University", value: "Islamic University of Technology (IUT) — OIC" },
  { icon: BadgeCheck, label: "Certification", value: "MOS: Excel Associate" },
  { icon: Sprout, label: "Venture", value: "Owner — Roshayon Karigor" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="About Me"
          title={
            <>
              Grounded in engineering, <span className="text-gradient-forest">built for more</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I am a second-year Civil Engineering student at the Islamic University of Technology (IUT), where I developed technical knowledge of tools like{" "}
              <strong className="font-semibold text-foreground">AutoCAD</strong> and{" "}
              <strong className="font-semibold text-foreground">ETABS</strong>, and I am officially
              certified as a{" "}
              <strong className="font-semibold text-foreground">
                Microsoft Office Specialist: Excel Associate
              </strong>
              .
            </p>
            <p>
              Beyond engineering, I've built experience in entrepreneurship, education, leadership,
              event management, case competitions, and presentations. I'm the owner of{" "}
              <strong className="font-semibold text-foreground">Roshayon Karigor</strong>, and I
              previously served as Head of the Chemistry Department at{" "}
              <strong className="font-semibold text-foreground">Shikkhanir Academic Coaching</strong>.
            </p>
            <p>
              I enjoy solving problems, working with teams, learning new skills, and taking
              responsibility in both technical and organizational environments.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 90}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-24px_var(--forest)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <fact.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="truncate text-sm font-semibold text-foreground">{fact.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */

const skillGroups = [
  {
    icon: DraftingCompass,
    title: "Engineering",
    skills: ["AutoCAD", "ETABS"],
  },
  {
    icon: BadgeCheck,
    title: "Data & Productivity",
    skills: ["Microsoft Excel", "Microsoft Office"],
  },
];

const softSkills = [
  "Event Management",
  "Leadership",
  "Team Collaboration",
  "Presentation",
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Organizational Management",
];

const marqueeItems = [
  "AutoCAD",
  "ETABS",
  "Microsoft Excel",
  "Microsoft Office",
  "Event Management",
  "Leadership",
  "Team Collaboration",
  "Presentation",
  "Problem Solving",
  "Analytical Thinking",
  "Communication",
  "Organizational Management",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Technical Skills"
          title={
            <>
              A toolkit that spans <span className="text-gradient-forest">site and spreadsheet</span>
            </>
          }
          description="Engineering software, data analysis, and productivity tools — backed by a certified Excel credential and a strong set of professional skills."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_56px_-28px_var(--forest)] sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-6">
          <div className="rounded-3xl border border-border bg-card p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                Professional & Soft Skills
              </h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* marquee band */}
      <div className="marquee-mask mt-14 overflow-hidden border-y border-border bg-forest py-4">
        <div className="flex w-max animate-marquee gap-3 pr-3">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-primary-foreground/15 px-5 py-1.5 text-sm font-medium text-primary-foreground/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Education & Certification ---------------- */

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Education & Certification"
          title={
            <>
              Academic foundation, <span className="text-gradient-forest">certified skills</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_56px_-28px_var(--forest)]">
              <div
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-secondary transition-transform duration-500 group-hover:scale-125"
                aria-hidden
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </span>
              <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Education
              </p>
              <h3 className="relative mt-2 font-display text-xl font-bold text-foreground">
                BSc. in Civil Engineering
              </h3>
              <p className="relative mt-2 leading-relaxed text-muted-foreground">
                Islamic University of Technology (IUT) — OIC
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-forest p-8 text-primary-foreground transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-24px_var(--forest)]">
              <div
                className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/40 transition-transform duration-500 group-hover:scale-125"
                aria-hidden
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-lime-leaf text-forest-deep">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-lime-leaf">
                Certification
              </p>
              <h3 className="relative mt-2 font-display text-xl font-bold">
                Microsoft Office Specialist: Excel Associate
              </h3>
              <p className="relative mt-2 leading-relaxed text-primary-foreground/75">
                Officially certified
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience & Leadership ---------------- */

const experiences = [
  {
    icon: Sprout,
    tag: "Entrepreneurship",
    title: "Owner",
    org: "Roshayon Karigor",
    points: [
      "Business ownership, planning, management, and decision-making.",
    ],
  },
  {
    icon: Users,
    tag: "Education & Leadership",
    title: "Former Head of Chemistry Department",
    org: "Shikkhanir Academic Coaching",
    points: [
      "Academic leadership, teaching coordination, management, and student guidance.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Experience & Leadership"
          title={
            <>
              Leading teams, <span className="text-gradient-forest">running ventures</span>
            </>
          }
          description="Entrepreneurship and academic leadership that sharpen planning, management, and people skills alongside engineering."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* timeline rail */}
          <div
            className="absolute left-[1.4rem] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-primary via-accent to-transparent sm:left-[1.55rem]"
            aria-hidden
          />
          <ol className="flex flex-col gap-10">
            {experiences.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 140} className="relative pl-14 sm:pl-16">
                <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-card text-primary shadow-[0_10px_24px_-14px_var(--forest)] sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_48px_-26px_var(--forest)] sm:p-7">
                  <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-primary">{item.org}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.points[0]}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Achievements ---------------- */

const achievements = [
  {
    icon: Trophy,
    rank: "Champion",
    highlight: true,
    event: "NOVICE",
    detail: "IUT ICE Intra Case Competition",
  },
  {
    icon: Medal,
    rank: "1st Runner-Up",
    highlight: false,
    event: "Speedolite",
    detail: "IUT ITE Case Competition",
  },
  {
    icon: Medal,
    rank: "1st Runner-Up",
    highlight: false,
    event: "Spilce 4.0",
    detail: "IUT ACI Poster Presentation",
  },
  {
    icon: Presentation,
    rank: "Finalist",
    highlight: false,
    event: "Cennovation",
    detail: "Poster Presentation",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Achievements & Competitions"
          title={
            <>
              Proven under <span className="text-gradient-forest">competition pressure</span>
            </>
          }
          description="Case competitions and poster presentations across engineering and interdisciplinary events at IUT."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.event} delay={i * 100} className="h-full">
              <div
                className={`group flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7 ${
                  item.highlight
                    ? "border-primary/40 bg-forest text-primary-foreground shadow-[0_28px_56px_-28px_var(--forest)] hover:shadow-[0_32px_60px_-26px_var(--forest)]"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-[0_28px_56px_-28px_var(--forest)]"
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                    item.highlight
                      ? "bg-lime-leaf text-forest-deep"
                      : "bg-secondary text-primary"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                </span>
                <p
                  className={`mt-5 text-xs font-bold uppercase tracking-[0.16em] ${
                    item.highlight ? "text-lime-leaf" : "text-primary"
                  }`}
                >
                  {item.rank}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold">{item.event}</h3>
                <p
                  className={`mt-1.5 text-sm leading-relaxed ${
                    item.highlight ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CV + Contact ---------------- */

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 text-primary-foreground sm:px-12 sm:py-16 lg:px-16">
            <div
              className="blob-lime pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-float rounded-full opacity-50 blur-2xl"
              aria-hidden
            />
            <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden />

            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime-leaf">
                  <Award className="h-3.5 w-3.5" />
                  CV & Contact
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Let's build something <span className="text-lime-leaf">solid</span>
                </h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/80">
                  Reach out for engineering roles, collaborations, or opportunities.
                </p>
              </div>

              <div className="flex w-full max-w-sm flex-col gap-3">
                {site.cvPath ? (
                  <a
                    href={site.cvPath}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-leaf px-7 py-3.5 text-sm font-semibold text-forest-deep transition-transform hover:-translate-y-0.5"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                ) : null}
                {site.email ? (
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                  >
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                ) : null}
                {site.linkedInUrl ? (
                  <a
                    href={site.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                ) : null}
                {!site.email && !site.linkedInUrl ? (
                  <p className="rounded-2xl border border-primary-foreground/20 px-5 py-4 text-center text-sm text-primary-foreground/80">
                    Contact details are being updated.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p className="font-display font-semibold text-foreground">Farzaad Bin Sarwar</p>
        <p>Civil Engineering Student | Technical Professional | Entrepreneur</p>
      </div>
    </footer>
  );
}
