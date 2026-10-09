import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS } from "./brand";
import { SERVICES } from "./serviceCatalog";

const socials = [
  { icon: Instagram, label: "Instagram", href: BRAND.instagramHref },
  { icon: Facebook, label: "Facebook", href: BRAND.instagramHref },
  { icon: Linkedin, label: "LinkedIn", href: BRAND.instagramHref },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              BroBax officia nobilia aquarum et calefactionis praebet, accuratione, fide et
              perspicuitate innixa — a simplici faucetis stillantibus usque ad integra systemata
              calefactionis.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group press grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-brass/60 hover:text-brass"
                >
                  <social.icon className="icon-pop h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navigatio pedis paginae">
            <h2 className="eyebrow">Navigatio</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-nudge text-sm text-muted-foreground hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Officia</h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="link-nudge text-sm text-muted-foreground hover:text-brass"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Contactus</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="link-nudge text-sm text-muted-foreground hover:text-brass"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nudge text-sm text-muted-foreground hover:text-brass"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Nuntius WhatsApp {BRAND.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="link-nudge text-sm break-all text-muted-foreground hover:text-brass"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nudge text-sm text-muted-foreground hover:text-brass"
                >
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Instagram {BRAND.instagramDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" aria-hidden="true" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BroBax. Omnia iura reservata.</p>
          <p>
            Designatum et aedificatum a{" "}
            <a
              href={BRAND.portfolioHref}
              target="_blank"
              rel="noopener noreferrer"
              className="sweep-underline text-brass-soft transition-colors hover:text-brass"
            >
              BroBex
            </a>{" "}
            —{" "}
            <a
              href={BRAND.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="sweep-underline hover:text-brass"
            >
              {BRAND.instagramDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
