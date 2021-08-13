import { useRouter } from "next/router";
import { NavigationButton } from "../button";

export default function Navigation() {
  const { pathname } = useRouter();
  const isWorkActive = pathname === "/" || pathname.startsWith("/work");
  const isAboutActive = pathname === "/about";

  return (
    <nav>
      <NavigationButton
        href="/"
        isActive={isWorkActive}
        symbol="❀"
        title="Work"
      >
        Work
      </NavigationButton>
      <NavigationButton
        href="/about"
        isActive={isAboutActive}
        symbol="⊡"
        title="About"
      >
        About
      </NavigationButton>
    </nav>
  );
}
