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
          className="before:mr-4 before:content-['•'] flex items-start md:text-lg leading-relaxed"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
