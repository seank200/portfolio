export default function StickyContainer({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`sticky top-0 py-10 ${className || ''}`}>{children}</div>
  );
}
