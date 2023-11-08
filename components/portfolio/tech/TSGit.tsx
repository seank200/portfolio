import { SiGit } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSGit({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiGit color="default" className={techIconClass[variant]} />}
      href="https://git-scm.com"
      label="Git"
    />
  );
}
