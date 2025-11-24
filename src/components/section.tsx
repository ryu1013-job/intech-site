import { cn } from "~/lib/utils";

export function Section({ className, children }: { className?: string; children: React.ReactNode; }) {
  return <section className={cn('gap-3 flex flex-col' ,className)}>{children}</section>;
}