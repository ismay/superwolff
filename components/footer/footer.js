import { FooterButton } from "../button";
import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={s.container}>
      <FooterButton
        href="mailto:superwolff@superwolff.nl"
        symbol="●"
        title="Email me"
      >
        Email
      </FooterButton>
      <FooterButton
        href="https://tinyletter.com/superwolff"
        symbol="᳁"
        title="Subscribe to my newsletter"
      >
        Newsletter
      </FooterButton>
      <FooterButton
        href="https://post.lurk.org/@superwolff"
        rel="me"
        symbol="✗"
        title="Follow me on Mastodon"
      >
        Mastodon
      </FooterButton>
      <FooterButton
        href="https://theartling.com/en/print-artists/superwolff"
        symbol="✓"
        title="Buy prints at The Artling"
      >
        The Artling
      </FooterButton>
    </footer>
  );
}
