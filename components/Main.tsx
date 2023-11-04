export default function Main({
  className,
  children,
  removePaddingTop,
}: {
  className?: string;
  children?: React.ReactNode;
  removePaddingTop?: boolean;
}) {
  return (
    <main
      className={`w-full min-h-screen ${removePaddingTop ? "pb-16" : "py-16"} ${
        className || ""
      }`}
    >
      {children}
    </main>
  );
}
