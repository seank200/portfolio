import Container from "@components/Container";
import { LangProps, translator } from "@lib/i18n";
import Link from "next/link";
import Memoji from "./Memoji";

export default function HeroSection({ lang }: LangProps) {
  const t = translator(lang);
  const h1FontSize = t("text-4xl", "text-5xl");
  const buttons = (
    <>
      <HeroButton primary href="#introduction">
        {t("View portfolio", "포트폴리오 보기")}
      </HeroButton>
      <HeroButton href="#contacts">{t("Contact me", "연락하기")}</HeroButton>
    </>
  );
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <Container className="pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="text-center md:text-left md:mr-12">
          <h1
            className={`inline-block pb-6 bg-gradient-to-r from-ctp-mauve to-ctp-blue bg-clip-text text-transparent text-center md:text-left ${h1FontSize} md:text-5xl lg:text-6xl font-semibold`}
          >
            {t("Youngwoo Kim", "김영우")}
          </h1>
          <br />
          <p
            className={`text-xl md:text-2xl text-center md:text-left leading-relaxed md:leading-normal lg:leading-relaxed`}
          >
            {t(
              "Hi, I develop web servers for controlling and monitoring AI-driven robots at mass scale,",
              "안녕하세요, 백엔드 웹 개발자 김영우입니다.",
            )}
            <br className={t("hidden lg:inline", "inline")} />
            {t(
              "deployed on the edge and the cloud.",
              "AI 로봇 제어 및 관제를 위한 클라우드/엣지 서버 개발자로 현재 재직 중입니다.",
            )}
          </p>
          <div className="md:mt-16 lg:mt-24 hidden md:flex flex-row gap-4">
            {buttons}
          </div>
        </div>
        <Memoji className="mt-10 md:mt-0 mb-12 md:mb-0" lang={lang} />
      </Container>
      <Container className="flex md:hidden flex-row justify-center items-stretch gap-3">
        {buttons}
      </Container>
    </section>
  );
}

function HeroButton({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  const bgText: string = primary
    ? "bg-ctp-text text-background hover:bg-ctp-mauve"
    : "hover:text-ctp-mauve";
  return (
    <Link
      href={href}
      className={`px-6 py-2 rounded-lg border-2 border-ctp-text hover:border-ctp-mauve ${bgText} font-medium transition-colors`}
    >
      {children}
    </Link>
  );
}
