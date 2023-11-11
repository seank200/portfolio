import TechSkill, { TSProps, defaultTSVariant } from ".";
import CSSLogo from "@images/tech/css.png";

export default function TSCss({ variant = defaultTSVariant }: TSProps) {
  return (
    <TechSkill
      href="https://developer.mozilla.org/docs/Web/CSS"
      src={CSSLogo}
      label="CSS"
      variant={variant}
    />
  );
}
