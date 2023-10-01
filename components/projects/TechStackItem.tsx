import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiGnubash,
  SiMysql,
  SiNodedotjs,
  SiGithubactions,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiVercel,
  SiDocker,
  SiPm2,
  SiC,
  SiCplusplus,
  SiGithub,
} from '@icons-pack/react-simple-icons';
import Image from 'next/image';
import JavaLogo from '@images/tech/java.png';
import CMakeLogo from '@images/tech/cmake.png';
import { SupportedLang } from '@/i18n';

export default function TechStackItem({
  icon,
  label,
  url,
}: {
  icon: React.ReactNode;
  label: string;
  url?: string;
}) {
  const contents = (
    <>
      {icon}
      <span className="mt-3 text-sm leading-tight md:leading-tight text-center text-faded font-medium">
        {label}
      </span>
    </>
  );
  const innerClass = 'px-4 py-3 flex flex-col justify-center items-center';
  return (
    <li
      className={`rounded bg-surface text-surface-on shadow transition-all ${
        url ? 'flex justify-center hover:scale-102 hover:shadow-lg' : innerClass
      }`}
    >
      {url ? (
        <a
          href={url}
          className={`${innerClass} grow`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {contents}
        </a>
      ) : (
        contents
      )}
    </li>
  );
}

const iconHeight = 'h-10 md:h-12';
const iconSize = `w-10 md:w-12 ${iconHeight}`;

export function TSNodeJS() {
  return (
    <TechStackItem
      icon={<SiNodedotjs color="default" className={iconSize} />}
      label="Node.JS"
      url="https://nodejs.dev/en/"
    />
  );
}

export function TSReactJS() {
  return (
    <TechStackItem
      icon={<SiReact color="default" className={`${iconSize}`} />}
      label="ReactJS"
      url="https://react.dev"
    />
  );
}

export function TSDocker() {
  return (
    <TechStackItem
      icon={<SiDocker color="default" className={`${iconSize}`} />}
      label="Docker"
      url="https://www.docker.com"
    />
  );
}

export function TSPm2() {
  return (
    <TechStackItem
      icon={
        <SiPm2 color="default" className={`${iconSize} dark:fill-surface-on`} />
      }
      label="PM2"
      url="https://pm2.keymetrics.io"
    />
  );
}

export function TSJavaScript() {
  return (
    <TechStackItem
      icon={<SiJavascript color="default" className={`${iconSize}`} />}
      label="JavaScript"
      url="https://developer.mozilla.org/en-US/docs/Web/JavaScript#"
    />
  );
}

export function TSVercel() {
  return (
    <TechStackItem
      icon={<SiVercel color="default" className={`${iconSize}`} />}
      label="Vercel"
      url="https://vercel.com"
    />
  );
}

export function TSTypeScript() {
  return (
    <TechStackItem
      icon={<SiTypescript color="default" className={`${iconSize}`} />}
      label="TypeScript"
      url="https://www.typescriptlang.org"
    />
  );
}

export function TSAWS() {
  return (
    <TechStackItem
      icon={
        <SiAmazonaws
          color="default"
          className={`${iconSize} dark:fill-surface-on`}
        />
      }
      label="Amazon Web Services"
      url="https://aws.amazon.com/"
    />
  );
}

export function TSAWSDynamoDB() {
  return (
    <TechStackItem
      icon={
        <SiAmazondynamodb
          color="default"
          className={`${iconSize} relative left-1`}
        />
      }
      label="AWS DynamoDB"
      url="https://aws.amazon.com/dynamodb/"
    />
  );
}

export function TSMYSQL() {
  return (
    <TechStackItem
      icon={
        <SiMysql
          color="default"
          className={`${iconSize} dark:fill-surface-on`}
        />
      }
      label="MYSQL"
      url="https://www.mysql.com"
    />
  );
}

export function TSGNUBash() {
  return (
    <TechStackItem
      icon={<SiGnubash color="default" className={`${iconSize}`} />}
      label="Bash Scripting"
      url="https://www.gnu.org/software/bash/"
    />
  );
}

export function TSC({ lang }: { lang?: SupportedLang }) {
  const wikipedia = {
    en: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    ko: 'https://ko.wikipedia.org/wiki/C_(프로그래밍_언어)',
  };
  const url = wikipedia[lang || 'en'];
  return (
    <TechStackItem
      icon={<SiC color="default" className={`${iconSize}`} />}
      label="C"
      url={url}
    />
  );
}
export function TSCPP({ lang }: { lang?: SupportedLang }) {
  const wikipedia = {
    en: 'https://en.wikipedia.org/wiki/C%2B%2B',
    ko: 'https://ko.wikipedia.org/wiki/C%2B%2B',
  };
  const url = wikipedia[lang || 'en'];
  return (
    <TechStackItem
      icon={<SiCplusplus color="default" className={`${iconSize}`} />}
      label="C++"
      url={url}
    />
  );
}

export function TSCMake() {
  return (
    <TechStackItem
      icon={
        <Image src={CMakeLogo} alt="CMake" className={iconHeight} height={48} />
      }
      label="CMake"
      url="https://cmake.org"
    />
  );
}

export function TSJava() {
  return (
    <TechStackItem
      icon={
        <Image
          src={JavaLogo}
          alt="Java"
          height={48}
          className={`${iconHeight} w-auto`}
        />
      }
      label="Java"
      url="https://www.java.com"
    />
  );
}

export function TSGithub() {
  return (
    <TechStackItem
      icon={
        <SiGithub
          color="default"
          className={`${iconSize} dark:fill-surface-on`}
        />
      }
      label="Github"
      url="https://github.com"
    />
  );
}

export function TSGithubActions() {
  return (
    <TechStackItem
      icon={<SiGithubactions color="default" className={`${iconSize}`} />}
      label="Github Actions"
      url="https://github.com/features/actions"
    />
  );
}
