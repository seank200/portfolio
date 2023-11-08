import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";
import { SiNodedotjs } from "@icons-pack/react-simple-icons";

export default function TSNodejs({ variant }: TSProps) {
  return (
    <TechSkill
      href="https://nodejs.org"
      icon={
        <SiNodedotjs
          color="default"
          className={techIconClass[variant || defaultTSVariant]}
        />
      }
      label="NodeJS"
      variant={variant}
    />
  );
}
