import { uploadLinks } from "@/lib/links";

const uploadButtons = [
  {
    label: "Upload Photos",
    href: uploadLinks.photoUpload1,
  },
  // {
  //   label: "Upload Photos",
  //   description: "Link 2",
  //   href: uploadLinks.photoUpload2,
  // },
  // {
  //   label: "Upload Photos",
  //   description: "Link 3",
  //   href: uploadLinks.photoUpload3,
  // },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(244,194,194,0.35),transparent_60%),radial-gradient(circle_at_bottom,rgba(198,220,198,0.3),transparent_60%)]"
      />
      <section className="w-full max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-rose-400">
          With love
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-rose-900 sm:text-6xl">
          Share Your Memories
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-rose-800/80">
          Thank you for celebrating our special day with us. We would love to
          see the moments you captured — please upload your photos so we can
          treasure them forever.
        </p>

        <div className="mt-12 flex flex-col items-center gap-5">
          {uploadButtons.map((button) => (
            <a
              key={button.href}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-xs flex-col items-center gap-0.5 rounded-full border border-rose-200 bg-white/70 px-8 py-6 text-rose-900 shadow-md backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
            >
              <span className="text-xl font-semibold">{button.label}</span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-rose-600/70">
          Tip: you can upload through the link above.
        </p>
      </section>
    </main>
  );
}
