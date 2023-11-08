import { StaticImageData } from "next/image";
import ProjectHeroGallery from "./ProjectHeroGallery";
import Container from "@components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { MyLang, formatPeriod } from "@lib/i18n";
import Section from "../Section";
import ProjectSummaryHeading from "./ProjectSummaryHeading";

export default function ProjectDetailsSection({
  lang,
  heading,
  id,
  images,
  period,
  logo,
  overviewLHeading,
  overviewCHeading,
  overviewRHeading,
  overviewL,
  overviewC,
  overviewR,
  children,
}: {
  lang: MyLang;
  heading: string;
  id: string;
  images?: StaticImageData[];
  period: {
    start: Date;
    end?: Date;
  };
  logo: React.ReactNode;
  overviewLHeading: React.ReactNode;
  overviewCHeading: React.ReactNode;
  overviewRHeading: React.ReactNode;
  overviewL: React.ReactNode;
  overviewC: React.ReactNode;
  overviewR: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Section
      level={3}
      heading={heading}
      id={id}
      className="group/project relative flex flex-col items-start"
      hideHeading
    >
      {images && <ProjectHeroGallery images={images} />}
      <Container className="min-h-screen flex flex-col gap-8 py-20">
        <p className="text-right text-sm lg:text-base font-medium drop-shadow">
          <FontAwesomeIcon icon={faCalendar} className="h-em mr-3" />
          {formatPeriod(lang, period.start, period.end)}
        </p>
        <div className="grow my-8 flex justify-center items-center">{logo}</div>
        <ul className="shrink-0 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 leading-relaxed">
          <li className="group/summary">
            <ProjectSummaryHeading>{overviewLHeading}</ProjectSummaryHeading>
            {overviewL}
          </li>
          <li className="group/summary">
            <ProjectSummaryHeading>{overviewCHeading}</ProjectSummaryHeading>
            {overviewC}
          </li>
          <li className="group/summary">
            <ProjectSummaryHeading>{overviewRHeading}</ProjectSummaryHeading>
            {overviewR}
          </li>
        </ul>
      </Container>
      {children}
    </Section>
  );
}
