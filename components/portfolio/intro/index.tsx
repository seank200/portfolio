import { MyLang, translator } from "@lib/i18n";
import Heading from "../Heading";

export default function IntroSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  const bodyKor = (
    <>
      <Heading
        level={3}
        className="mt-4 mb-2 text-lg xl:text-xl font-bold text-ctp-teal"
      >
        #도전
      </Heading>
      <p className="leading-relaxed">
        저는 소프트웨어 개발을 통해 실생활 문제를 해결하기 위해 끊임없이{" "}
        <span className="font-semibold text-ctp-teal break-keep">도전</span>
        하는 개발자입니다. 이러한 도전들을 통해 웹 서비스 개발, 클라우드
        아키텍쳐 구축 및 배포를 포함한 전문 지식과 다양한 실무 경험을
        쌓았습니다.
      </p>
      <Heading
        level={3}
        className="mt-4 mb-2 text-lg xl:text-xl font-bold text-ctp-blue"
      >
        #성장
      </Heading>
      <p className="leading-relaxed">
        저는 꾸준한 학습과 자기 분석을 통해 끊임없이{" "}
        <span className="font-semibold text-ctp-blue break-keep">성장</span>하는
        사람입니다. 주기적으로 최신 기술 트렌드를 분석하고, 과거 경험에서의
        개선점을 고민하는 습관을 통해, 다양한 프로젝트를 성공적으로
        이끌었습니다.
      </p>
      <Heading
        level={3}
        className="mt-4 mb-2 text-lg xl:text-xl font-bold text-ctp-mauve"
      >
        #팀워크
      </Heading>
      <p className="leading-relaxed">
        다양한 문화권 출신의 팀원들과의 협업 경험을 통해 어떠한 팀과도 빠르게
        적응하고{" "}
        <span className="font-semibold text-ctp-mauve break-keep">팀워크</span>
        를 발휘할 수 있는 소통/언어 능력을 보유하고 있습니다.
      </p>
    </>
  );
  const bodyEng = (
    <>
      <Heading
        level={3}
        className="mt-4 mb-2 text-lg xl:text-xl font-bold text-ctp-teal inline"
      >
        I am a developer{" "}
      </Heading>
      <p className="inline leading-relaxed">
        who finds great joy in challenging myself to solve everyday problems
        with my own software.
      </p>
      <div className="my-8 block" />
      <Heading
        level={3}
        className="mt-4 mb-2 text-lg xl:text-xl font-bold text-ctp-blue inline"
      >
        I have expertise{" "}
      </Heading>
      <p className="inline leading-relaxed">
        and various experiences in full stack web development and managing cloud
        computing infrastructures.
      </p>
      <div className="my-8 block" />
      <Heading
        level={3}
        className="mt-4 mb-2 text-lg xl:text-xl font-bold text-ctp-mauve inline"
      >
        I am a natural team player,{" "}
      </Heading>
      <p className="inline leading-relaxed">
        with the communication skills obtained from various collaboration
        experiences with teammates from a wide range of cultural backgrounds.
      </p>
    </>
  );

  return (
    <section
      id="introduction"
      className="mx-auto max-w-xl xl:max-w-2xl min-h-screen px-12 flex flex-col justify-center items-center text-lg xl:text-xl text-left"
    >
      <Heading level={2} className="hidden">
        {t("Introduction", "소개")}
      </Heading>
      <div>{t(bodyEng, bodyKor)}</div>
    </section>
  );
}
