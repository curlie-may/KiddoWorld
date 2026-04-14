import { CalendarDays, Camera, Music, Smile } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Smile,
    title: "Pick Your Character",
    body: "Choose from 20+ beloved characters your child will love.",
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Book Online",
    body: "Select your date, duration, and number of characters in minutes.",
  },
  {
    num: "03",
    icon: Music,
    title: "Party Time!",
    body: "Your character arrives with a custom soundtrack, games, and favors for all kids.",
  },
  {
    num: "04",
    icon: Camera,
    title: "Photo Memories",
    body: "We end every show with a group Happy Birthday song and photo time.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="bg-[var(--kw-section-steps)] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-kw-red md:text-sm">
          HOW IT WORKS
        </p>
        <h2 className="mt-3 text-center text-3xl font-black tracking-tight text-kw-dark md:text-4xl">
          A complete party in 4 easy steps
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base font-light text-kw-dark/85 md:text-lg">
          From booking to birthday cake, we handle the entertainment so you can
          enjoy every moment.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ num, icon: Icon, title, body }) => (
            <article
              key={num}
              className="rounded-2xl border border-kw-blue/10 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <p className="font-black leading-none text-kw-yellow text-5xl md:text-6xl">
                {num}
              </p>
              <Icon className="mt-3 h-8 w-8 text-kw-red" aria-hidden />
              <h3 className="mt-3 text-lg font-bold text-kw-dark">{title}</h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-kw-dark/80">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
