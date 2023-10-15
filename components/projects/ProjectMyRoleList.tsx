export default function ProjectMyRoleList({
  items,
}: {
  items: React.ReactNode[];
}) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={String(item).slice(0, 10)}
          className="before:mr-4 before:content-['•'] flex items-start leading-relaxed"
        >
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
