import { Link } from "react-router-dom";
import { LogoIcon } from "../icons/Logo";

export default function Header() {
  return (
    <header id="header" className="bg-default">
      <div className="container m-auto py-10 px-6">
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
    </header>
  );
}
