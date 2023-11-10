import { HTMLAttributes } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export default function Heading({
  level,
  children,
  ...rest
}: {
  level: number;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLHeadingElement>) {
  switch (level) {
    case 1:
      return <h1 {...rest}>{children}</h1>;
    case 2:
      return <h2 {...rest}>{children}</h2>;
    case 3:
      return <h3 {...rest}>{children}</h3>;
    case 4:
      return <h4 {...rest}>{children}</h4>;
    case 5:
      return <h5 {...rest}>{children}</h5>;
    case 6:
      return <h6 {...rest}>{children}</h6>;
  }
}

// export default function Heading({
//   level,
//   className,
//   children,
// }: {
//   level: HeadingLevel;
//   className?: string;
//   children?: React.ReactNode;
// }) {
//   const inner =
//     typeof children === "string" ? (
//       <span className="inline-block bg-clip-text bg-gradient-to-r from-ctp-mauve to-ctp-blue group-hover/heading:text-transparent transition">
//         {children}
//       </span>
//     ) : (
//       children
//     );
//   switch (level) {
//     case 1:
//       return <h1 className={`${className || ""}`}>{inner}</h1>;
//     case 2:
//       return (
//         <h2
//           className={`group/heading mb-3 text-3xl md:text-[2.125rem] font-semibold ${
//             className || ""
//           }`}
//         >
//           {inner}
//         </h2>
//       );
//     case 3:
//       return (
//         <h3 className={`group/heading mb-3 ${className || ""}`}>{inner}</h3>
//       );
//     case 4:
//       return (
//         <h4 className={`group/heading mb-3 ${className || ""}`}>{inner}</h4>
//       );
//     case 5:
//       return <h5 className={`group/heading ${className || ""}`}>{inner}</h5>;
//     case 6:
//       return <h6 className={`group/heading ${className || ""}`}>{inner}</h6>;
//     default:
//       throw new Error(`Heading: Level "${level}" not implemented`);
//   }
// }
