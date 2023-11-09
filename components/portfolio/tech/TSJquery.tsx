import { SiJquery } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSJquery({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiJquery color="default" className={techIconClass[variant]} />}
      label="jQuery"
      href="https://jquery.com"
    />
  );
}
