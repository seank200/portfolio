import TechSkill, { TSProps } from ".";
import mysqlLogo from "@images/tech/mysql.png";

export default function TSMysql({ variant }: TSProps) {
  return (
    <TechSkill
      src={mysqlLogo}
      label="MYSQL"
      href="https://www.mysql.com"
      variant={variant}
    />
  );
}
