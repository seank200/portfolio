import ListItem from "@components/ListItem";
import { MyLang } from "@lib/i18n";

export default function SigmateRoleSummary({ lang }: { lang: MyLang }) {
  return (
    <ul>
      <ListItem>Chief Technology Officer (CTO)</ListItem>
      <ListItem>
        Developed of web API server with custom wiki engine, and deployed it on
        Amazon Web Services (AWS)
      </ListItem>
      <ListItem>
        Continuous project managment and service maintenance for over a year
      </ListItem>
    </ul>
  );
}
