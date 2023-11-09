import TechSkill, { TSProps } from ".";
import HTMLLogo from "@images/tech/html.png";

export default function TSHtml({ variant }: TSProps) {
  return (
    <TechSkill
      src={HTMLLogo}
      label="HTML"
      href="https://developer.mozilla.org/docs/Web/HTML"
      variant={variant}
    />
  );
}
