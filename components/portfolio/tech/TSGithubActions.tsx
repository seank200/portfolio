import { SiGithubactions } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSGithubActions({
  variant = defaultTSVariant,
}: TSProps) {
  return (
    <TechSkill
      icon={
        <SiGithubactions color="default" className={techIconClass[variant]} />
      }
      href="https://github.com/features/actions"
      label="Github Actions"
    />
  );
}
