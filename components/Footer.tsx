import { MyLang } from "@lib/i18n";
import Container from "./Container";
import MyLink from "./MyLink";

export default function Footer({ lang }: { lang: MyLang }) {
  return (
    <footer className="py-16 w-full bg-ctp-mantle">
      <Container className="flex flex-col md:flex-row md:justify-between md:items-center">
        <MyLink href="/" lang={lang} className="text-lg font-medium">
          Youngwoo Kim
        </MyLink>
        <nav>
          <ul className="mt-8 md:mt-0 flex flex-row flex-wrap gap-6">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Resume</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
