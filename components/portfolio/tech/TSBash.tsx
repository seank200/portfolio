import { SiGnubash } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSBash({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiGnubash color="default" className={techIconClass[variant]} />}
      href="https://www.gnu.org/software/bash/"
      label="Bash"
    />
  );
}
