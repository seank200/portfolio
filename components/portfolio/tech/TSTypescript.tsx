import typescriptLogo from "@images/tech/typescript.png";
import TechSkill, { TSProps } from ".";

export default function TSTypescript({ variant }: TSProps) {
  return (
    <TechSkill
      href="https://www.typescriptlang.org"
      src={typescriptLogo}
      label="TypeScript"
      variant={variant}
    />
  );
}
