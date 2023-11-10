"use client";

import { MyLang, translator } from "@lib/i18n";
import Image from "next/image";
import archFull from "@images/projects/sigmate/arch_full.png";
import archConcise from "@images/projects/sigmate/arch_concise.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import Link from "next/link";

export default function SigmateArch({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  const [viewFull, setViewFull] = useState(true);

  useEffect(() => {
    setViewFull(window.innerWidth >= 768);
  }, []);

  return (
    <>
      <p>
        {t(
          "My role: I designed the following architecture myself for deploying Sigmate's backend server on Amazon Web Services (AWS). The architecture was designed to provide service continuity (no downtime) and securely protect sensitve resources from malicious actors.",
          "Sigmate 백엔드 서버를 배포하기 위한 아키텍쳐를 아래와 같이 직접 설계하여 아마존웹서비스(AWS)에 배포하여 운용하였습니다. 아키텍쳐 설계는 서비스 계속성 (continuity) 보장, 트래픽 변화에 대한 자동 대응, 사용자 개인정보 보호를 위한 적절한 보안 조치를 취할 수 있도록 설계되었습니다.",
        )}
      </p>
      <div className="mt-6 group relative block rounded p-6 bg-white dark:bg-white/90">
        {viewFull ? (
          <Image
            src={archFull}
            alt="Sigmate Backend Architecture"
            width={1280}
            className="w-full max-w-full h-auto"
            loading="lazy"
          />
        ) : (
          <Image
            src={archConcise}
            alt="Sigmate Backend Architecture"
            width={1280}
            className="w-full max-w-full h-auto"
            loading="lazy"
          />
        )}
        <Link
          href={`/images/projects/sigmate/arch_${
            viewFull ? "full" : "concise"
          }.png`}
          className="group-hover:opacity-100 opacity-0 absolute right-8 bottom-8 block hover:scale-103 rounded px-4 py-2 bg-ctp-mauve text-ctp-base font-medium transition"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2 h-em" />
          {t("Download", "다운로드")}
        </Link>
      </div>
      <button
        onClick={() => setViewFull((p) => !p)}
        className="my-6 w-full text-center text-ctp-mauve hover:underline"
      >
        {t(
          `View ${viewFull ? "concise" : "full"} diagram`,
          `아키텍쳐 ${viewFull ? "요약" : "상세"} 보기`,
        )}
      </button>
    </>
  );
}
