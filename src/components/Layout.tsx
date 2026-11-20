
import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { PHONES, waLink } from '../data/content'

const nav = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/software-solutions', 'Software Solutions'],
  ['/industries', 'Industries'],
  ['/portfolio', 'Portfolio'],
  ['/contact', 'Contact'],
]



export const Logo = ({ light }: { light?: boolean }) => (
  <Link
    to="/"
    className="flex shrink-0 items-center"
    aria-label="Nexora Smart Services Ltd home"
  >
    <span className={light ? 'rounded-md bg-white px-2 py-1' : ''}>
      <img
        src="/images/nexora-logo.png"
        alt="Nexora Smart Services Ltd"
        className="block h-16 w-auto max-w-[224px] object-contain"
      />
    </span>
  </Link>
)
export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  const cls = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium hover:text-sky-dark ${
      isActive ? 'text-sky-dark' : 'text-ink'
    }`

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo />

          <nav
            aria-label="Main"
            className="hidden items-center gap-6 lg:flex"
          >
            {nav.map(([to, l]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={cls}
              >
                {l}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact?service=Consultation"
            className="btn-p hidden lg:inline-flex"
          >
            Request a Consultation
          </Link>

          <button
            className="lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-4 border-t border-navy/10 bg-white px-5 py-5 lg:hidden"
          >
            {nav.map(([to, l]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={cls}
              >
                {l}
              </NavLink>
            ))}
            <Link
              to="/contact?service=Consultation"
              className="btn-p"
            >
              Request a Consultation
            </Link>
          </nav>
        )}
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="bg-navy text-white/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">

          {/* Company information */}
          <div className="md:col-span-2">
            <Logo light />

            <p className="mt-3 max-w-sm text-sm leading-6">
              Empowering Smart Solutions for Every Business. We provide
              software development, IT solutions, data management and digital
              transformation services that help businesses operate smarter
              and grow.
            </p>

            <p className="mt-3 text-sm">
              Headquarters: Buea, South-West Region, Cameroon.
              <br />
              Active branch: Yaoundé, Cameroon.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h2 className="mb-3 text-sm font-bold text-white">
              Explore
            </h2>

            <ul className="space-y-2 text-sm">
              {[
                ...nav.slice(1),
                ['/blog', 'Insights'],
                ['/privacy-policy', 'Privacy Policy'],
                ['/terms', 'Terms & Conditions'],
              ].map(([to, l]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sky">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="mb-3 text-sm font-bold text-white">
              Contact us
            </h2>

            <ul className="space-y-3 text-sm">
              {PHONES.map(p => (
                <li key={p}>
                  <a
                    className="hover:text-sky"
                    href={`tel:${p.replace(/\s/g, '')}`}
                  >
                    {p}
                  </a>
                </li>
              ))}

              <li>
                <a
                  className="break-all hover:text-sky"
                  href="mailto:nexorasmartservices@gmail.com"
                >
                  nexorasmartservices@gmail.com
                </a>
              </li>

              <li>
                <a
                  className="hover:text-sky"
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <p className="border-t border-white/10 py-4 text-center text-xs">
          © {new Date().getFullYear()} Nexora Smart Services Ltd. All rights reserved.
        </p>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nexora on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle />
      </a>
    </>
  )
}

export { Phone }
