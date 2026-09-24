# Garibook Homepage — Frontend Recreation

A responsive, component-based recreation of the [Garibook](https://garibook.com/) homepage, built for the Endow Tech Frontend Intern technical assessment.

# Live Link : [garibook-clone-omega.vercel.app](https://garibook-clone-omega.vercel.app/)

## Tech Stack

- **React 19** + **Vite** — fast dev/build tooling
- **Tailwind CSS** — utility-first styling, tuned with brand tokens (`tailwind.config.js`)
- **GSAP** (with `ScrollTrigger`) — entrance, typewriter, scroll-reveal, and count-up animations

## Getting Started

```bash
npm install
npm run dev       # start the dev server (default: http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

No environment variables or API keys are required.

## Project Structure

```
src/
  components/
    Navbar/            Sticky nav bar, language toggle, responsive mobile drawer
    Hero/              Hero section + TypingHeadline (GSAP typewriter loop)
    BookingSection/    Booking form (Car/Airport tabs) + animated stats counters
    Services/          Our Services: Rides / Business / Club / VMS tab panels
    FreedomJourney/    "Freedom in Every Journey" banner + Choose steps
    PeopleTogether/    "More Than Miles" 3-image card grid
    BookingArrival/    Black "From Booking to Arrival" image grid
    SmartDriver/       "Be a Smart Driver" 0% Commission yellow CTA
    FeaturedNews/      "We Featured by Top News Platforms" cards
    Testimonials/      "Our Passengers Speak For Us" slider cards
    BlogSection/       "Beyond Destinations" blog cards
    DownloadApp/       Blue "Download Garibook Mobile App" banner
    Footer/            Footer with link columns, partners, badges
    common/            ArrowRight icon + shared Primary/Warning buttons
  data/
    content.js         All placeholder copy/content, kept out of the components
  hooks/
    useScrollReveal.js Reusable GSAP ScrollTrigger fade/slide-up hook
  App.jsx              Composes every section in page order
  main.jsx             React entry point
  index.css            Tailwind layers + global/base styles, button/section classes
public/
  assets/              Logos, car SVGs, icons, banner images
  favicon.svg
```

Each section of the homepage is its own component (rather than one large page file), so sections can be reworked or reordered independently.

## Where GSAP Is Used

1. **Hero entrance** (`components/Hero/Hero.jsx`) — on load, the headline, subtext and CTA animate in as a single orchestrated `gsap.timeline()` sequence (fade + slide up, staggered). The headline itself runs a typewriter loop across a few taglines via `TypingHeadline.jsx`.
2. **Scroll-triggered reveals** (`hooks/useScrollReveal.js`, used across most sections) — a shared hook wraps `ScrollTrigger` so any section can fade+slide its `data-reveal` children into view once as the user scrolls to them, instead of duplicating the same GSAP setup in every component.
3. **Animated stat counters** (`components/BookingSection/BookingSection.jsx`) — the "Trip Requests / Total Customers / Active Drivers / District Covered" numbers count up from 0 to their real values once the stats band scrolls into view, using `gsap.to()` on a plain counter object with `ScrollTrigger`.
4. **Service panel entrance** (`components/Services/Services.jsx`) — switching to a non-Rides tab animates the panel in with a short `gsap.fromTo()` fade + slide.

## Responsiveness

The layout is built mobile-first with Tailwind's `sm` / `lg` / `xl` breakpoints:

- Navbar collapses into a toggleable mobile menu below `xl` (Escape closes it, focus returns to the toggle, and the closed drawer is `inert` so keyboard users can't tab into it). Desktop nav uses tighter gaps/text at `lg` so the six long links never overflow.
- The hero's headline/form pair stacks to a single column on small screens; hero bottom padding is tuned per breakpoint so the overlapping booking card doesn't leave a dead gap.
- Card grids (services, choose steps, people together, testimonials, news, blog) go from a single column on mobile to 2–4 columns on larger screens. `BookingArrival` uses `lg:col-span-*` so tablet (`sm`–`md`) stays on a clean 2-column grid.
- The testimonial slider shows 1 / 2 / 3 cards at `sm` / `md` / `lg`+ and clamps the page index when the viewport shrinks.
- Interactive elements (buttons, links, form fields, the mobile menu toggle) expose visible `:focus-visible` states, and form labels are associated via `htmlFor`/`id`.

## Accessibility & motion

- `prefers-reduced-motion` disables GSAP entrance/scroll/count-up animations **and** the typewriter loop (a static headline is shown instead) — not just CSS transitions.
- Scroll-reveal content stays fully visible if GSAP never runs, so sections can't get stuck at opacity 0.
- The animated headline is `aria-hidden` with an `sr-only` static equivalent instead of announcing every keystroke via `aria-live`.

## Notes / Decisions

- Content (headings, stats, card copy, testimonial names, etc.) is centralized in `src/data/content.js` so components stay purely presentational and the copy can be updated in one place.
- Page images/icons live in `public/assets/` and are referenced by relative path, so the build stays fully static.
- The booking form, service tabs, and testimonial slider are wired up with local React state so their interactions (tab switching, trip-type selection, next/prev) work, even though there's no backend behind them.
- Design tokens (colors, fonts, button styles, container widths) mirror the reference site's CSS variables and Bootstrap-style container breakpoints.

## Deployment

The app is a static Vite build, so `dist/` can be deployed as-is to Vercel, Netlify, or any static host:

```bash
npm run build
# deploy the generated dist/ folder
```
