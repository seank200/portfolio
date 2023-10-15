import Container from '@/components/Container';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SupportedLang, formatTimePeriod } from '@/i18n';
import ProjectStickyHeader from '@/components/projects/ProjectStickyHeader';
import { expDict, expPeriod } from '@/components/dict/experiences';
import ProjectHeader from '@/components/projects/ProjectHeader';
import Section from '@/components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faMicrochip,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { generalDict } from '@/components/dict/experiences/general';
import ProjectMyRoleList from '@/components/projects/ProjectMyRoleList';
import TechStack from '@/components/projects/TechStack';
import {
  TSCSS,
  TSHTML,
  TSJQuery,
  TSJavaScript,
  TSMYSQL,
  TSPHP,
} from '@/components/projects/TechStackItem';
import Image from 'next/image';

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  const period = formatTimePeriod(
    lang,
    expPeriod.yicrc.start,
    expPeriod.yicrc.end,
    {
      precision: 'month',
    }
  );
  const { H_MY_ROLE, H_TECH_STACK, H_SCREENSHOTS } = generalDict[lang];
  const { TITLE } = expDict.yicrc[lang];
  const DETAILS = expDict.yicrc[lang].DETAILS as React.ReactNode[];
  const { DESCRIPTION, H_FEAT_STUDENT, H_FEAT_ADMIN } = expDict.yrems[lang];

  const userSrcUrls = Array(14)
    .fill(undefined)
    .map((v, i) => {
      const n = (i + 1).toString().padStart(3, '0');
      return `user/yrems_screenshot.${n}.png`;
    });
  const adminSrcUrls = Array(8)
    .fill(undefined)
    .map((v, i) => {
      const n = (i + 15).toString().padStart(3, '0');
      return `admin/yrems_screenshot.${n}.png`;
    });

  return (
    <>
      <Nav lang={lang} />
      <Section>
        <ProjectStickyHeader
          heading={
            <span className="text-3xl text-[#0A3879] font-bold">YREMS</span>
          }
          title={TITLE}
          period={period}
        />
        <Container className="min-h-screen">
          <ProjectHeader
            title={TITLE}
            period={period}
            description={DESCRIPTION}
          />
          <h4 className="mt-20 mb-4 text-2xl font-semibold">
            <FontAwesomeIcon
              icon={faMicrochip}
              className="mr-3 h-em text-cyan-500 dark:text-cyan-300"
            />
            {H_TECH_STACK}
          </h4>
          <TechStack>
            <TSHTML lang={lang} />
            <TSCSS lang={lang} />
            <TSJavaScript />
            <TSJQuery />
            <TSPHP />
            <TSMYSQL />
          </TechStack>
          <h4 className="mt-24 mb-3 text-2xl font-semibold">
            <FontAwesomeIcon
              icon={faStar}
              className="mr-3 h-em text-yellow-400 dark:text-yellow-300"
            />
            {H_MY_ROLE}
          </h4>
          <ProjectMyRoleList items={DETAILS} />
          <h4 className="mt-28 mb-4 text-2xl font-semibold">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="mr-3 text-orange-500 dark:text-orange-400"
            />
            {H_SCREENSHOTS} ({H_FEAT_STUDENT})
          </h4>
          <div className="grid grid-cols-sm gap-6">
            {userSrcUrls.map((url) => (
              <Image
                key={url}
                src={`/images/yrems/${url}`}
                alt="YREMS UI screenshot"
                className="shadow hover:scale-104 transition-all"
                width={355}
                height={600}
              />
            ))}
          </div>
          <h4 className="mt-28 mb-4 text-2xl font-semibold">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="mr-3 text-orange-500 dark:text-orange-400"
            />
            {H_SCREENSHOTS} ({H_FEAT_ADMIN})
          </h4>
          <div className="grid grid-cols-sm gap-6">
            {adminSrcUrls.map((url) => (
              <Image
                key={url}
                src={`/images/yrems/${url}`}
                alt="YREMS UI screenshot"
                className="shadow hover:scale-104 transition-all"
                width={355}
                height={600}
              />
            ))}
          </div>
        </Container>
      </Section>
      <Footer lang={lang} />
    </>
  );
}
