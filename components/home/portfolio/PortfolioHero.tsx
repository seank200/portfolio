export default function PortfolioHero({
  className,
  children,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full h-screen bg-surface ${className || ''}`}>
      {children}
    </div>
  );
}
