import Image from "next/image";
import { CountdownTimer } from "./countdown-timer";
import { NotifyForm } from "./notify-form";
import { cn } from "@/lib/utils";

export function ComingSoonHero({ targetDate }) {
  return (
    <section
      aria-labelledby="coming-soon-title"
      className={cn("w-full max-w-3xl     p-4")}
    >
      <div className="flex items-center gap-3 mb-6">
        <Image
          src="/images/logo.png"
          alt="Brand logo"
          width={200}
          height={200}
          className="rounded-md "
        />
      </div>

      <h1
        id="coming-soon-title"
        className="text-3xl md:text-4xl font-semibold tracking-tight text-balance"
      >
        We’re launching soon
      </h1>

      <p className="mt-3 text-muted-foreground text-pretty">
        Something new is on the way. Join the list and be the first to know when
        we go live.
      </p>

      <div className="mt-6">
        <CountdownTimer targetDate={targetDate} />
      </div>

      <div className="mt-6">
        <NotifyForm />
        <p className="mt-3 text-xs text-blue-500  italic">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
