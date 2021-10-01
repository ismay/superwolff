import ActiveLink from "../active-link";
import s from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ActiveLink activeClassName="active" href="/">
        <a className={s.link} title="Work">
          Work
        </a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/about">
        <a className={s.link} title="About">
          About
        </a>
      </ActiveLink>
    </nav>
  );
}
