import Image from "next/image";
import { MyLang, formatPeriod } from "@lib/i18n";
import Heading from "../Heading";
import MyLink from "@components/MyLink";
import ThemedImage from "@components/ThemedImage";
import { ExpAttribs } from "./dict";

export default function ExpContent({
  lang,
  attribs,
  children,
}: {
  lang: MyLang;
  attribs: ExpAttribs;
  children?: React.ReactNode;
}) {
  const {
    name,
    role,
    period,
    division,
    affiliation,
    location,
    category,
    link,
    logoSrc,
    logoDarkSrc,
    logoHeight,
  } = attribs;
  const fPeriod = formatPeriod(lang, period.start, period.end);

  const logoContainerClass =
    "mt-6 w-full rounded py-3 bg-white flex justify-center items-center";
  const logo = logoDarkSrc ? (
    <ThemedImage
      src={logoSrc}
      darkSrc={logoDarkSrc}
      alt={name}
      className="w-auto"
      height={logoHeight || 30}
    />
  ) : (
    <Image
      src={logoSrc}
      alt={name}
      className="w-auto"
      height={logoHeight || 30}
    />
  );

  return (
    <>
      <Heading level={3} className="mb-2">
        <span className="block mb-2 font-medium text-base text-ctp-mauve leading-none">
          {fPeriod}
        </span>
        {role}
        <span className="relative bottom-1 ml-3 rounded px-2 py-1 bg-ctp-crust text-sm font-medium">
          {category}
        </span>
      </Heading>
      {division && <p>{division}</p>}
      {affiliation && <p>{affiliation}</p>}
      {location && <p>{location}</p>}
      {children}
      {link ? (
        <MyLink
          href={link}
          className={`${logoContainerClass} hover:scale-102 hover:shadow-lg transition`}
        >
          {logo}
        </MyLink>
      ) : (
        <div className={logoContainerClass}>{logo}</div>
      )}
    </>
  );
}
