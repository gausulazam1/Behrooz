import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const PrimaryNavigationSection = (): JSX.Element => {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-200 ${
        scrolled || menuOpen
          ? "bg-white/98 dark:bg-slate-900/98 shadow-md"
          : "bg-white/90 dark:bg-slate-900/90"
      } backdrop-blur-md border-b border-slate-100 dark:border-slate-800`}
      aria-label="Primary navigation"
    >
      <div className="flex h-20 items-center justify-between px-4 lg:px-8 w-full max-w-screen-xl mx-auto">

        {/* Logo */}
        <Link href="/" aria-label="Behrooz HR Services Home" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <span className="font-manrope font-extrabold text-xl sm:text-2xl lg:text-[1.75rem] tracking-[0.08em] text-slate-800 dark:text-white uppercase leading-none">
              BEH
            </span>
            <span className="font-manrope font-extrabold text-xl sm:text-2xl lg:text-[1.75rem] tracking-[0.08em] text-[#c0392b] dark:text-red-400 uppercase leading-none">
              R
            </span>
            <span className="font-manrope font-extrabold text-xl sm:text-2xl lg:text-[1.75rem] tracking-[0.08em] text-slate-800 dark:text-white uppercase leading-none">
              OOZ
            </span>
          </div>
          <div className="hidden sm:flex flex-col justify-center leading-none ml-0.5">
            <span className="text-[8px] lg:text-[9px] font-semibold tracking-[0.18em] text-slate-400 dark:text-slate-500 uppercase">HR Services</span>
            <span className="text-[7px] lg:text-[8px] font-medium tracking-[0.12em] text-slate-300 dark:text-slate-600 uppercase">Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/contact">
            <Button className="h-auto px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-sm lg:text-base border-none shadow-sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-4 pb-5 pt-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-3">
              <Button className="w-full h-auto py-3 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};
