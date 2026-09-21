import { type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Linkedin,
  MapPin,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell noise-layer min-h-[100dvh] overflow-hidden">
      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center gap-3" data-testid="link-logo">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">A</span>
          <span className="font-display text-sm font-bold tracking-tight">alex<span className="text-muted-foreground">/</span>morgan</span>
        </a>
        <nav className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-[0.16em] md:flex" aria-label="Primary navigation">
          <a href="#about" className="transition-colors hover:text-muted-foreground" data-testid="link-nav-about">About</a>
          <a href="#work" className="transition-colors hover:text-muted-foreground" data-testid="link-nav-work">Selected work</a>
          <a href="#contact" className="transition-colors hover:text-muted-foreground" data-testid="link-nav-contact">Contact</a>
        </nav>
        <a href="mailto:alex.morgan.dev@example.com" className="hidden items-center gap-2 rounded-full border border-foreground/25 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all hover:border-foreground hover:bg-foreground hover:text-primary-foreground md:flex" data-testid="link-header-email">
          Let’s talk <ArrowUpRight size={14} strokeWidth={2.2} />
        </a>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-foreground/25 p-2.5 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="relative z-20 mx-6 -mt-2 mb-3 flex flex-col gap-1 rounded-2xl border border-foreground/15 bg-card p-3 shadow-lg md:hidden" aria-label="Mobile navigation">
          <a href="#about" onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-muted" data-testid="link-mobile-about">About</a>
          <a href="#work" onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-muted" data-testid="link-mobile-work">Selected work</a>
          <a href="#contact" onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-muted" data-testid="link-mobile-contact">Contact</a>
        </nav>
      )}

      <main id="top">
        <section className="relative mx-auto flex min-h-[calc(100dvh-85px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-14 md:px-10 md:pb-24 lg:px-14 lg:pt-8">
          <div className="hero-grid absolute inset-x-0 top-0 -z-0 h-[85%] opacity-70" aria-hidden="true" />
          <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1fr_0.34fr]">
            <div>
              <p className="reveal flex items-center gap-3 font-mono-custom text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_5px_hsl(var(--accent)/0.18)]" />
                Software developer · Portland, OR
              </p>
              <h1 className="hero-word reveal reveal-delay-1 mt-7 max-w-5xl font-display font-bold text-foreground">
                Making the<br /><span className="text-accent">useful</span> feel clear.
              </h1>
              <div className="reveal reveal-delay-2 mt-9 flex max-w-2xl flex-col gap-7 md:flex-row md:items-end md:gap-12">
                <p className="max-w-md text-base leading-7 text-muted-foreground md:text-lg">
                  I’m Alex Morgan, an aspiring software developer who turns curious questions into thoughtful, working products.
                </p>
                <a href="#work" className="group inline-flex w-fit shrink-0 items-center gap-3 border-b-2 border-foreground pb-2 text-sm font-bold transition-colors hover:border-accent" data-testid="link-hero-work">
                  See what I’ve been building <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-3 hidden justify-self-end lg:block">
              <div className="relative flex h-52 w-52 rotate-3 items-center justify-center rounded-[2.25rem] border border-foreground/20 bg-secondary p-8 shadow-[12px_14px_0_hsl(var(--accent))]">
                <div className="absolute inset-5 rounded-[1.6rem] border border-foreground/20" />
                <Code2 size={64} strokeWidth={1.1} className="relative" />
                <span className="absolute bottom-7 right-7 font-mono-custom text-[10px] uppercase tracking-widest">build / learn</span>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-4 absolute bottom-8 left-6 flex items-center gap-4 font-mono-custom text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:left-10 lg:left-14">
            <span className="h-px w-10 bg-foreground/30" /> Scroll to explore
          </div>
        </section>

        <div className="overflow-hidden border-y border-foreground/15 bg-primary py-4 text-primary-foreground">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap font-mono-custom text-[11px] uppercase tracking-[0.23em]">
            {['Curious by default', 'Build in public', 'Details matter', 'Curious by default', 'Build in public', 'Details matter'].map((item, index) => (
              <span className="flex items-center gap-8" key={`${item}-${index}`}>
                {item}<span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-[0.42fr_1fr] lg:gap-24">
            <div>
              <p className="font-mono-custom text-[11px] uppercase tracking-[0.2em] text-muted-foreground">01 / About</p>
              <div className="mt-6 h-px w-16 bg-accent" />
            </div>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Early in my career.<br /><span className="text-muted-foreground">Already serious about the details.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
                I’m currently learning the GitHub workflow and building a foundation across frontend development, APIs, and product thinking. I like the space where a messy idea becomes a calm, useful interface.
              </p>
              <div className="mt-12 grid gap-8 border-t border-foreground/15 pt-8 sm:grid-cols-2">
                <div>
                  <p className="font-mono-custom text-[10px] uppercase tracking-[0.18em] text-muted-foreground">What I bring</p>
                  <ul className="mt-4 space-y-3 text-sm font-semibold">
                    {['A learner’s momentum', 'Clear, considered UI', 'Comfort with feedback'].map((item) => (
                      <li key={item} className="flex items-center gap-3"><Check size={15} className="text-accent" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Currently exploring</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['TypeScript', 'React', 'Node.js', 'GitHub'].map((skill) => (
                      <span className="rounded-full border border-foreground/20 px-3 py-1.5 font-mono-custom text-[11px]" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-foreground/15 bg-secondary/50">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-14">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono-custom text-[11px] uppercase tracking-[0.2em] text-muted-foreground">02 / Selected work</p>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">Small projects.<br /><span className="text-muted-foreground">Real lessons.</span></h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">A few experiments and builds that show how I think, learn, and ship.</p>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <a href="https://github.com/alexmorgan-dev/field-notes" target="_blank" rel="noreferrer" className="project-card group flex min-h-[27rem] flex-col justify-between rounded-3xl border border-foreground/15 bg-card p-7 md:p-9" data-testid="card-project-field-notes">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-accent px-3 py-1.5 font-mono-custom text-[10px] font-medium uppercase tracking-wider">Featured build</span>
                  <MoveUpRight className="project-arrow" size={21} />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] uppercase tracking-[0.18em] text-muted-foreground">01 · React / TypeScript</p>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Field Notes</h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">A lightweight place to capture observations, sort ideas, and turn everyday curiosity into a next step.</p>
                </div>
              </a>
              <div className="grid gap-5">
                <a href="https://github.com/alexmorgan-dev/pulse-weather" target="_blank" rel="noreferrer" className="project-card group flex min-h-[13rem] flex-col justify-between rounded-3xl border border-foreground/15 bg-primary p-7 text-primary-foreground" data-testid="card-project-pulse">
                  <div className="flex items-start justify-between">
                    <span className="font-mono-custom text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60">02 · API practice</span>
                    <MoveUpRight className="project-arrow text-accent" size={19} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">Pulse Weather</h3>
                    <p className="mt-2 text-sm leading-6 text-primary-foreground/65">Forecast data, made readable at a glance.</p>
                  </div>
                </a>
                <a href="https://github.com/alexmorgan-dev/ledger-lite" target="_blank" rel="noreferrer" className="project-card group flex min-h-[13rem] flex-col justify-between rounded-3xl border border-foreground/15 bg-accent p-7" data-testid="card-project-ledger">
                  <div className="flex items-start justify-between">
                    <span className="font-mono-custom text-[10px] uppercase tracking-[0.18em] text-accent-foreground/65">03 · Learning in public</span>
                    <MoveUpRight className="project-arrow" size={19} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">Ledger Lite</h3>
                    <p className="mt-2 text-sm leading-6 text-accent-foreground/70">A first pass at making personal finance less intimidating.</p>
                  </div>
                </a>
              </div>
            </div>
            <a href="https://github.com/alexmorgan-dev" target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-3 text-sm font-bold" data-testid="link-github-projects">
              More experiments on GitHub <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="rounded-[2rem] bg-primary px-7 py-12 text-primary-foreground md:px-14 md:py-16 lg:flex lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-2xl">
              <p className="font-mono-custom text-[11px] uppercase tracking-[0.2em] text-primary-foreground/55">03 / Contact</p>
              <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">Let’s make<br /><span className="text-accent">something useful.</span></h2>
              <p className="mt-7 max-w-md text-base leading-7 text-primary-foreground/65">Have an opportunity, a project, or a thoughtful hello? My inbox is open.</p>
            </div>
            <div className="mt-12 flex flex-col items-start gap-5 lg:mt-0 lg:items-end">
              <a href="mailto:alex.morgan.dev@example.com" className="group inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-1" data-testid="link-contact-email">
                alex.morgan.dev@example.com <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-4 text-primary-foreground/65">
                <a href="https://github.com/alexmorgan-dev" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="Alex on GitHub" data-testid="link-contact-github"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/alexmorgan-dev" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent" aria-label="Alex on LinkedIn" data-testid="link-contact-linkedin"><Linkedin size={20} /></a>
                <span className="h-5 w-px bg-primary-foreground/20" />
                <span className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[0.15em]"><MapPin size={14} /> Portland, OR</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-foreground/15 px-6 py-7 text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p className="font-mono-custom text-[10px] uppercase tracking-[0.15em]">Alex Morgan · learning out loud</p>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-2"><Sparkles size={13} className="text-accent" /> Available for thoughtful opportunities</span>
          <a href="#top" className="transition-colors hover:text-foreground" data-testid="link-back-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
