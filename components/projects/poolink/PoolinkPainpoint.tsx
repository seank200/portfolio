import { SupportedLang, createIntlDict } from '@/i18n';
import Image from 'next/image';
import Container from '@/components/Container';
import poolinkPainPoint1 from '@images/poolink/2-1.png';
import poolinkPainPoint2 from '@images/poolink/2-2.png';
import poolinkPainPoint3 from '@images/poolink/2-3.png';
import poolinkSolution from '@images/poolink/3.png';

const dict = createIntlDict(
  {
    H_PROBLEM: 'Lost That Link You Found Yesterday?',
    PROBLEM: (
      <>
        The URL that you pasted somewhere -- <br />
        nowhere to be found when you actually need them.
      </>
    ),
    PAINPOINT_1: (
      <>
        Information lost
        <br />
        in endless scrolling
      </>
    ),
    PAINPOINT_2: (
      <>
        Ridiculously
        <br />
        long URLs
      </>
    ),
    PAINPOINT_3: (
      <>
        A tangled mess of
        <br />
        unsorted links
      </>
    ),
    CFA: (
      <>
        Never loose your links again <br className="hidden md:inline" />
        with <span className="text-poolink font-semibold">Poolink</span>!
      </>
    ),
  },
  {
    H_PROBLEM: '어제 저장한 그 링크, 지금 어디있나요?',
    PROBLEM: (
      <>
        분명히 어딘가 붙여넣기 해두었는데,
        <br />
        막상 필요할 때 찾으면 없는 링크들
      </>
    ),
    PAINPOINT_1: (
      <>
        끝없는 스크롤에 사라진
        <br />
        내가 찾던 그 부분
      </>
    ),
    PAINPOINT_2: (
      <>
        너무 길어 곤란했던
        <br />
        URL 주소
      </>
    ),
    PAINPOINT_3: (
      <>
        마구 뒤섞여 찾을 수 없는
        <br />내 즐겨찾기 속 링크들
      </>
    ),
    CFA: (
      <>
        이제 <span className="text-poolink font-semibold">Poolink</span>로<br />
        간편하게 정리하고 쉽게 찾으세요!
      </>
    ),
  }
);

export default function PoolinkPainpoint({ lang }: { lang: SupportedLang }) {
  const { H_PROBLEM, PROBLEM, PAINPOINT_1, PAINPOINT_2, PAINPOINT_3, CFA } =
    dict[lang];
  return (
    <Container>
      <H4 className="mb-2 text-center">{H_PROBLEM}</H4>
      <p className="mb-12 text-xl text-faded-var text-center leading-relaxed">
        {PROBLEM}
      </p>
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-12 lg:gap-24">
        <PainPoint
          img={
            <Image
              src={poolinkPainPoint1}
              alt="Pain Point 1"
              className="block relative left-2"
            />
          }
          label={PAINPOINT_1}
          className="px-10"
        />
        <PainPoint
          img={
            <Image
              src={poolinkPainPoint2}
              alt="Pain Point 2"
              className="block relative top-1"
            />
          }
          label={PAINPOINT_2}
          className="px-4"
        />
        <PainPoint
          img={
            <Image
              src={poolinkPainPoint3}
              alt="Pain Point 3"
              className="block relative right-1"
            />
          }
          label={PAINPOINT_3}
          className="px-10"
        />
      </div>
      <div>
        <Image
          src={poolinkSolution}
          alt="Poolink"
          className="block w-full max-w-lg mt-36 mx-auto"
        />
      </div>
      <H4 className="text-center">{CFA}</H4>
    </Container>
  );
}

function H4({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={`mt-12 text-3xl text-background-on font-bold leading-normal ${
        className || ''
      }`}
    >
      {children}
    </h4>
  );
}

function PainPoint({
  img,
  label,
  className,
}: {
  img: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center">
      <div className="flex flex-col items-center">
        <div
          className={
            'flex justify-center items-center w-48 h-48 mb-4 rounded-full border-4 border-secondary bg-surface ' +
            (className || '')
          }
        >
          {img}
        </div>
        <p className="text-xl text-center font-semibold">{label}</p>
      </div>
    </div>
  );
}
