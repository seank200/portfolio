import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListType } from "./ListItem";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion, MotionProps } from "framer-motion";

export default function MotionListItem({
  type,
  icon,
  className,
  children,
  ...motionProps
}: {
  type?: ListType;
  icon?: IconProp;
  className?: string;
  children?: React.ReactNode;
} & MotionProps) {
  if (icon) {
    return (
      <motion.li className="flex items-start" {...motionProps}>
        <span className="shrink-0 pr-3" style={{ fontSize: "inherit" }}>
          <FontAwesomeIcon icon={icon} className="h-0.875em" fixedWidth />
        </span>
        <span className={className}>{children}</span>
      </motion.li>
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
    <motion.li
      className={`${beforeContent} before:shrink-0 before:pr-4 flex items-start`}
      {...motionProps}
    >
      <span className={className}>{children}</span>
    </motion.li>
  );
}
