import { SiAmazondynamodb } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps, defaultTSVariant, techIconClass } from ".";

export default function TSAWSDyanmoDB({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      icon={
        <SiAmazondynamodb color="default" className={techIconClass[variant]} />
      }
      href="https://aws.amazon.com/dynamodb/"
      label="Amazon DynamoDB"
    />
  );
}
