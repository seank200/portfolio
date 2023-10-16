import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import Container from '@/components/Container';
import Section from '@/components/Section';
import SectionH2 from '@/components/SectionH2';
import { SupportedLang, createTranslator } from '@/i18n';
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPm2,
  SiReact,
  SiSpringboot,
  SiTensorflow,
} from '@icons-pack/react-simple-icons';
import TypeScriptLogo from '@images/tech/typescript.png';
import PythonLogo from '@images/tech/python.png';
import CppLogo from '@images/tech/cpp.png';
import MYSQLLogo from '@images/tech/mysql.png';
import CMakeLogo from '@images/tech/cmake.png';
import DockerLogo from '@images/tech/docker.png';
import JavaLogo from '@images/tech/java.png';
import PostgreSQLLogo from '@images/tech/postgresql.png';
import MPIForumLogo from '@images/tech/mpi-forum.png';

type SkillItemVariant = 'small' | 'normal' | 'large';

export default function SkillsetSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  const iconHeight = 48;
  const iconSize = (size: SkillItemVariant) =>
    size === 'large' ? 'w-em-lg' : 'w-em-md';

  const skills = [
    {
      label: t('TypeScript', '타입스크립트'),
      level: 5,
      icon: (size: SkillItemVariant) => (
        <Image
          src={TypeScriptLogo}
          alt="TypeScript"
          className={`w-auto ${iconSize(size)}`}
          height={iconHeight}
        />
      ),
      url: 'https://www.typescriptlang.org',
    },
    {
      label: 'NodeJS',
      level: 5,
      desc: 'TypeScript',
      icon: (size: SkillItemVariant) => (
        <SiNodedotjs color="default" className={iconSize(size)} />
      ),
      url: 'https://nodejs.dev',
    },
    {
      label: 'Next',
      level: 5,
      desc: 'TypeScript',
      icon: (size: SkillItemVariant) => (
        <SiNextdotjs
          color="default"
          className={`dark:fill-surface-on ${iconSize(size)}`}
        />
      ),
      url: 'https://nextjs.org',
    },
    {
      label: t('React', '리액트JS'),
      level: 5,
      desc: 'TypeScript',
      icon: (size: SkillItemVariant) => (
        <SiReact color="default" className={iconSize(size)} />
      ),
      url: 'https://react.dev',
    },
    {
      label: t('Python', '파이썬'),
      level: 5,
      icon: (size: SkillItemVariant) => (
        <Image
          src={PythonLogo}
          alt="Python"
          className={`w-auto ${iconSize(size)}`}
          height={iconHeight}
        />
      ),
      url: 'https://www.python.org',
    },
    {
      label: 'C/C++',
      level: 4,
      icon: (size: SkillItemVariant) => (
        <Image
          src={CppLogo}
          alt="C/C++"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: t(
        'https://en.wikipedia.org/wiki/C%2B%2B',
        'https://ko.wikipedia.org/wiki/C%2B%2B'
      ),
    },
    {
      label: 'MYSQL',
      level: 4,
      icon: (size: SkillItemVariant) => (
        <Image
          src={MYSQLLogo}
          alt="MYSQL"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://www.mysql.com',
    },
    {
      label: t('AWS', '아마존웹서비스'),
      level: 4,
      icon: (size: SkillItemVariant) => (
        <SiAmazonaws
          color="default"
          className={`${iconSize(size)} dark:fill-surface-on`}
        />
      ),
      url: 'https://aws.amazon.com/',
    },
    {
      label: 'Git',
      level: 4,
      icon: (size: SkillItemVariant) => (
        <SiGit color="default" className={`${iconSize(size)}`} />
      ),
      url: 'https://git-scm.com',
    },
    {
      label: 'AWS DynamoDB',
      level: 3,
      icon: (size: SkillItemVariant) => (
        <SiAmazondynamodb
          color="default"
          className={`${iconSize(size)} dark:fill-surface-on`}
        />
      ),
      url: 'https://aws.amazon.com/dynamodb/',
    },
    {
      label: 'GNU Bash',
      level: 3,
      icon: (size: SkillItemVariant) => (
        <SiGnubash
          color="default"
          className={`${iconSize(size)} dark:fill-surface-on`}
        />
      ),
      url: 'https://www.gnu.org/software/bash/',
    },
    {
      label: t('Linux', '리눅스'),
      level: 3,
      icon: (size: SkillItemVariant) => (
        <Image
          src="/images/tech/Tux.svg"
          alt="Tux"
          width={iconHeight}
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/',
    },
    {
      label: t('Docker', '도커'),
      level: 3,
      icon: (size: SkillItemVariant) => (
        <Image
          src={DockerLogo}
          alt="Docker"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://www.docker.com',
    },
    {
      label: t('Tensorflow', '텐서플로우'),
      level: 3,
      icon: (size: SkillItemVariant) => (
        <SiTensorflow color="default" className={iconSize(size)} />
      ),
      url: 'https://www.tensorflow.org',
    },
    {
      label: 'MPI',
      level: 3,
      icon: (size: SkillItemVariant) => (
        <Image
          src={MPIForumLogo}
          alt="MPI Forum"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://www.mpi-forum.org',
    },
    {
      label: t('Java', '자바'),
      level: 2,
      icon: (size: SkillItemVariant) => (
        <Image
          src={JavaLogo}
          alt="Java"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://www.java.com',
    },
    {
      label: t('SpringBoot', '스프링'),
      level: 2,
      icon: (size: SkillItemVariant) => (
        <SiSpringboot color="default" className={`${iconSize(size)}`} />
      ),
      url: 'https://spring.io/projects/spring-boot',
    },
    {
      label: 'CMake',
      level: 2,
      icon: (size: SkillItemVariant) => (
        <Image
          src={CMakeLogo}
          alt="CMake"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://cmake.org',
    },
    {
      label: 'PM2',
      level: 2,
      icon: (size: SkillItemVariant) => (
        <SiPm2
          color="default"
          className={`${iconSize(size)} dark:fill-surface-on`}
        />
      ),
      url: 'https://pm2.keymetrics.io',
    },
    {
      label: 'Github Actions',
      level: 2,
      icon: (size: SkillItemVariant) => (
        <SiGithubactions
          color="default"
          className={`${iconSize(size)} dark:fill-surface-on`}
        />
      ),
      url: 'https://github.com/features/actions',
    },
    {
      label: 'PostgreSQL',
      level: 1,
      icon: (size: SkillItemVariant) => (
        <Image
          src={PostgreSQLLogo}
          alt="PostgreSQL"
          height={iconHeight}
          className={`w-auto ${iconSize(size)}`}
        />
      ),
      url: 'https://www.postgresql.org',
    },
    {
      label: 'MongoDB',
      level: 1,
      icon: (size: SkillItemVariant) => (
        <SiMongodb color="default" className={iconSize(size)} />
      ),
      url: 'https://www.mongodb.com',
    },
  ];

  const proficient = skills.filter(({ level }) => level === 5);
  const moderate = skills.filter(({ level }) => 3 <= level && level < 5);
  const basic = skills.filter(({ level }) => level <= 2);

  return (
    <Section id="skills">
      <Container>
        <SectionH2 href="#skills">{t('Skillsets', '기술 스택')}</SectionH2>
        <H3>{t('Proficient', '숙련도: 매우 높음')}</H3>
        <SkillList className="grid-cols-1" size="large">
          {proficient.map(({ label, icon, level, desc, url }) => (
            <SkillItem
              key={label}
              label={label}
              icon={icon && icon('large')}
              level={level}
              desc={desc}
              size="large"
              url={url}
            />
          ))}
        </SkillList>
        <H3>{t('Moderate', '숙련도: 높음')}</H3>
        <SkillList className="grid-cols-lg" size="normal">
          {moderate.map(({ label, icon, level, desc, url }) => (
            <SkillItem
              key={label}
              label={label}
              icon={icon && icon('normal')}
              level={level}
              desc={desc}
              url={url}
            />
          ))}
        </SkillList>
        <H3></H3>
        <H3>{t('Basic', '숙련도: 기본')}</H3>
        <SkillList className="grid-cols-sm" size="small">
          {basic.map(({ label, icon, level, desc, url }) => (
            <SkillItem
              key={label}
              label={label}
              icon={icon && icon('small')}
              level={level}
              desc={desc}
              size="small"
              url={url}
            />
          ))}
        </SkillList>
      </Container>
    </Section>
  );
}

function H3({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="mt-10 mb-4 text-xl text-faded font-semibold leading-none">
      {children}
    </h3>
  );
}

function Stars({
  rating,
  className,
  size = 'normal',
}: {
  rating: number;
  className?: string;
  size?: SkillItemVariant;
}) {
  const stars: boolean[] = Array(rating)
    .fill(true)
    .concat(Array(5 - rating).fill(false));
  return (
    <p className={`flex items-center text-faded ${className}`}>
      {stars.map((filled, idx) => (
        <FontAwesomeIcon
          key={idx}
          icon={filled ? faStarSolid : faStarRegular}
          className={`text-xs text-faded/50 ${
            filled ? 'text-yellow-400/100' : ''
          } ${size === 'small' ? 'md:text-[0.5rem]' : ''}`}
        />
      ))}
    </p>
  );
}

function SkillList({
  children,
  className,
  size,
}: {
  children?: React.ReactNode;
  className?: string;
  size: SkillItemVariant;
}) {
  const gap = size === 'small' ? 'gap-x-8 gap-y-4' : 'gap-4';
  return (
    <ul className={`mt-2 grow-[1] grid ${gap} ${className}`}>{children}</ul>
  );
}

function SkillItem({
  label,
  icon,
  level,
  desc,
  size = 'normal',
  url,
}: {
  label: string;
  icon?: React.ReactNode;
  level: number;
  desc?: string;
  size?: SkillItemVariant;
  url: string;
}) {
  return (
    <li
      className={`rounded flex justify-between items-center gap-2 ${
        size === 'small'
          ? ''
          : size === 'large'
          ? 'px-5 py-4 bg-surface hover:scale-101'
          : 'md:px-5 md:py-4 md:bg-surface hover:scale-102'
      } transition`}
    >
      <a
        className="group flex gap-5 items-center"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h4
          className={`flex items-center gap-3 ${
            size === 'large'
              ? 'text-lg'
              : size === 'small'
              ? 'text-base md:text-sm'
              : 'text-base'
          } font-medium group-hover:underline`}
        >
          {icon}
          {label}
        </h4>
        {size === 'large' && desc && (
          <p className="hidden md:block text-xs text-faded">{desc}</p>
        )}
      </a>
      <Stars rating={level} size={size} />
    </li>
  );
}
