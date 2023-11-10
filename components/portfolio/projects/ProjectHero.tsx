import { StaticImageData } from "next/image";
import ProjectHeroGallery from "./ProjectHeroGallery";
import { ProjectPeriod } from "./ProjectSection";
import { MyLang, formatPeriod } from "@lib/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import Heading from "../Heading";

export default function ProjectHero({
  lang,
  heading,
  images,
  period,
  children,
}: {
  lang: MyLang;
  heading: React.ReactNode;
  period: ProjectPeriod;
  images?: StaticImageData[];
  children?: React.ReactNode;
}) {
  return (
    <>
      {images && <ProjectHeroGallery images={images} />}
      <div className="container min-h-screen flex flex-col py-20">
        <p className="text-right text-sm lg:text-base font-medium drop-shadow">
          <FontAwesomeIcon icon={faCalendar} className="h-em mr-3" />
          {formatPeriod(lang, period.start, period.end)}
        </p>
        <Heading level={3} className="grow flex justify-center items-center">
          {heading}
        </Heading>
        {children}
      </div>
    </>
  );
}
