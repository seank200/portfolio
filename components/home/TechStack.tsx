export default function TechStack({ children }: { children: React.ReactNode }) {
  return <ul className="grid grid-cols-sm gap-4">{children}</ul>;
}
