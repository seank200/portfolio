import { SiReactquery } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSReactQuery({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={<SiReactquery color="default" className={techIconClass[variant]} />}
      label="React Query"
      href="https://tanstack.com/query/latest"
    />
  );
}
