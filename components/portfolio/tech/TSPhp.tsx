import { SiPhp } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSPhp({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiPhp color="default" className={techIconClass[variant]} />}
      label="PHP"
      href="https://www.php.net/"
    />
  );
}
