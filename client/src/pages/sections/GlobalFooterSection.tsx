import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

const officeLocations = [
  { city: "26-D , 2nd floor, Khizrabad, New Friends Colony, New Delhi-110025 ", country: "INDIA", flag: "IN" },
  // { city: "Dubai", country: "UAE", flag: "🇦🇪" },
  // { city: "Manila", country: "Philippines", flag: "🇵🇭" },
  // { city: "Singapore", country: "Singapore", flag: "🇸🇬" },
];

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/company/behroozhr", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/behroozhr", label: "Twitter / X" },
  { Icon: Facebook, href: "https://facebook.com/behroozhr", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com/behroozhr", label: "Instagram" },
  { Icon: Youtube, href: "https://youtube.com/@behroozhr", label: "YouTube" },
];

export const GlobalFooterSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white" aria-label="Site footer">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1: Logo + Brand + Social */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="font-manrope font-extrabold text-2xl tracking-[0.08em] text-white uppercase leading-none">BEH</span>
                  <span className="font-manrope font-extrabold text-2xl tracking-[0.08em] text-red-400 uppercase leading-none">R</span>
                  <span className="font-manrope font-extrabold text-2xl tracking-[0.08em] text-white uppercase leading-none">OOZ</span>
                </div>
                <div className="flex flex-col justify-center leading-none">
                  <span className="text-[8px] font-semibold tracking-[0.18em] text-slate-500 uppercase">HR Services</span>
                  <span className="text-[7px] font-medium tracking-[0.12em] text-slate-600 uppercase">Pvt. Ltd.</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Shaping the Future Together — precision global recruitment and HR management across high-growth sectors.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <a href="mailto:info@behroozhr.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={14} /><span>behroozhr2015@gmail.com</span>
              </a>
              <a href="tel:+442071234567" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={14} /><span>011-46065337</span>
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Office Locations */}
          <div className="flex flex-col gap-5">
            <h3 className="font-manrope font-bold text-white text-base leading-6">Our Offices</h3>
            <ul className="flex flex-col gap-3">
              {officeLocations.map(({ city, country, flag }) => (
                <li key={city} className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={14} className="text-blue-400 flex-shrink-0" />
                  <span>{flag} {city}, {country}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links + Legal */}
          <div className="flex flex-col gap-5">
            <h3 className="font-manrope font-bold text-white text-base leading-6">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-manrope font-bold text-white text-base leading-6">Newsletter</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stay updated with global hiring trends and industry insights.
            </p>
            {subscribed ? (
              <div className="bg-green-900/40 border border-green-700 rounded-lg p-3 text-green-400 text-sm">
                Thank you for subscribing!
              </div>
            ) : (
              <div className="flex items-stretch">
                <Input
                  className="flex-1 rounded-r-none rounded-l-lg border-slate-700 bg-slate-800 text-white placeholder:text-slate-500 text-sm h-auto py-2.5 px-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-blue-500"
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  aria-label="Email for newsletter"
                />
                <Button
                  className="rounded-l-none rounded-r-lg bg-blue-600 hover:bg-blue-700 h-auto px-3 py-2"
                  onClick={handleSubscribe}
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Behrooz HR Services Pvt.Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-slate-500 text-xs">
            {legalLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-slate-300 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
