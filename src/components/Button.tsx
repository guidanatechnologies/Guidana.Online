import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  className?: string;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_30px_-12px_rgba(40,134,255,0.8)]",
  secondary:
    "bg-white text-foreground border border-line hover:border-brand/40 hover:text-brand",
  ghost: "text-foreground hover:text-brand",
  onDark:
    "bg-white/10 text-white border border-white/35 backdrop-blur-sm hover:bg-white/18 hover:border-white/55",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const showMeetingIcon = href.includes("/book-a-meeting");

  return (
    <Link
      href={href}
      className={`btn-motion inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {showMeetingIcon ? <CalendarDays className="h-4 w-4 shrink-0" aria-hidden /> : null}
      {children}
    </Link>
  );
}
