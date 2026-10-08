import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { OpenPositionsSection } from "./sections/OpenPositionsSection";
import { InsightsSection } from "./sections/InsightsSection";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";
import {
  CheckCircle, Globe, Users, Award, ArrowRight, Building2, Heart, Flame,
  UtensilsCrossed, ChevronLeft, ChevronRight, Video, Handshake, Lightbulb,
  ShieldCheck, FileSearch, UserCheck, ClipboardList, Stethoscope, Stamp,
  Plane, Search,
} from "lucide-react";

/* ─── Hero Carousel Slides ─── */
const heroSlides = [
  {
    title: "Construction",
    titleHighlight: "Operation & Maintenance",
    subtitle: "Offering quality recruitment services to organizations worldwide.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    gradient: "from-[#091e2a]/80 via-[#091e2a]/50 to-transparent",
  },
  {
    title: "Oil",
    titleHighlight: "& Gas",
    subtitle: "Get a career in World's leading Oil and Gas Companies.",
    img: "https://images.unsplash.com/photo-1571524522669-99d0c9e7264d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-[#0a1628]/80 via-[#0a1628]/50 to-transparent",
  },
  {
    title: "Engineering",
    titleHighlight: "and Project Management",
    subtitle: "Get a chance for being employed to provide expertise to World's leading industries.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
    gradient: "from-[#1a1a2e]/80 via-[#1a1a2e]/50 to-transparent",
  },
  {
    title: "Healthcare",
    titleHighlight: "& Medical",
    subtitle: "Connecting certified medical professionals with international healthcare systems.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80",
    gradient: "from-[#0d2137]/80 via-[#0d2137]/50 to-transparent",
  },
];


/* ─── Stats ─── */
const stats = [
  { value: "45+", label: "Countries Served", num: 45 },
  { value: "12,000+", label: "Successful Placements", num: 12000 },
  { value: "98%", label: "Client Satisfaction", num: 98 },
  { value: "15+", label: "Years of Excellence", num: 15 },
];

/* ─── Industries ─── */
const industries = [
  {
    icon: Building2,
    name: "Construction",
    desc: "From site engineers to heavy equipment operators, supplying the backbone of major infrastructure projects globally.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
    color: "from-orange-600 to-amber-500",
  },
  {
    icon: Heart,
    name: "Healthcare",
    desc: "Connecting certified nursing staff, specialists, and medical technologists with international healthcare systems.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Flame,
    name: "Oil & Gas",
    desc: "Precision staffing for offshore rigs and refineries, focusing on safety-critical roles and technical expertise.",
    img: "https://images.unsplash.com/photo-1571524522669-99d0c9e7264d?q=80&w=500&auto=format&fit=crop",
    color: "from-gray-700 to-slate-600",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality",
    desc: "Staffing 5-star establishments with culinary masters, guest relations experts, and executive management.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80",
    color: "from-purple-600 to-pink-500",
  },
];

/* ─── Values / What We Stand For ─── */
const values = [
  {
    icon: Handshake,
    title: "Partnership",
    desc: "Our consultants understand the vital role of Human Resources in the development and eventual success of any organization. Building upon this insight, we partner closely with our clients.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovate and Improve",
    desc: "Innovation opens a window for creativity and high performance. We embrace change and always look to improve what we do and how we do it.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Integrity and Quality",
    desc: "All individuals are accountable for the highest standards of ethical behavior. We deliver recruitment services with honesty, transparency, equality and consistency.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
    color: "from-emerald-500 to-teal-500",
  },
];

/* ─── Work Process Steps ─── */
const processSteps = [
  { step: "01", title: "Client Requirement", icon: ClipboardList, color: "bg-blue-500" },
  { step: "02", title: "Sourcing & Screening", icon: Search, color: "bg-indigo-500" },
  { step: "03", title: "Shortlisting", icon: FileSearch, color: "bg-purple-500" },
  { step: "04", title: "Final Selection", icon: UserCheck, color: "bg-violet-500" },
  { step: "05", title: "Offer Letter / Trade", icon: Stamp, color: "bg-pink-500" },
  { step: "06", title: "Medical Test", icon: Stethoscope, color: "bg-rose-500" },
  { step: "07", title: "Visa Process", icon: Globe, color: "bg-amber-500" },
  { step: "08", title: "Travel & Deployment", icon: Plane, color: "bg-green-500" },
];

/* ─── Reasons / Why Choose Us ─── */
const reasons = [
  { title: "Global Network", desc: "An expansive talent pool spanning 45+ countries with pre-vetted, ready-to-deploy candidates." },
  { title: "Compliance First", desc: "We navigate complex international labour laws, visa regulations, and workplace safety standards on your behalf." },
  { title: "End-to-End HR", desc: "From sourcing to payroll management, we handle the entire employment lifecycle." },
  { title: "Cultural Alignment", desc: "Our cultural integration programmes ensure seamless workforce transitions across borders." },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: "Behrooz HR Services transformed our hiring process. They delivered 200 skilled workers for our UAE project in under 60 days.",
    author: "James Harrington",
    role: "VP Operations, Meridian Construction Group",
  },
  {
    quote: "Their healthcare recruitment expertise is unmatched. Every candidate placed has exceeded our rigorous quality benchmarks.",
    author: "Dr. Amira Al-Hassan",
    role: "Chief Medical Officer, Gulf Healthcare Alliance",
  },
  {
    quote: "Payroll compliance across four jurisdictions is no small feat. Behrooz HR handles it flawlessly.",
    author: "Michael Chen",
    role: "CFO, Pacific Hospitality Group",
  },
  {
    quote: "The meticulous attention to cultural fit has drastically reduced our staff turnover rate at our new offshore site.",
    author: "Sarah O'Connor",
    role: "HR Director, NorthStar Energy",
  },
  {
    quote: "Exceptional speed and precision. They sourced an entire specialized engineering team while maintaining absolute legal compliance.",
    author: "Khalid Al-Mansour",
    role: "Project Director, Al-Mansour Tech",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We primarily specialize in Construction & Infrastructure, Oil & Gas, Healthcare & Medical, and 5-Star Hospitality. We supply both blue-collar workforce and executive white-collar professionals.",
  },
  {
    question: "How long does the international recruitment process typically take?",
    answer: "The timeline varies based on the destination country's visa regulations and the specific role. On average, our end-to-end process from sourcing to deployment takes between 4 to 8 weeks.",
  },
  {
    question: "Do you handle visa processing and medical tests?",
    answer: "Yes, we handle the entire legal deployment pipeline. This includes MOFA document attestation, medical center scheduling (GAMCA), visa stamping, and final travel ticketing.",
  },
  {
    question: "Are your candidates pre-screened?",
    answer: "Absolutely. Every candidate undergoes rigorous technical screening, background checks, and optionally video interviewing before their profile is presented to you.",
  },
  {
    question: "What happens if a placed candidate leaves prematurely?",
    answer: "We offer a solid replacement guarantee. If a candidate leaves or is deemed medically unfit within the probationary period, we will source a replacement at no additional recruitment cost.",
  },
];

