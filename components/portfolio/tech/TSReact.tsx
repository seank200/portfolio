import { SiReact } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSReact({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiReact color="default" className={techIconClass[variant]} />}
      label="ReactJS"
      href="https://react.dev"
    />
  );
}
