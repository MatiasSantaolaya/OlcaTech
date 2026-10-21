import { getDictionary } from "./dictionaries";

export default async function Home() {
  const dict = await getDictionary();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm uppercase tracking-widest">{dict.home.eyebrow}</p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight">
        {dict.home.title}
      </h1>
      <p className="text-lg opacity-70">{dict.home.subtitle}</p>
    </main>
  );
}
