import { MyLang, translator } from "@lib/i18n";
import Section from "../Section";

export default function IntroSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const bodyKor = (
    <>
      <H3 className="text-ctp-teal">#도전</H3>
      <P>
        저는 소프트웨어 개발을 통해 실생활 문제를 해결하기 위해 끊임없이{" "}
        <span className="font-semibold text-ctp-teal break-keep">도전</span>
        하는 사람입니다. 이러한 도전들을 통해 웹 서비스 개발, 클라우드 배포를
        포함한 전문 지식과 다양한 실무 경험을 쌓았습니다.
      </P>
      <H3 className="text-ctp-blue">#성장</H3>
      <P>
        꾸준한 학습과 자기 분석을 통해 끊임없이{" "}
        <span className="font-semibold text-ctp-blue break-keep">성장</span>하는
        사람입니다. 주기적으로 최신 기술 트렌드를 분석하고, 과거 경험에서의
        개선점을 고민하는 습관을 통해, 다양한 프로젝트를 성공적으로
        이끌었습니다.
      </P>
      <H3 className="text-ctp-mauve">#팀워크</H3>
      <P>
        다양한 문화권 출신의 팀원들과의 협업 경험을 통해 어떠한 팀과도 빠르게
        적응하고{" "}
        <span className="font-semibold text-ctp-mauve break-keep">팀워크</span>
        를 발휘할 수 있는 소통/언어 능력을 보유하고 있습니다.
      </P>
    </>
  );
  const bodyEng = (
    <>
      <H3 className="text-ctp-teal inline">
        I am a developer who finds great joy{" "}
      </H3>
      <P className="inline">
        in challenging myself to solve everyday problems with my own software.
        These challenges, including my role as a CTO in a tech startup, allowed
        me to obtain expertise and real-world experience in full stack web
        development and deploying cloud computing infrastructures.
      </P>
      <div className="my-8 block" />
      <H3 className="text-ctp-blue inline">
        I thrive to become a better person every day,{" "}
      </H3>
      <P className="inline">
        by continuing to learn new technology and proactively looking back at my
        work to find places of improvement in my work.
      </P>
      <div className="my-8 block" />
      <H3 className="text-ctp-mauve inline">I am a natural team player.</H3>
      <P className="inline">
        I have the communication skills that comes from various collaboration
        experiences with teammates from a wide range of educational and cultural
        backgrounds. I can fit into any team and get started in no time.
      </P>
    </>
  );

  const textSize = t("text-lg", "text-xl");

  return (
    <Section
      level={2}
      id="intro"
      heading={t("Introduction", "소개")}
      className="min-h-screen py-12 flex justify-center items-center"
      hideHeading
    >
      <article
        className={`inline-block max-w-2xl px-12 ${textSize} text-left leading-relaxed`}
      >
        {t(bodyEng, bodyKor)}
      </article>
    </Section>
  );
}

function H3({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h3 className={`mb-1 font-bold ${className || ""}`}>{children}</h3>;
}

function P({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`mb-8 last:mb-0 leading-relaxed ${className || ""}`}>
      {children}
    </p>
  );
}
