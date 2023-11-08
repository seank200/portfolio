import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type ListType = "dot" | "dash" | string;

export default function ListItem({
  type,
  icon,
  className,
  children,
}: {
  type?: ListType;
  icon?: IconProp;
  className?: string;
  children?: React.ReactNode;
}) {
  if (icon) {
    return (
      <li className="flex items-start">
        <span className="shrink-0 pr-3" style={{ fontSize: "inherit" }}>
          <FontAwesomeIcon icon={icon} className="h-0.875em" fixedWidth />
        </span>
        <span className={className}>{children}</span>
      </li>
    );
  }

  let beforeContent: string;
  if (type === "dash") {
    beforeContent = "before:content-['-']";
  } else if (type === "dot" || !type) {
    beforeContent = "before:content-['•']";
  } else {
    beforeContent = type;
  }

  return (
    <li
      className={`${beforeContent} before:shrink-0 before:pr-4 flex items-start`}
    >
      <span className={className}>{children}</span>
    </li>
  );
}
