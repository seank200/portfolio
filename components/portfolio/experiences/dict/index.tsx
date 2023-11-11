import { StaticImageData } from "next/image";
import { MyLang } from "@lib/i18n";
import { anlDict } from "./anl";
import { ceosDict } from "./ceos";
import { cfcDict } from "./cfc";
import { facadeDict } from "./facade";
import { ucnDict } from "./ucn";
import { yicrcDict } from "./yicrc";

import HCSSLogo from "@images/logo/HCSS.png";
import ANLLogo from "@images/logo/ANL.jpg";
import FacadeLogo from "@images/logo/Facade.png";
import CEOSLogo from "@images/logo/CEOS.png";
import CFCLogo from "@images/logo/CFC.png";
import YonseiRCLogoLight from "@images/logo/YonseiRC_light.png";

export const expDict = {
  ucn: ucnDict,
  anl: anlDict,
  facade: facadeDict,
  ceos: ceosDict,
  cfc: cfcDict,
  yicrc: yicrcDict,
};

export type ExpName = keyof typeof expDict;

export type ExpPeriod = { start: Date; end?: Date };

export type ExpAttribs = {
  name: ExpName;
  role: React.ReactNode;
  period: ExpPeriod;
  division?: React.ReactNode;
  affiliation?: React.ReactNode;
  location?: React.ReactNode;
  category?: React.ReactNode;
  details?: React.ReactNode;
  link?: string;
  logoSrc: StaticImageData | string;
  logoDarkSrc?: StaticImageData | string;
  logoHeight?: number;
};

export const expAttribs: Record<
  ExpName,
  Pick<ExpAttribs, "period" | "link" | "logoSrc" | "logoDarkSrc" | "logoHeight">
> = {
  ucn: {
    period: {
      start: new Date("2021-09"),
      end: new Date("2023-10"),
    },
    link: "https://www.hcss.or.kr/html/",
    logoSrc: HCSSLogo,
    logoHeight: 28,
  },
  anl: {
    period: {
      start: new Date("2023-06"),
      end: new Date("2023-08"),
    },
    link: "https://www.anl.gov",
    logoSrc: ANLLogo,
  },
  facade: {
    period: {
      start: new Date("2022-03"),
      end: new Date("2023-04"),
    },
    logoSrc: FacadeLogo,
    logoHeight: 24,
  },
  ceos: {
    period: {
      start: new Date("2021-03"),
      end: new Date("2021-12"),
    },
    link: "https://ceos-sinchon.com",
    logoSrc: CEOSLogo,
  },
  cfc: {
    period: {
      start: new Date("2019-02"),
      end: new Date("2020-12"),
    },
    link: "https://www.usfk.mil/About/CFC/",
    logoSrc: CFCLogo,
  },
  yicrc: {
    period: {
      start: new Date("2018-03"),
      end: new Date("2019-02"),
    },
    link: "https://yicrc.yonsei.ac.kr/main/default.asp?mid=m00",
    logoSrc: YonseiRCLogoLight,
  },
};

const expOrder: ExpName[] = ["ucn", "anl", "facade", "ceos", "cfc", "yicrc"];

const buildExperiences = (lang: MyLang) =>
  expOrder.map((expName): ExpAttribs => {
    const { role, division, affiliation, location, category, details } =
      expDict[expName as keyof typeof expDict][lang];

    const { period, link, logoSrc, logoDarkSrc, logoHeight } =
      expAttribs[expName];

    return {
      name: expName,
      role,
      division,
      affiliation,
      location,
      category,
      details,
      period,
      link,
      logoSrc,
      logoDarkSrc,
      logoHeight,
    };
  });

export const experiences: Record<MyLang, ExpAttribs[]> = {
  en: buildExperiences("en"),
  ko: buildExperiences("ko"),
};
