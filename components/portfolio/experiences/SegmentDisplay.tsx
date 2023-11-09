export default function SegmentDisplay({
  label,
  content,
  className,
}: {
  label?: string;
  content: string;
  className?: string;
}) {
  return (
    <div className="">
      {label && (
        <p className="mb-1 block text-center text-[11px] leading-none font-medium font-mono uppercase">
          <span className="px-1 py-px bg-red-900 text-red-100">{label}</span>
        </p>
      )}
      <span className={`relative font-7seg ${className || ""}`}>
        {content.split("").map((char, idx) => {
          const align = char.match(/[0-9]/) ? "text-right" : "text-center";
          return (
            <span key={idx} className={`inline-block w-[17px] ${align}`}>
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
}
