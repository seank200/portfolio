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
