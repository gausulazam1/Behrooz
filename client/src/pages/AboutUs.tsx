import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { Target, Eye, Heart, Globe, Award, Users, CheckCircle, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every placement is carefully matched to technical requirements, culture, and long-term organisational goals.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Open communication at every stage of the recruitment journey — no surprises, no hidden fees.",
    color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "We uphold the highest ethical standards in recruitment practices across all geographies.",
    color: "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    desc: "Deep understanding of cross-cultural dynamics enables us to build truly international teams.",
    color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
  },
];

const milestones = [
  { year: "2017", event: "Established with a mission to shape the future of global recruitment and HR services." },
  { year: "2018", event: "Expanded into healthcare staffing across the UK and Middle East." },
  { year: "2020", event: "Opened our Manila office, strengthening Asia-Pacific operations." },
  { year: "2022", event: "Launched the Oil & Gas division for offshore and downstream projects." },
  { year: "2024", event: "Established Singapore hub as the gateway to Southeast Asian markets." },
  { year: "2026", event: "Crossed 12,000 successful international placements worldwide." },
];

const leadership = [
  {
    name: "Robert Ashworth",
    role: "Chief Executive Officer",
    desc: "20+ years in international HR and workforce solutions across EMEA and Asia-Pacific.",
    initials: "RA",
    color: "bg-blue-600",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Priya Nair",
    role: "Chief Operations Officer",
    desc: "Expert in compliance management and large-scale deployment logistics across 30+ countries.",
    initials: "PN",
    color: "bg-purple-600",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "David Al-Rashid",
    role: "Head of Healthcare Division",
    desc: "Former NHS recruiter with deep expertise in clinical staffing across Gulf healthcare systems.",
    initials: "DA",
    color: "bg-teal-600",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Lisa Tanaka",
    role: "Head of Hospitality Division",
    desc: "15 years placing top culinary and management talent across luxury hotel groups worldwide.",
    initials: "LT",
    color: "bg-rose-600",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

const accreditations = [
  "ISO 9001:2015 Certified",
  "REC (Recruitment & Employment Confederation) Member",
  "WFPMA Global Partner",
  "ILO Ethical Recruitment Pledge Signatory",
  "GDPR Compliant",
];

/** Scroll-reveal wrapper */
function RevealSection({ children, className = "", delay = "" }: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const { ref, revealed } = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${delay} ${revealed ? "revealed" : ""} ${className}`}>
      {children}
    </div>
  );
}

export const AboutUs = (): JSX.Element => {
  const valuesReveal = useStaggerReveal(values.length);
  const timelineReveal = useStaggerReveal(milestones.length);
  const leaderReveal = useStaggerReveal(leadership.length);
  const accredReveal = useScrollReveal();

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6faff] dark:bg-slate-900">
      <PrimaryNavigationSection />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#091e2a] to-[#1a3a5c] text-white py-20 md:py-28 relative overflow-hidden" aria-label="About us hero">
        <div className="absolute inset-0 opacity-60 bg-[url(https://images.unsplash.com/photo-1588130721958-d1392d36ed94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHRydXN0fGVufDB8fDB8fHww)] bg-cover bg-center" />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-full animate-fade-in">
            Our Story
          </Badge>
          <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-up">
            Forging Global Talent,<br />
            <span className="text-blue-400">Building Futures</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Since our founding, Behrooz HR Services Pvt. Ltd. has been shaping futures by connecting world-class international talent across four high-growth sectors, with offices on three continents and a track record of over 12,000 successful placements.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Mission and vision">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealSection delay="stagger-1">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-10 border border-blue-100 dark:border-blue-800 hover-lift h-full">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 animate-float-slow">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="font-manrope font-bold text-2xl text-[#091e2a] dark:text-white mb-4">Our Mission</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To deliver precision-matched global talent that empowers organisations in high-stakes industries to operate safely, compliantly, and at peak efficiency — wherever in the world they work.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay="stagger-2">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-10 border border-slate-100 dark:border-slate-700 hover-lift h-full">
                <div className="w-12 h-12 bg-slate-700 dark:bg-slate-600 rounded-xl flex items-center justify-center mb-6 animate-float-delay">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="font-manrope font-bold text-2xl text-[#091e2a] dark:text-white mb-4">Our Vision</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To be the world's most trusted international recruitment partner — recognised for integrity, expertise, and the enduring success of every professional we place.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Our values">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make, every candidate we place, and every client we serve.
            </p>
          </RevealSection>
          <div
            ref={valuesReveal.containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className={`perspective-container reveal stagger-${i + 1} ${valuesReveal.revealed ? "revealed" : ""}`}
              >
                <div className="card-3d bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-600 flex flex-col gap-4 text-center items-center h-full gradient-border-hover">
                  <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white">{title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Our journey">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">15 years of consistent growth and global impact.</p>
          </RevealSection>
          <div
            ref={timelineReveal.containerRef}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-slate-700 -translate-x-1/2" />
            <div className="flex flex-col gap-8">
              {milestones.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} reveal stagger-${i + 1} ${timelineReveal.revealed ? "revealed" : ""}`}
                >
                  <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"}`}>
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-5 shadow-sm max-w-xs hover-lift">
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center shadow-lg text-white font-manrope font-bold text-sm md:mx-auto hover:scale-110 transition-transform">
                    {year}
                  </div>
                  <div className="flex flex-1 md:hidden">
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 shadow-sm flex-1">
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                  <div className={`hidden md:flex flex-1 ${i % 2 !== 0 ? "justify-end pr-8" : "justify-start pl-8"}`}>
                    <div className="max-w-xs" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Leadership team">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">Experienced practitioners driving excellence across every division.</p>
          </RevealSection>
          <div
            ref={leaderReveal.containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {leadership.map(({ name, role, desc, initials, color, img }, i) => (
              <div
                key={name}
                className={`perspective-container reveal stagger-${i + 1} ${leaderReveal.revealed ? "revealed" : ""}`}
              >
                <div className="card-3d bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-600 flex flex-col gap-4 items-center text-center h-full hover-lift gradient-border-hover">
                  <div className={`w-28 h-28 ${color} rounded-full flex items-center justify-center text-white font-manrope font-bold text-3xl shadow-md group-hover:scale-110 transition-transform relative overflow-hidden ring-4 ring-white dark:ring-slate-800`}>
                    <span className="absolute inset-0 flex items-center justify-center">
                      {initials}
                    </span>
                    {img && (
                      <img 
                        src={img} 
                        alt={name} 
                        className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#091e2a] dark:text-white text-lg">{name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mt-0.5 font-medium">{role}</p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Accreditations and compliance">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div
            ref={accredReveal.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${accredReveal.revealed ? "revealed" : ""}`}
          >
            <div>
              <Badge className="mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full border-none">
                Compliance & Standards
              </Badge>
              <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-6 leading-tight">
                Accreditations & Certifications
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                Our commitment to ethical, compliant, and high-quality recruitment is backed by internationally recognised accreditations.
              </p>
              <ul className="flex flex-col gap-4">
                {accreditations.map((item) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <CheckCircle size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "Quality Certified", sub: "ISO 9001:2015" },
                { icon: Users, label: "12,000+ Placed", sub: "Global Placements" },
                { icon: Globe, label: "45+ Countries", sub: "Global Reach" },
                { icon: CheckCircle, label: "100% Compliant", sub: "All Jurisdictions" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="hover-lift bg-[#eaf5ff] dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 border border-blue-100 dark:border-slate-700">
                  <Icon size={28} className="text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-manrope font-bold text-[#091e2a] dark:text-white text-lg">{label}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Get in touch">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <RevealSection>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white p-12 md:p-20">
              <div className="absolute inset-0 opacity-20 bg-[url(/figmaAssets/image.png)] bg-cover bg-center" />
              <div className="relative">
                <h2 className="font-manrope font-extrabold text-3xl md:text-4xl mb-4">Work with a team that gets it done</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                  Talk to our specialists today and discover how Behrooz HR Services can transform your workforce strategy.
                </p>
                <Link href="/contact">
                  <Button className="h-auto px-10 py-4 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base border-none shadow-lg transition-all hover:scale-105">
                    Get in Touch <ArrowRight size={16} className="ml-2 inline" />
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
