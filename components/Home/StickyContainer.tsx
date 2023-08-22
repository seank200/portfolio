export default function StickyContainer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={`sticky top-24 ${className || ''}`}>{children}</div>;
}
