import Link from "next/link";
import { FOOTER } from "../data/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-8 pb-10 pt-20 text-paper md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-xs">
            <p className="font-display text-2xl font-bold">{FOOTER.brand}</p>
            <p className="voice mt-3 text-base text-paper/70">
              {FOOTER.tagline}
            </p>

            <div className="mt-6 flex gap-3">
              {FOOTER.socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-paper/50 hover:text-paper"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="flex gap-8 md:pt-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-ui text-sm text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
          <span className="font-ui text-xs text-paper/50">
              Designed by{" "}
            
            <a href="https://barakhel.com"
              target="_blank"
              rel="noreferrer"
              className="text-paper/70 underline underline-offset-2 transition-colors hover:text-paper"
            >
              barakhel
            </a>
          </span>
          {/* <div className="flex gap-6">
            {FOOTER.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-ui text-xs uppercase tracking-wide text-paper/50 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
