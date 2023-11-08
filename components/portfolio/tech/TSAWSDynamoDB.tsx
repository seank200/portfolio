import { SiAmazondynamodb } from "@icons-pack/react-simple-icons";
import TechSkill, { TSProps } from ".";

export default function TSAWSDyanmoDB({ variant }: TSProps) {
  return (
    <TechSkill
      icon={<SiAmazondynamodb color="default" />}
      href="https://aws.amazon.com/dynamodb/"
      label="Amazon DynamoDB"
    />
  );
}
