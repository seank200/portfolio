import { SiVercel } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSVercel({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={
        <SiVercel
          color="default"
          className={`${techIconClass[variant]} dark:fill-ctp-text`}
        />
      }
      label="Vercel"
      href="https://vercel.com"
    />
  );
}