/* ═══════════════ COMPONENT ═══════════════ */

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

export const Home = (): JSX.Element => {
  /* ── Hero Carousel State ── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /* ── Scroll Reveals ── */
  const statsReveal = useScrollReveal();
  const industriesReveal = useStaggerReveal(industries.length);
  const videoReveal = useScrollReveal();
  const valuesReveal = useStaggerReveal(values.length);
  const processReveal = useStaggerReveal(processSteps.length);
  const reasonsReveal = useScrollReveal();
  const testimonialsReveal = useStaggerReveal(testimonials.length);

  /* ── 3D Tilt for Cards (using CSS class) ── */

  return (
    <div className="flex flex-col w-full overflow-x-hidden min-h-screen bg-[#f6faff] dark:bg-slate-900">
      <PrimaryNavigationSection />

      {/* ═══ HERO CAROUSEL ═══ */}
      <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden" aria-label="Hero carousel">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.img}
              alt={`${slide.title} ${slide.titleHighlight}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-screen-xl mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  {i === currentSlide && (
                    <>
                      <h1 className="hero-text-animate font-manrope font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
                        <span className="text-white">{slide.title}</span>{" "}
                        <span className="text-blue-400">{slide.titleHighlight}</span>
                      </h1>
                      <p className="hero-text-animate-delay text-slate-200 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                        {slide.subtitle}
                      </p>
                      <div className="hero-text-animate-delay-2 flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                          <Button className="h-auto px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base border-none shadow-lg transition-all hover:shadow-xl hover:scale-105">
                            Request a Consultation
                          </Button>
                        </Link>
                        <Link href="/services">
                          <Button variant="outline" className="h-auto px-8 py-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-sm transition-all hover:scale-105">
                            Explore Services
                          </Button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hero-arrow absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="hero-arrow absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`carousel-dot ${i === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section
        ref={statsReveal.ref}
        className="bg-blue-700 dark:bg-blue-800 text-white"
        aria-label="Key statistics"
      >
        <div className={`max-w-screen-xl mx-auto px-6 lg:px-8 py-10 reveal ${statsReveal.revealed ? "revealed" : ""}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label, num }, i) => (
              <div key={label} className={`flex flex-col gap-1 stagger-${i + 1}`}>
                <span className="font-manrope font-extrabold text-3xl md:text-4xl text-white">
                  <AnimatedCounter value={num} suffix={value.replace(/[\d,]/g, '')} />
                </span>
                <span className="text-blue-200 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO INTERVIEWING SECTION ═══ */}
      <section
        ref={videoReveal.ref}
        className="py-16 lg:py-24 bg-gradient-to-br from-[#091e2a] via-[#0c2940] to-[#0a3d5c]"
        aria-label="Video interviewing"
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center reveal ${videoReveal.revealed ? "revealed" : ""}`}>
            {/* Video Panel */}
            <div className="relative group perspective-container">
              <div className="card-3d rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=700&q=80"
                  alt="Video interviewing platform"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/60 to-transparent" />
                {/* Floating video icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center animate-float shadow-lg">
                  <Video size={22} className="text-white" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <Badge className="w-fit px-4 py-1.5 bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-green-500/20">
                VIDEO INTERVIEWING
              </Badge>
              <h2 className="font-manrope font-extrabold text-3xl md:text-4xl lg:text-5xl text-green-400 leading-tight">
                Screen candidates quickly and securely.
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                To help you recruit faster and easier than ever before, we've been encouraging our candidates to introduce themselves on video.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our cutting-edge technology allows you to pre-assess the candidates that your expert consultants put forward for your roles.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="h-auto w-fit px-8 py-3.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-sm transition-all hover:scale-105 mt-2">
                  Read about hinterview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE STAND FOR — VALUES ═══ */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" aria-label="What we stand for">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              What We Stand For?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Our mission is built on a foundation of partnership, innovation, and unwavering integrity.
            </p>
          </RevealSection>

          <div
            ref={valuesReveal.containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map(({ icon: Icon, title, desc, img, color }, i) => (
              <div
                key={title}
                className={`perspective-container reveal stagger-${i + 1} ${valuesReveal.revealed ? "revealed" : ""}`}
              >
                <div className="card-3d bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full gradient-border-hover">
                  <div className="img-zoom h-52">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1 text-center items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md -mt-12 relative z-10`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES WE SERVE ═══ */}
      <section className="py-20 lg:py-28 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Industries we serve">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Specialized recruitment solutions for high-stakes environments around the world.
            </p>
          </RevealSection>
          <div
            ref={industriesReveal.containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map(({ icon: Icon, name, desc, color, img }, i) => (
              <div
                key={name}
                className={`perspective-container reveal stagger-${i + 1} ${industriesReveal.revealed ? "revealed" : ""}`}
              >
                <div className="card-3d group bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-600 flex flex-col h-full gradient-border-hover">
                  <div className="img-zoom h-48 sm:h-52 relative w-full">
                    <img 
                      src={img} 
                      alt={name} 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1 bg-white dark:bg-slate-700 relative z-10">
                    <div className={`absolute -top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white">{name}</h3>
                    </div>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed flex-1">{desc}</p>
                    <Link href="/services" className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all w-fit">
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      

      <OpenPositionsSection />

      {/* ═══ WORK PROCESS ═══ */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" aria-label="Our work process">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <RevealSection className="text-center lg:text-left">
              <Badge className="mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full border-none">
                How We Work
              </Badge>
              <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-[#091e2a] dark:text-white mb-6">
                Work Process
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Our structured 8-step recruitment process ensures efficiency and precision at every stage. We handle everything from the initial client requirements all the way to candidate deployment.
              </p>
            </RevealSection>
            
            <RevealSection className="h-full mt-4 lg:mt-0">
              <div className="w-full h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden relative shadow-xl perspective-container">
                 <div className="card-3d w-full h-full img-zoom">
                   <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" alt="Work Process" className="w-full h-full object-cover" loading="lazy" />
                   <div className="absolute inset-0 bg-[#091e2a]/10" />
                 </div>
              </div>
            </RevealSection>
          </div>

          <div
            ref={processReveal.containerRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
          >
            {processSteps.map(({ step, title, icon: Icon, color }, i) => (
              <div
                key={step}
                className={`reveal stagger-${i + 1} ${processReveal.revealed ? "revealed" : ""}`}
              >
                <div className="hover-lift group bg-[#f6faff] dark:bg-slate-800 rounded-xl p-6 flex flex-col items-center gap-4 text-center shadow-sm border border-slate-100 dark:border-slate-700 h-full relative">
                  <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <div className="font-manrope font-extrabold text-2xl text-slate-200 dark:text-slate-700">{step}</div>
                  <p className="font-semibold text-[#091e2a] dark:text-white text-sm">{title}</p>
                  {/* Connector line */}
                  {i < processSteps.length - 1 && i % 4 !== 3 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 w-6 h-0.5 bg-blue-200 dark:bg-slate-700 translate-x-3 pointer-events-none" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-20 lg:py-28 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Why choose Behrooz HR Services">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div
            ref={reasonsReveal.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${reasonsReveal.revealed ? "revealed" : ""}`}
          >
            <div>
              <Badge className="mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full border-none">
                Our Advantage
              </Badge>
              <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-6 leading-tight">
                Why Behrooz HR Services?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                We don't just fill positions — we build high-performing, compliant global teams that drive your business forward.
              </p>
              <div className="flex flex-col gap-5">
                {reasons.map(({ title, desc }) => (
                  <div key={title} className="flex gap-4 group">
                    <CheckCircle size={22} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-[#091e2a] dark:text-white mb-1">{title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="h-auto px-8 py-3 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold border-none transition-all hover:scale-105 hover:shadow-lg">
                    Learn About Us <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden h-48 shadow-lg img-zoom">
                  <img src="/figmaAssets/construction.png" alt="Construction project" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden h-36 shadow-lg img-zoom">
                  <img src="/figmaAssets/hospitality.png" alt="Hospitality" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden h-36 shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-6 hover-scale">
                  <div className="text-center text-white">
                    <Globe size={32} className="mx-auto mb-2 text-blue-300 animate-float-slow" />
                    <span className="font-manrope font-bold text-2xl">45+</span>
                    <p className="text-blue-200 text-xs mt-1">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" aria-label="Client testimonials">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-14">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">Trusted by leading organisations across the globe.</p>
          </RevealSection>
          <div
            ref={testimonialsReveal.containerRef}
            className="px-0 relative max-w-[90%] mx-auto md:max-w-full"
          >
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-6">
                {testimonials.map(({ quote, author, role }, i) => (
                  <CarouselItem key={author} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className={`perspective-container reveal stagger-${i + 1} ${testimonialsReveal.revealed ? "revealed" : ""} h-full`}>
                      <div className="card-3d bg-[#f6faff] dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-4 h-full cursor-grab active:cursor-grabbing">
                        <div className="text-blue-500 text-4xl font-serif leading-none">"</div>
                        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed italic flex-1">{quote}</p>
                        <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
                          <p className="font-semibold text-[#091e2a] dark:text-white text-sm">{author}</p>
                          <p className="text-slate-400 text-xs mt-0.5">{role}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />
              <CarouselNext className="hidden md:flex -right-4 md:-right-12 border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />
            </Carousel>
          </div>
        </div>
      </section>

      <InsightsSection />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-[#f6faff] dark:bg-slate-900" aria-label="Frequently asked questions">
        <div className="max-w-screen-md mx-auto px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Everything you need to know about our global recruitment process.
            </p>
          </RevealSection>

          <RevealSection delay="delay-100">
            <Accordion type="single" collapsible className="w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-100 dark:border-slate-700 last:border-0">
                  <AccordionTrigger className="text-left font-manrope font-semibold text-[#091e2a] dark:text-white text-lg hover:no-underline hover:text-blue-600 dark:hover:text-blue-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300 text-base leading-relaxed p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg mb-2 mt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealSection>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Call to action">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <RevealSection>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-blue-500 text-white p-12 md:p-20 text-center">
              <div className="absolute inset-0 opacity-20 bg-[url(/figmaAssets/image.png)] bg-cover bg-center" />
              <div className="relative">
                <h2 className="font-manrope font-extrabold text-3xl md:text-5xl mb-4 leading-tight">
                  Ready to build your global team?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-xl mx-auto">
                  Consult with our industry experts to find the right talent architecture for your organisation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="h-auto px-10 py-4 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base border-none shadow-lg transition-all hover:scale-105">
                      Request a Consultation
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="h-auto px-10 py-4 rounded-lg border border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-sm transition-all hover:scale-105">
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <GlobalFooterSection />
    </div>
  );
};
