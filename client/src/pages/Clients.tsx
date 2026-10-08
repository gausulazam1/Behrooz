import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { Building2, Heart, Flame, UtensilsCrossed, Star, ArrowRight, Users, Globe, Award } from "lucide-react";

const clientLogos = [
  { name: "Meridian Construction Group", sector: "Construction", initials: "MCG", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
  { name: "Gulf Healthcare Alliance", sector: "Healthcare", initials: "GHA", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
  { name: "Pacific Hospitality Group", sector: "Hospitality", initials: "PHG", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
  { name: "Atlas Energy Solutions", sector: "Oil & Gas", initials: "AES", color: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300" },
  { name: "BridgeWorks International", sector: "Construction", initials: "BWI", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400" },
  { name: "Horizon Medical Services", sector: "Healthcare", initials: "HMS", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400" },
  { name: "Crown Resorts & Spa", sector: "Hospitality", initials: "CRS", color: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400" },
  { name: "PetroMax Offshore", sector: "Oil & Gas", initials: "PMO", color: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300" },
  { name: "Skyline Structures LLC", sector: "Construction", initials: "SSL", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400" },
  { name: "Nordic Health Systems", sector: "Healthcare", initials: "NHS", color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400" },
  { name: "Luminary Hotels Group", sector: "Hospitality", initials: "LHG", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" },
  { name: "RigTech International", sector: "Oil & Gas", initials: "RTI", color: "bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300" },
];

const caseStudies = [
  {
    sector: "Construction",
    icon: Building2,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
    borderColor: "border-orange-100 dark:border-orange-800",
    client: "Meridian Construction Group",
    title: "200 Skilled Workers Deployed in 60 Days",
    challenge: "Meridian needed a full workforce mobilised for a major infrastructure project in the UAE with an aggressive timeline.",
    solution: "We pre-screened and deployed 200 multi-trade workers including civil engineers, welders, and equipment operators.",
    result: "Project launched on time. 94% of placed workers were retained for subsequent project phases.",
    metrics: [
      { value: "200", label: "Workers Placed" },
      { value: "60", label: "Days to Deploy" },
      { value: "94%", label: "Retention Rate" },
    ],
  },
  {
    sector: "Healthcare",
    icon: Heart,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    borderColor: "border-blue-100 dark:border-blue-800",
    client: "Gulf Healthcare Alliance",
    title: "Staffing a Network of 5 Hospitals Across the Gulf",
    challenge: "GHA required 350 multi-specialty nurses and technicians for newly commissioned facilities across Kuwait and Qatar.",
    solution: "Our healthcare division sourced and screened candidates from the Philippines, India, and the UK with full DHP licensing support.",
    result: "All facilities opened fully staffed, meeting HAAD and MOH compliance requirements.",
    metrics: [
      { value: "350", label: "Professionals Placed" },
      { value: "5", label: "Hospital Sites" },
      { value: "100%", label: "Compliance Rate" },
    ],
  },
  {
    sector: "Hospitality",
    icon: UtensilsCrossed,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    borderColor: "border-purple-100 dark:border-purple-800",
    client: "Pacific Hospitality Group",
    title: "Pre-Opening Staffing for 3 Luxury Properties",
    challenge: "PHG was opening three 5-star resorts simultaneously in Singapore, Bali, and Maldives and needed top-tier F&B and management talent.",
    solution: "We sourced executive chefs, butlers, and guest relations managers from Europe, Asia, and the Middle East.",
    result: "All three properties opened on schedule with award-winning hospitality teams.",
    metrics: [
      { value: "180", label: "Staff Placed" },
      { value: "3", label: "Luxury Properties" },
      { value: "4.9★", label: "Guest Satisfaction" },
    ],
  },
];

const testimonials = [
  {
    quote: "Behrooz HR's precision in understanding our technical requirements made all the difference. Every engineer they placed was job-ready from day one.",
    author: "James Harrington",
    role: "VP Operations",
    company: "Meridian Construction Group",
    rating: 5,
  },
  {
    quote: "Their healthcare recruitment expertise is truly unmatched. The level of pre-vetting means we can trust every candidate they present.",
    author: "Dr. Amira Al-Hassan",
    role: "Chief Medical Officer",
    company: "Gulf Healthcare Alliance",
    rating: 5,
  },
  {
    quote: "Managing payroll compliance across four currencies was a nightmare until Behrooz HR took it over. Flawless execution every month.",
    author: "Michael Chen",
    role: "CFO",
    company: "Pacific Hospitality Group",
    rating: 5,
  },
];

const sectors = [
  { icon: Building2, name: "Construction", count: "4,200+", color: "bg-orange-500" },
  { icon: Heart, name: "Healthcare", count: "3,800+", color: "bg-blue-500" },
  { icon: UtensilsCrossed, name: "Hospitality", count: "2,500+", color: "bg-purple-500" },
  { icon: Flame, name: "Oil & Gas", count: "1,500+", color: "bg-slate-500" },
];

const countries = [
  {
    name: "Saudi Arabia",
    flagSrc: "https://flagcdn.com/w160/sa.png",
    borderColor: "border-green-500/40",
    shadowColor: "hover:shadow-green-200 dark:hover:shadow-green-900/40",
    description: "Kingdom of Saudi Arabia",
  },
  {
    name: "United Arab Emirates",
    flagSrc: "https://flagcdn.com/w160/ae.png",
    borderColor: "border-red-400/40",
    shadowColor: "hover:shadow-red-200 dark:hover:shadow-red-900/40",
    description: "UAE",
  },
  {
    name: "Bahrain",
    flagSrc: "https://flagcdn.com/w160/bh.png",
    borderColor: "border-red-400/40",
    shadowColor: "hover:shadow-red-200 dark:hover:shadow-red-900/40",
    description: "Kingdom of Bahrain",
  },
  {
    name: "Qatar",
    flagSrc: "https://flagcdn.com/w160/qa.png",
    borderColor: "border-rose-500/40",
    shadowColor: "hover:shadow-rose-200 dark:hover:shadow-rose-900/40",
    description: "State of Qatar",
  },
  {
    name: "Kuwait",
    flagSrc: "https://flagcdn.com/w160/kw.png",
    borderColor: "border-green-400/40",
    shadowColor: "hover:shadow-green-200 dark:hover:shadow-green-900/40",
    description: "State of Kuwait",
  },
  {
    name: "Oman",
    flagSrc: "https://flagcdn.com/w160/om.png",
    borderColor: "border-red-400/40",
    shadowColor: "hover:shadow-red-200 dark:hover:shadow-red-900/40",
    description: "Sultanate of Oman",
  },
];

const majorClients = [
  { name: "Abdullah M. Al Yousif Co.", subtitle: "For Contracting", initials: "AYC", domain: "ayc.com.sa", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800" },
  { name: "Annasban Group", subtitle: "General Contracting", initials: "AG", domain: "annasban.com", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800" },
  { name: "Basert Al-Omran", subtitle: "Construction", initials: "SA", domain: "basert.com.sa", color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800" },
  { name: "T.R Contracting", subtitle: "Infrastructure", initials: "TR", domain: "trcontracting.com.sa", color: "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300", border: "border-sky-200 dark:border-sky-800" },
  { name: "Serene Catering & Events", subtitle: "Hospitality", initials: "SC", domain: "serene.com.sa", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800" },
  { name: "SaudiBio", subtitle: "Agriculture & Food", initials: "SB", domain: "saudibio.com", color: "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300", border: "border-lime-200 dark:border-lime-800" },
  { name: "Mayyar United", subtitle: "Ittihad Mayyar", initials: "MU", domain: "mayyar.com", color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300", border: "border-cyan-200 dark:border-cyan-800" },
  { name: "Clean Service", subtitle: "Facilities Management", initials: "CS", domain: "cleanservice.com.sa", color: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800" },
  { name: "Rakan Contracting", subtitle: "RTCC", initials: "RC", domain: "rtcc.com.sa", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800" },
  { name: "GM Construction", subtitle: "General Contracting", initials: "GM", domain: "gm-const.com", color: "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300", border: "border-slate-200 dark:border-slate-600" },
  { name: "GEBPCO", subtitle: "Building & Property Co.", initials: "GB", domain: "gebpco.com", color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800" },
  { name: "Ebtikar", subtitle: "Int'l Air Conditioning", initials: "EB", domain: "ebtikar.com.sa", color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800" },
  { name: "Sadara Technology", subtitle: "Technology Solutions", initials: "ST", domain: "sadara.com", color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800" },
  { name: "Tamr Almadinah", subtitle: "Al-Madinah Dates", initials: "TA", domain: "tamralmadinah.com", color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800" },
];

/** Scroll-reveal wrapper */
function RevealSection({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  );
}

export const Clients = (): JSX.Element => {
  const sectorsReveal = useStaggerReveal(sectors.length);
  const logosReveal = useStaggerReveal(clientLogos.length);
  const caseReveal = useStaggerReveal(caseStudies.length);
  const testimonialsReveal = useStaggerReveal(testimonials.length);
  const countriesReveal = useStaggerReveal(countries.length);
  const majorClientsReveal = useStaggerReveal(majorClients.length);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6faff] dark:bg-slate-900">
      <PrimaryNavigationSection />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#091e2a] to-[#1a3a5c] text-white py-20 md:py-28 relative overflow-hidden" aria-label="Clients hero">
        <div className="absolute inset-0 opacity-5 bg-[url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGJ1c2luZXNzfGVufDB8fDB8fHww)] bg-cover bg-center" />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-full animate-fade-in">
            Our Clients
          </Badge>
          <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-up">
            Trusted by Industry Leaders<br />
            <span className="text-blue-400">Across the Globe</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From multinational construction firms to boutique luxury hotels, our clients trust us to deliver talent that performs, complies, and endures.
          </p>
        </div>
      </section>

      {/* Placement stats by sector */}
      <section className="py-16 bg-white dark:bg-slate-900" aria-label="Placements by sector">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div ref={sectorsReveal.containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map(({ icon: Icon, name, count, color }, i) => (
              <div
                key={name}
                className={`reveal stagger-${i + 1} ${sectorsReveal.revealed ? "revealed" : ""}`}
              >
                <div className="hover-lift bg-[#f6faff] dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="font-manrope font-extrabold text-2xl text-[#091e2a] dark:text-white">{count}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{name} Placements</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Our clients">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Our Client Portfolio
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Industry leaders who rely on Behrooz HR Services for their critical workforce needs.
            </p>
          </RevealSection>
          <div ref={logosReveal.containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clientLogos.map(({ name, sector, initials, color }, i) => (
              <div
                key={name}
                className={`perspective-container reveal stagger-${Math.min(i + 1, 12)} ${logosReveal.revealed ? "revealed" : ""}`}
              >
                <div className="card-3d bg-white dark:bg-slate-700 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-600 flex flex-col items-center gap-3 text-center gradient-border-hover">
                  <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center font-manrope font-bold text-sm`}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#091e2a] dark:text-white text-sm leading-tight">{name}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{sector}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Case studies">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Case Studies
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Real challenges. Precision solutions. Measurable results.
            </p>
          </RevealSection>
          <div ref={caseReveal.containerRef} className="flex flex-col gap-10">
            {caseStudies.map(({ sector, icon: Icon, iconColor, bgColor, borderColor, client, title, challenge, solution, result, metrics }, i) => (
              <div
                key={client}
                className={`reveal stagger-${i + 1} ${caseReveal.revealed ? "revealed" : ""}`}
              >
                <div className={`${bgColor} ${borderColor} border rounded-2xl p-8 md:p-10 shadow-sm hover-lift`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={22} className={iconColor} />
                    <Badge className="text-xs font-semibold tracking-wider uppercase border-none bg-white/60 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      {sector}
                    </Badge>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{client}</p>
                  <h3 className="font-manrope font-bold text-2xl md:text-3xl text-[#091e2a] dark:text-white mb-6">{title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "The Challenge", text: challenge },
                      { label: "Our Solution", text: solution },
                      { label: "The Result", text: result },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <h4 className="font-semibold text-[#091e2a] dark:text-white text-sm mb-2">{label}</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {metrics.map(({ value, label }) => (
                      <div key={label} className="bg-white dark:bg-slate-800 rounded-xl px-6 py-4 text-center shadow-sm border border-white dark:border-slate-700 hover-scale">
                        <p className="font-manrope font-extrabold text-2xl text-blue-600 dark:text-blue-400">{value}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Client testimonials">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              What Our Clients Say
            </h2>
          </RevealSection>
          <div ref={testimonialsReveal.containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, author, role, company, rating }, i) => (
              <div
                key={author}
                className={`perspective-container reveal stagger-${i + 1} ${testimonialsReveal.revealed ? "revealed" : ""}`}
              >
                <div className="card-3d bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-600 flex flex-col gap-4 h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed italic flex-1">"{quote}"</p>
                  <div className="border-t border-slate-100 dark:border-slate-600 pt-4">
                    <p className="font-semibold text-[#091e2a] dark:text-white text-sm">{author}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{role}, {company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Work In */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Countries we work in">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <Badge className="mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-full">
              Our Reach
            </Badge>
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Countries We Work In
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              We place skilled professionals across the Gulf Cooperation Council, connecting top talent with the region's fastest-growing economies.
            </p>
          </RevealSection>

          <div ref={countriesReveal.containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-stretch">
            {countries.map(({ name, flagSrc, borderColor, shadowColor, description }, i) => (
              <div
                key={name}
                className={`reveal stagger-${Math.min(i + 1, 6)} ${countriesReveal.revealed ? "revealed" : ""} h-full`}
              >
                <div
                  className={`group hover-lift bg-[#f6faff] dark:bg-slate-800 rounded-2xl p-6 border ${borderColor} shadow-sm ${shadowColor} hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 cursor-default h-full min-h-[180px]`}
                >
                  <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded-lg shadow-md border border-slate-200 dark:border-slate-600 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={flagSrc}
                      alt={`${name} flag`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center min-h-[48px] justify-center">
                    <p className="font-manrope font-bold text-[#091e2a] dark:text-white text-sm leading-snug text-center">{name}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5 text-center">{description}</p>
                  </div>
                  <Globe size={14} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Major Clients */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Our major clients">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <Badge className="mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-600 dark:text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-full">
              Trusted Partners
            </Badge>
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Our Major Clients
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Leading companies across construction, hospitality, technology, and more who trust Behrooz HR Services for their workforce needs.
            </p>
          </RevealSection>

          <div ref={majorClientsReveal.containerRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {majorClients.map(({ name, subtitle, initials, color, border, domain }, i) => (
              <div
                key={name}
                className={`perspective-container reveal stagger-${Math.min(i + 1, 12)} ${majorClientsReveal.revealed ? "revealed" : ""}`}
              >
                <div className={`card-3d bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-sm border ${border} flex flex-col items-center gap-4 text-center gradient-border-hover hover-lift h-full min-h-[160px] justify-center`}>
                  <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center font-manrope font-extrabold text-lg shadow-sm flex-shrink-0 relative overflow-hidden`}>
                    <span className="absolute inset-0 flex items-center justify-center">
                      {initials}
                    </span>
                    {domain && (
                      <img 
                        src={`https://logo.clearbit.com/${domain}`} 
                        alt={`${name} logo`} 
                        className="absolute inset-0 w-full h-full object-contain p-2 bg-white dark:bg-slate-800 z-10 transition-opacity duration-300"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0';
                          setTimeout(() => { if(e.currentTarget) e.currentTarget.style.display = 'none'; }, 300);
                        }}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-[#091e2a] dark:text-white text-sm leading-tight">{name}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white p-12 md:p-20">
              <div className="absolute inset-0 opacity-20 bg-[url(/figmaAssets/image.png)] bg-cover bg-center" />
              <div className="relative">
                <h2 className="font-manrope font-extrabold text-3xl md:text-4xl mb-4">Join Our Growing Client Base</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                  Discover how we can help you build your next world-class team.
                </p>
                <Link href="/contact">
                  <Button className="h-auto px-10 py-4 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base border-none shadow-lg transition-all hover:scale-105">
                    Start a Conversation <ArrowRight size={16} className="ml-2 inline" />
                  </Button>
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <GlobalFooterSection />
    </div>
  );
};
