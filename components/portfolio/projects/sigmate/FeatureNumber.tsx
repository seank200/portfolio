export default function FeatureNumber({
  num,
  bg,
}: {
  num?: number;
  bg?: boolean;
}) {
  return (
    <span
      className={`text-ctp-blue text-3xl leading-none font-extrabold ${
        bg
          ? "mr-8 w-12 h-12 rounded-lg shadow bg-white dark:bg-white/0 border-2 dark:border-ctp-blue flex justify-center items-center"
          : "mr-10"
      }`}
    >
      {num}
    </span>
  );
}
