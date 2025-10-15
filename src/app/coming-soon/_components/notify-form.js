"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  // async function onSubmit(e) {
  //   e.preventDefault();
  //   if (!isValidEmail(email)) {
  //     toast({
  //       title: "Invalid email",
  //       description: "Please enter a valid email address.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   try {
  //     setPending(true);
  //     // Simulate network call
  //     await new Promise((r) => setTimeout(r, 800));

  //     toast({
  //       title: "You’re on the list!",
  //       description: "We’ll email you as soon as we launch.",
  //     });
  //     setEmail("");
  //   } catch (err) {
  //     toast({
  //       title: "Something went wrong",
  //       description: "Please try again in a moment.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setPending(false);
  //   }
  // }

  return (
    <form className="flex flex-col sm:flex-row gap-5">
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
          // aria-invalid={email.length > 0 && !isValidEmail(email)}
        />
      </div>
      <Button type="submit" className="btn" disabled={pending}>
        {pending ? "Joining..." : "Notify me"}
      </Button>
    </form>
  );
}
