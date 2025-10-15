import { ComingSoonHero } from "./_components/hero";

export default function ComingSoonPage() {
  const target = new Date();
  target.setDate(target.getDate() + 30);

  return (
    <main className=" flex items-center justify-center px-6 py-16">
      <ComingSoonHero targetDate={target.toISOString()} />
    </main>
  );
}
