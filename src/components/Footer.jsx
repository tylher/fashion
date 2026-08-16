import Link from "next/link";
import { FOOTER } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-8 pb-10 pt-20 text-paper md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
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

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <p className="font-ui text-xs uppercase tracking-wide text-paper/50">
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-paper/80 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
          <span className="font-ui text-xs text-paper/50">
            {FOOTER.copyright}
          </span>
          <div className="flex gap-6">
            {FOOTER.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-ui text-xs uppercase tracking-wide text-paper/50 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
