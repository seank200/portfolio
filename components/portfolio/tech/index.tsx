import MyLink from "@components/MyLink";
import Image, { type StaticImageData } from "next/image";

export type TechSkillVariant = "sm" | "md";
export type TSProps = { variant?: TechSkillVariant };

export const techUrl = {
  typescript: "https://www.typescriptlang.org",
  nodejs: "https://nodejs.org",
  mysql: "https://www.mysql.com",
  aws: "https://aws.amazon.com/",
};

export const techImgWidth = Object.freeze([24, 20]);

export const techIconClass = {
  sm: "w-6 h-6",
  md: "w-5 h-5",
};

export const defaultTSVariant: TechSkillVariant = "md";

export const getTSVariantIdx = (
  variant: TechSkillVariant | undefined,
): number => {
  let variantIdx: number;
  switch (variant) {
    case "sm":
      variantIdx = 0;
      break;
    case "md":
    default:
      variantIdx = 1;
      break;
  }
  return variantIdx;
};

export default function TechSkill({
  href,
  src,
  icon,
  label,
  variant,
}: {
  href: string;
  src?: StaticImageData | string;
  icon?: React.ReactNode;
  label: string;
  variant?: TechSkillVariant;
}) {
  const vidx = getTSVariantIdx(variant);
  const imgWidth = [24, 20][vidx];
  const labelFontSize = ["text-sm", "text-sm"][vidx];

  return (
    <MyLink href={href} className="flex gap-2 items-center">
      {src && (
        <Image src={src} alt={label} width={imgWidth} className="h-auto" />
      )}
      {icon}
      {vidx >= 1 && (
        <span className={`leading-none ${labelFontSize}`}>{label}</span>
      )}
    </MyLink>
  );
}
