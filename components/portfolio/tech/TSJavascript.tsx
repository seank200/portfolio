import { SiJavascript } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSJavascript({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiJavascript color="default" className={techIconClass[variant]} />}
      label="JavaScript"
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    />
  );
}
