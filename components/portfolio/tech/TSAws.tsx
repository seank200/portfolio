import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";
import { SiAmazonaws } from "@icons-pack/react-simple-icons";

export default function TSAws({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={
        <SiAmazonaws
          color="default"
          className={`${techIconClass[variant]} dark:fill-ctp-text`}
        />
      }
      label="AWS"
      href="https://aws.amazon.com"
    />
  );
}
