import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Factory,
  Gauge,
  HardHat,
  Layers3,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  X,
} from "lucide-react";

import heroImage from "@/assets/buildmart-hero.jpg";
import aboutImage from "@/assets/buildmart-about.jpg";
import productsImage from "@/assets/buildmart-products.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BuildMart | Hardware Wholesale in Gwalior" },
      {
        name: "description",
        content:
          "BuildMart by Kwality Hardware supplies screws, nuts, bolts, washers and fasteners for wholesale requirements in Gwalior.",
      },
      { property: "og:title", content: "BuildMart | Hardware Wholesale in Gwalior" },
      {
        property: "og:description",
        content: "A next-generation wholesale hardware brand built on the experience of Kwality Hardware.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BuildMartHome,
});

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products", "#products"],
  ["Industries", "#industries"],
  ["Why BuildMart", "#why-buildmart"],
  ["Contact", "#contact"],
] as const;

const products = [
  ["01", "Screws", "Precision fastening solutions for a wide range of applications."],
  ["02", "Nuts", "Reliable threaded components engineered for secure connections."],
  ["03", "Bolts", "Strong fastening solutions for construction and industry."],
  ["04", "Washers", "Designed for stability, load distribution and secure fastening."],
  ["05", "Fasteners", "A complete range of essential industrial fastening solutions."],
] as const;

const industries = [
  { name: "Construction", icon: HardHat, imagePosition: "8%" },
  { name: "Manufacturing", icon: Factory, imagePosition: "29%" },
  { name: "Fabrication", icon: Wrench, imagePosition: "49%" },
  { name: "Engineering", icon: Gauge, imagePosition: "68%" },
  { name: "Automotive", icon: Layers3, imagePosition: "84%" },
  { name: "Infrastructure", icon: Building2, imagePosition: "98%" },
] as const;

function BrandName({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-name" aria-label="BuildMart">
      <span>BUILD</span><span className="text-primary">MART</span>
      {!compact && <small>Hardware Wholesale</small>}
    </span>
  );
}

function BuildMartHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className={`site-header ${scrolled ? "site-header-solid" : ""}`}>
        <div className="section-shell flex h-20 items-center justify-between gap-6">
          <a href="#home" className="shrink-0" aria-label="BuildMart home"><BrandName /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild className="hidden h-11 rounded-none px-6 uppercase tracking-widest sm:inline-flex">
              <a href="#contact">Get a quote <ArrowRight /></a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-11 w-11 rounded-none lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-menu lg:hidden" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ChevronRight /></a>
            ))}
            <Button asChild className="mt-3 h-12 w-full rounded-none uppercase tracking-widest">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Request a quote</a>
            </Button>
          </nav>
        )}
      </header>

      <section id="home" className="hero-section scroll-mt-20">
        <img src={heroImage} alt="Steel bolts, nuts, washers and screws under blue and gold studio lighting" width={1920} height={1200} className="hero-image" />
        <div className="hero-overlay" />
        <div className="technical-grid" aria-hidden="true" />
        <div className="section-shell relative z-10 flex min-h-[900px] items-center py-36 lg:min-h-screen">
          <div className="max-w-4xl">
            <p className="eyebrow mb-8"><span /> A brand by Kwality Hardware</p>
            <div className="mb-8"><BrandName /></div>
            <h1 className="display-title max-w-4xl">Built on experience.<br /><span>Ready for what&apos;s next.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              BuildMart brings the experience of Kwality Hardware into a modern wholesale hardware brand — supplying essential fastening solutions with a focus on quality, reliability and value.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-none px-8 uppercase tracking-widest">
                <a href="#contact">Request a quote <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-none px-8 uppercase tracking-widest backdrop-blur-sm">
                <a href="#products">Explore products <ArrowDownRight /></a>
              </Button>
            </div>
            <div className="mt-14 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-steel">
              <span className="h-px w-10 bg-accent" /> Lohiya Bazar • Gwalior
            </div>
          </div>
        </div>
        <div className="hero-caption"><span>Build Mart</span><span>By Kwality Hardware</span><span>Lohiya Bazar • Gwalior</span></div>
      </section>

      <section className="trust-strip" aria-label="BuildMart commitments">
        <div className="section-shell grid grid-cols-2 lg:grid-cols-4">
          {[
            [ShieldCheck, "Quality assured"], [Truck, "Consistent supply"], [PackageCheck, "Competitive value"], [Building2, "B2B focused"],
          ].map(([Icon, text]) => (
            <div key={text as string} className="trust-item"><Icon /><span>{text as string}</span></div>
          ))}
        </div>
      </section>

      <section id="about" className="section-space scroll-mt-20">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="image-frame">
            <img src={aboutImage} alt="Precision steel fasteners arranged on a brushed metal surface" loading="lazy" width={1408} height={1056} className="h-full w-full object-cover" />
            <div className="image-tag"><span>Established hardware experience</span><strong>Gwalior • Madhya Pradesh</strong></div>
          </div>
          <div>
            <p className="eyebrow"><span /> Our foundation</p>
            <h2 className="section-title mt-6">The experience<br />behind BuildMart.</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
              <p>BuildMart is the next chapter of Kwality Hardware — combining established experience in the hardware trade with a modern approach to wholesale supply.</p>
              <p>From screws and nuts to bolts, washers and fasteners, our focus is simple: dependable products, reliable supply and strong business relationships.</p>
            </div>
            <blockquote className="brand-quote">“Every connection matters.”</blockquote>
          </div>
        </div>
      </section>

      <section className="foundation-band">
        <div className="section-shell">
          <p className="eyebrow"><span /> The experience behind BuildMart</p>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              ["01", "Established experience", "Built on the foundation of Kwality Hardware."],
              ["02", "Local expertise", "A deep understanding of the hardware market in Gwalior."],
              ["03", "Next-generation supply", "A modern approach to wholesale hardware distribution."],
            ].map(([n, title, copy]) => (
              <article key={n} className="foundation-cell"><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section-space scroll-mt-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div><p className="eyebrow"><span /> Product range</p><h2 className="section-title mt-6">The essentials.<br />Done right.</h2></div>
            <p className="max-w-md leading-7 text-muted-foreground">Core fastening products selected for businesses that value dependable performance and consistent supply.</p>
          </div>
          <div className="product-list mt-16">
            {products.map(([number, title, copy], index) => (
              <article key={title} className="product-row group">
                <span className="product-number">{number}</span>
                <div className="product-crop"><img src={productsImage} alt="" loading="lazy" width={1920} height={912} style={{ objectPosition: `${index * 24}% 70%` }} /></div>
                <h3>{title}</h3><p>{copy}</p><ArrowDownRight />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <img src={productsImage} alt="Hex bolts, nuts, washers, screws and threaded fasteners in studio lighting" loading="lazy" width={1920} height={912} />
        <div className="showcase-shade" />
        <div className="section-shell relative z-10 py-24 sm:py-32">
          <p className="eyebrow"><span /> Engineered essentials</p>
          <h2 className="section-title mt-6 max-w-2xl">Hardware that holds<br />the work together.</h2>
          <div className="showcase-labels">
            {['Hex bolts','Hex nuts','Washers','Self tapping screws','Industrial fasteners'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <Button asChild variant="outline" className="mt-10 h-12 rounded-none px-6 uppercase tracking-widest"><a href="#contact">View product range <ArrowRight /></a></Button>
        </div>
      </section>

      <section id="industries" className="section-space scroll-mt-20">
        <div className="section-shell">
          <p className="eyebrow"><span /> Industries we serve</p>
          <h2 className="section-title mt-6">Built for every<br />connection.</h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ name, icon: Icon, imagePosition }) => (
              <article key={name} className="industry-item">
                <img src={aboutImage} alt="" loading="lazy" width={1408} height={1056} style={{ objectPosition: imagePosition }} />
                <div className="industry-shade" /><Icon /><span>{name}</span><ArrowDownRight className="industry-arrow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-buildmart" className="why-section scroll-mt-20">
        <div className="section-shell py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="eyebrow"><span /> Why BuildMart?</p><h2 className="section-title mt-6">More than hardware.<br /><span>A stronger supply chain.</span></h2></div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {[
                [ShieldCheck,"Quality","Reliable hardware for demanding applications."],
                [Truck,"Reliability","Built around dependable wholesale supply."],
                [Layers3,"Range","Essential fastening products under one roof."],
                [Sparkles,"Value","Competitive wholesale solutions for businesses."],
              ].map(([Icon,title,copy]) => (
                <article key={title as string} className="value-cell"><Icon /><h3>{title as string}</h3><p>{copy as string}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <img src={heroImage} alt="" loading="lazy" width={1920} height={1200} />
        <div className="cta-shade" />
        <div className="section-shell relative z-10 py-28 sm:py-40">
          <p className="eyebrow"><span /> Wholesale enquiries</p>
          <h2 className="section-title mt-6">Your requirement.<br />Our supply.</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Whether you&apos;re sourcing for construction, fabrication, manufacturing or engineering, talk to BuildMart about your wholesale hardware requirements.</p>
          <Button asChild size="lg" className="mt-10 h-14 rounded-none px-8 uppercase tracking-widest"><a href="#contact">Request a quote <ArrowRight /></a></Button>
        </div>
      </section>

      <section className="future-band">
        <div className="section-shell grid gap-8 py-20 lg:grid-cols-[.4fr_1.6fr] lg:items-end">
          <p className="eyebrow"><span /> Coming soon</p>
          <p className="future-copy">Bigger supply.<br /><span>Stronger solutions.</span><br />For a stronger tomorrow.</p>
        </div>
      </section>

      <section id="contact" className="section-space scroll-mt-20">
        <div className="section-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow"><span /> B2B enquiries</p><h2 className="section-title mt-6">Let&apos;s build<br />together.</h2>
            <div className="contact-identity mt-12">
              <BrandName />
              <p>A brand by Kwality Hardware</p><address>Lohiya Bazar<br />Gwalior, Madhya Pradesh</address>
              <p className="mt-7 text-steel">Hardware Wholesale</p><p>Screws · Nuts · Bolts · Washers · Fasteners</p>
              <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground"><p>Phone, email & business hours</p><strong className="mt-1 block font-medium text-foreground">Contact details coming soon</strong></div>
            </div>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Name"><Input id="name" name="name" required placeholder="Your full name" /></Field>
              <Field id="company" label="Company name"><Input id="company" name="company" required placeholder="Business name" /></Field>
              <Field id="phone" label="Phone number"><Input id="phone" name="phone" type="tel" required pattern="[0-9+() -]{8,}" placeholder="Your contact number" /></Field>
              <Field id="email" label="Email"><Input id="email" name="email" type="email" required placeholder="work@company.com" /></Field>
              <Field id="product" label="Product requirement"><Input id="product" name="product" required placeholder="e.g. Hex bolts, M10" /></Field>
              <Field id="quantity" label="Approximate quantity"><Input id="quantity" name="quantity" required placeholder="e.g. 5,000 pieces" /></Field>
            </div>
            <Field id="message" label="Message" className="mt-6"><Textarea id="message" name="message" required rows={5} placeholder="Tell us about specifications, grade, finish or delivery requirements" /></Field>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" className="h-14 rounded-none px-8 uppercase tracking-widest">Submit enquiry <ArrowRight /></Button>
              {submitted && <p role="status" className="flex items-center gap-2 text-sm text-success"><Check /> Enquiry captured. Our contact details will be available soon.</p>}
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell py-16">
          <div className="grid gap-12 border-b border-border pb-14 md:grid-cols-2 lg:grid-cols-4">
            <div><BrandName /><p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">A brand by Kwality Hardware.<br />Same essentials. A stronger tomorrow.</p></div>
            <FooterLinks title="Company" links={[["About","#about"],["Industries","#industries"],["Why BuildMart","#why-buildmart"],["Contact","#contact"]]} />
            <FooterLinks title="Products" links={products.map(([,name]) => [name,"#products"])} />
            <div><h3 className="footer-heading">Location</h3><address className="mt-5 text-sm not-italic leading-7 text-muted-foreground">Lohiya Bazar<br />Gwalior, Madhya Pradesh<br />India</address><Button asChild variant="link" className="mt-4 h-auto p-0 uppercase tracking-widest"><a href="#contact">Request a quote <ArrowRight /></a></Button></div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row sm:justify-between"><span>© 2026 BuildMart / Kwality Hardware</span><span>Hardware Wholesale • Gwalior</span></div>
        </div>
      </footer>
      <Button asChild className="fixed bottom-4 right-4 z-40 h-12 rounded-none px-5 uppercase tracking-widest shadow-2xl md:hidden"><a href="#contact">Get a quote <ArrowRight /></a></Button>
    </main>
  );
}

function Field({ id, label, className = "", children }: { id: string; label: string; className?: string; children: React.ReactNode }) {
  return <div className={className}><Label htmlFor={id}>{label}</Label><div className="mt-2">{children}</div></div>;
}

function FooterLinks({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return <div><h3 className="footer-heading">{title}</h3><ul className="mt-5 space-y-3">{links.map(([label, href]) => <li key={label}><a href={href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{label}</a></li>)}</ul></div>;
}