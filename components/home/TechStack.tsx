export default function TechStack({ children }: { children: React.ReactNode }) {
  return (
    <ul className="grid grid-cols-sm md:grid-cols-md gap-4">{children}</ul>
  );
}
