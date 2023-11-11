import { MyLang, translator } from "@lib/i18n";

export default function RolePeriod({
  lang,
  role,
  period,
}: {
  lang: MyLang;
  role: string;
  period: {
    start: Date;
    end?: Date;
  };
}) {
  const t = translator(lang);
  const dt = new Intl.DateTimeFormat(lang, { year: "numeric", month: "short" });

  const fStart = dt.format(period.start);
  const fEnd = period.end ? dt.format(period.end) : t("Current", "현재");

  return (
    <p className="flex items-center gap-4 text-lg font-semibold">
      {`${role} `}
      <span className="text-base font-normal">
        {fStart} - {fEnd}
      </span>
    </p>
  );
}
