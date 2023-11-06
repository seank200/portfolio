import Container from "@components/Container";

export default function Breadcrumbs() {
  // const bcClass = scrollY > SCROLL_TOP_THRSH ? "opacity-100" : "opacity-0";
  return (
    <div
      className={`z-10 absolute top-full left-0 right-0 py-1 bg-background text-xs transition-all`}
    >
      <Container>
        {`Test  »  In  »  Another  »  Test  »  Breadcrumbs!`}
      </Container>
    </div>
  );
}
