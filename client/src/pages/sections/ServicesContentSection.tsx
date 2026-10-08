import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Search, Shield, Plane, Globe, Users, FileText, Building2, Zap, Wrench, Briefcase, GraduationCap, Monitor, ShoppingBag, Cpu, Flame, Heart, Factory, HardHat, Lightbulb, Thermometer, Calculator, Sparkles, Hotel } from "lucide-react";

/* ────────── Our Specialization — 12 sectors ────────── */
const specializations = [
  {
    name: "Construction & Maintenance",
    desc: "Get a career in World's leading construction and maintenance companies.",
    icon: HardHat,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    color: "from-orange-600 to-amber-500",
  },
  {
    name: "Oil and Gas",
    desc: "Get a career in World's leading Oil and Gas Companies.",
    icon: Flame,
    img: "https://images.unsplash.com/photo-1586953208270-767889fa9b0e?w=600&q=80",
    color: "from-gray-700 to-slate-600",
  },
  {
    name: "Healthcare",
    desc: "Get jobs at Healthcare all over the world.",
    icon: Heart,
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    color: "from-teal-600 to-cyan-500",
  },
  {
    name: "Facility & Management",
    desc: "Get a chance for being employed to provide Facility & Management to World's leading industries.",
    icon: Building2,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "Petrochemicals",
    desc: "Get a career in World's leading Petrochemical Companies.",
    icon: Factory,
    img: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&q=80",
    color: "from-indigo-700 to-purple-500",
  },
  {
    name: "Manufacturing",
    desc: "Get employed in World's leading Manufacturing companies in all over the world.",
    icon: Wrench,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    color: "from-yellow-600 to-amber-400",
  },
  {
    name: "Engineering & Project Management",
    desc: "Get a chance for being employed to provide hospitality to World's leading industries.",
    icon: Lightbulb,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    color: "from-emerald-600 to-green-400",
  },
  {
    name: "Engineering Procurement",
    desc: "Get a career in World's leading Petrochemical Companies.",
    icon: Briefcase,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    color: "from-sky-600 to-blue-400",
  },
  {
    name: "Power and Utility",
    desc: "Get employed in World's leading Manufacturing companies in all over the world.",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    color: "from-green-600 to-emerald-400",
  },
  {
    name: "IT and Telecommunications",
    desc: "Get a chance for being employed to provide hospitality to World's leading industries.",
    icon: Monitor,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    color: "from-violet-600 to-purple-400",
  },
  {
    name: "Commercial and Retail",
    desc: "Get a career in World's leading Petrochemical Companies.",
    icon: ShoppingBag,
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    color: "from-rose-600 to-pink-400",
  },
  {
    name: "Teaching & Education",
    desc: "Get employed in World's leading Manufacturing companies in all over the world.",
    icon: GraduationCap,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    color: "from-amber-600 to-orange-400",
  },
];

/* ────────── Comprehensive Logistics & Recruitment Services ────────── */
const coreServices = [
  {
    icon: Search,
    title: "Recruitment & Sourcing",
    desc: "Strategic identification and acquisition of top-tier talent across international markets.",
  },
  {
    icon: Shield,
    title: "Visa Stamping (KSA/KWT)",
    desc: "End-to-end processing for Saudi Arabia and Kuwait visa documentation and approvals.",
  },
  {
    icon: Plane,
    title: "Air Ticketing",
    desc: "Coordinated international travel logistics for individual professionals and large teams.",
  },
  {
    icon: Globe,
    title: "Immigration Services",
    desc: "Navigating complex global immigration laws with 100% compliance and speed.",
  },
  {
    icon: Users,
    title: "Manpower Solutions",
    desc: "Providing scalable workforces for short-term projects or permanent enterprise roles.",
  },
  {
    icon: FileText,
    title: "Document Attestation",
    desc: "Legalization and attestation of certificates from MOFA and other global embassies.",
  },
];

/* ────────── Building & Engineering Services ────────── */
const buildingServices = [
  {
    title: "Civil Engineering, Contracting & Maintenance",
    desc: "From structural planning to project execution and ongoing maintenance of civil infrastructure.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Air Conditioning & Refrigeration",
    desc: "Refrigeration keeps the cold air close, air conditioning pushes it away. Full HVAC staffing solutions.",
    img: "https://images.unsplash.com/photo-1527738697320-513f6648bc26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjfGVufDB8fDB8fHww",
    span: "md:col-span-2",
    large: false,
  },
  {
    title: "Architects, Auditing & Accounting",
    desc: "Accounting for architects involves keeping tabs on all financial aspects of building design, construction, and upkeep.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    span: "md:col-span-2",
    large: false,
  },
];

/* ────────── Cleaning & Maintenance ────────── */
const cleaningServices = [
  {
    title: "Hotel Cleaning",
    desc: "Professional housekeeping staff for luxury hotels, resorts, and hospitality establishments worldwide.",
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80",
  },
  {
    title: "Hospital Cleaning",
    desc: "Specialized sanitation and sterilization staff for healthcare facilities meeting international hygiene standards.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
  },
];

/* ────────── EPIC Services ────────── */
const epicServices = [
  {
    title: "Electric Power Generation",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    title: "Electronics Engineering",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    title: "Power and Utility",
    img: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=600&q=80",
  },
  {
    title: "Petrochemical and Process",
    img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80",
  },
];

/* ────────── Recruitment Solutions ────────── */
const recruitmentSolutions = [
  {
    title: "Executive Search",
    desc: "Do you need reliable and responsible leaders for managerial positions? Are you looking for a key person who will bring a new direction, vision, and goals to your company?",
    icon: Search,
    dark: true,
  },
  {
    title: "Expert Recruitment",
    desc: "Do you want to strengthen your company with clever talents in the field, but you do not know where and how to find them? Our experts will locate the right talent for your industry.",
    icon: Users,
    dark: true,
  },
];

/* ────────── HR Feature Cards ────────── */
const hrFeatureCards = [
  {
    icon: "/figmaAssets/icon.svg",
    title: "Payroll Management",
    description: "Automated multi-currency payroll systems with local tax compliance for every jurisdiction.",
  },
  {
    icon: "/figmaAssets/icon-2.svg",
    title: "Compliance & Audit",
    description: "Rigorous adherence to international labour laws, visa regulations, and workplace safety standards.",
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Upskilling & Training",
    description: "Pre-deployment training programmes and continuous professional development for all candidates.",
  },
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Cultural Integration",
    description: "Bridging the gap between diverse workforces with orientation and language support.",
  },
];

const hrBadges = [
  { label: "100% Legal Compliance" },
  { label: "Global Mobility Support" },
];

export const ServicesContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">

      {/* ── Hero Section ── */}
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <Badge className="w-fit px-4 py-1.5 bg-[#cee2f3] dark:bg-blue-900/40 text-[#526573] dark:text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-[#cee2f3] border-none">
              PRECISION RECRUITMENT
            </Badge>
            <h1 className="font-manrope font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#091e2a] dark:text-white leading-tight tracking-tight">
              Specialized<br />Sectors.{" "}
              <span className="text-[#2346d5] dark:text-blue-400">Global Reach.</span>
            </h1>
            <p className="text-[#444655] dark:text-slate-300 text-lg lg:text-xl leading-relaxed max-w-lg">
              Architecting world-class teams across heavy industries, healthcare, and high-end hospitality with rigorous compliance and cultural alignment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/contact">
                <Button className="h-auto px-8 py-3.5 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none shadow-md">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-auto px-8 py-3.5 rounded-lg border-slate-300 dark:border-slate-600 text-[#091e2a] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-base">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl h-72 md:h-96 lg:h-[500px]">
            <img
              src="/figmaAssets/architecture.png"
              alt="Global architecture and infrastructure"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Our Specialization — 12-Sector Grid ── */}
      <section className="w-full bg-[#eaf5ff] dark:bg-slate-800 py-16 lg:py-24" aria-label="Our specialization">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight mb-4">
              Our Specialization
            </h2>
            <p className="text-[#444655] dark:text-slate-300 text-base leading-6 max-w-2xl mx-auto">
              We specialize in providing recruitment services for the following list of sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specializations.map(({ name, desc, icon: Icon, img, color }) => (
              <div key={name} className="group bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/60 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="font-manrope font-bold text-lg text-[#091e2a] dark:text-white leading-tight">{name}</h3>
                  <p className="text-[#444655] dark:text-slate-300 text-sm leading-relaxed flex-1">{desc}</p>
                  <Link href="/contact" className="flex items-center gap-1.5 text-[#2346d5] dark:text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all mt-2">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recruitment Solutions — Executive Search & Expert Recruitment ── */}
      <section className="w-full py-16 lg:py-24 bg-white dark:bg-slate-900" aria-label="Recruitment solutions">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recruitmentSolutions.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="relative group rounded-2xl overflow-hidden min-h-[320px] bg-[#091e2a] flex flex-col justify-end p-8 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a] via-[#091e2a]/80 to-[#091e2a]/40" />
                <div className="absolute top-0 left-0 right-0 flex justify-center pt-8 opacity-20">
                  <Icon size={120} className="text-blue-400" />
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <h3 className="font-manrope font-bold text-2xl text-white">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                  <Link href="/contact">
                    <Button variant="outline" className="h-auto w-fit px-6 py-2.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* International Recruitment Services */}
          <div className="mt-8 bg-[#f6faff] dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className="p-8 lg:p-12 flex flex-col gap-4">
                <h3 className="font-manrope font-bold text-2xl md:text-3xl text-[#091e2a] dark:text-white">
                  International Recruitment Services
                </h3>
                <p className="text-[#444655] dark:text-slate-300 text-base leading-relaxed">
                  Do you need more manpower or are your staffing capacities fully utilized? Contact our experts and entrust the search for new reinforcements to our hands. We specialize in International Recruitment and Expatriate Services.
                </p>
                <Link href="/contact">
                  <Button className="h-auto w-fit px-8 py-3 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none shadow-md mt-2">
                    Get in Touch <ArrowRight size={16} className="ml-2 inline" />
                  </Button>
                </Link>
              </div>
              <div className="h-64 md:h-full min-h-[280px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="International recruitment team collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Temporary Staffing & Outsourcing */}
          <div className="mt-8 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
              <div className="h-64 md:h-full min-h-[280px] order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Temporary staffing and outsourcing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col gap-4 order-1 md:order-2">
                <h3 className="font-manrope font-bold text-2xl md:text-3xl text-[#091e2a] dark:text-white">
                  Temporary Staffing & Outsourcing
                </h3>
                <p className="text-[#444655] dark:text-slate-300 text-base leading-relaxed">
                  Are you looking for a reliable person to temporarily replace your employee, or do you need to outsource specific functions? We provide flexible staffing solutions for short-term and long-term requirements.
                </p>
                <Link href="/contact">
                  <Button className="h-auto w-fit px-8 py-3 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none shadow-md mt-2">
                    Learn More <ArrowRight size={16} className="ml-2 inline" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interim Management & HR Consultancy ── */}
      <section className="w-full py-16 lg:py-24 bg-[#091e2a]" aria-label="Management and consultancy">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interim Management */}
            <div className="relative rounded-2xl overflow-hidden min-h-[360px] group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Interim Management"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/90 via-[#091e2a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                <h3 className="font-manrope font-bold text-2xl text-white">Interim Management</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                  Do you feel your business is stagnating and not achieving the results it should? Do you need an effective executive manager to get you out of the crisis? We are your partner even in this period.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="h-auto w-fit px-6 py-2.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm">
                    View More
                  </Button>
                </Link>
              </div>
            </div>

            {/* HR Consultancy */}
            <div className="relative rounded-2xl overflow-hidden min-h-[360px] group">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
                alt="HR Consultancy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/90 via-[#091e2a]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-3">
                <h3 className="font-manrope font-bold text-2xl text-white">HR Consultancy</h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                  We're going to invest in training, but what if our employees leave? The real question is: what if we don't train them and they stay with us? Let our HR experts guide your workforce strategy.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="h-auto w-fit px-6 py-2.5 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-sm">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Building & Engineering Services ── */}
      <section className="w-full py-16 lg:py-24 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Building and engineering services">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight">
              Building & Engineering Services
            </h2>
            <p className="text-[#444655] dark:text-slate-300 text-base leading-6">
              Specialized staffing for civil, mechanical, and architectural projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Civil Engineering — Large Card */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden min-h-[400px] shadow-sm group">
              <img
                src={buildingServices[0].img}
                alt={buildingServices[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/85 via-[#091e2a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-2">
                <h3 className="font-manrope font-bold text-white text-2xl leading-tight">
                  {buildingServices[0].title}
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed max-w-md">
                  {buildingServices[0].desc}
                </p>
              </div>
            </div>

            {/* Air Conditioning */}
            <div className="md:col-span-2 bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row min-h-[190px]">
              <div className="w-full sm:w-2/5 h-48 sm:h-auto">
                <img
                  src={buildingServices[1].img}
                  alt={buildingServices[1].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center gap-2">
                <h3 className="font-manrope font-bold text-lg text-[#091e2a] dark:text-white">{buildingServices[1].title}</h3>
                <p className="text-[#444655] dark:text-slate-300 text-sm leading-relaxed">{buildingServices[1].desc}</p>
              </div>
            </div>

            {/* Architects, Auditing */}
            <div className="md:col-span-2 bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row min-h-[190px]">
              <div className="w-full sm:w-2/5 h-48 sm:h-auto">
                <img
                  src={buildingServices[2].img}
                  alt={buildingServices[2].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center gap-2">
                <h3 className="font-manrope font-bold text-lg text-[#091e2a] dark:text-white">{buildingServices[2].title}</h3>
                <p className="text-[#444655] dark:text-slate-300 text-sm leading-relaxed">{buildingServices[2].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cleaning & Maintenance Services ── */}
      <section className="w-full py-16 lg:py-24 bg-white dark:bg-slate-900" aria-label="Cleaning and maintenance">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight mb-4">
              Cleaning and Maintenance Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cleaningServices.map(({ title, desc, img }) => (
              <div key={title} className="group bg-[#f6faff] dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white">{title}</h3>
                  <p className="text-[#444655] dark:text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overseas Recruitment Process ── */}
      <section className="w-full py-16 lg:py-24 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Recruitment process">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight mb-4">
              Overseas Recruitment Services
            </h2>
            <p className="text-[#444655] dark:text-slate-300 text-base max-w-2xl mx-auto">
              Our structured, 8-step recruitment process ensures efficiency and legal precision at every stage.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Client Requirement", color: "bg-blue-500" },
              { step: "02", title: "Sourcing & Screening", color: "bg-indigo-500" },
              { step: "03", title: "Shortlisting", color: "bg-purple-500" },
              { step: "04", title: "Final Selection", color: "bg-violet-500" },
              { step: "05", title: "Offer Letter / Trade", color: "bg-pink-500" },
              { step: "06", title: "Medical Test", color: "bg-rose-500" },
              { step: "07", title: "Visa Process", color: "bg-amber-500" },
              { step: "08", title: "Travel & Deployment", color: "bg-green-500" },
            ].map(({ step, title, color }) => (
              <div key={step} className="bg-white dark:bg-slate-700 rounded-xl p-5 flex flex-col items-center gap-3 text-center shadow-sm hover:shadow-md transition-all">
                <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-manrope font-bold text-sm shadow-md`}>
                  {step}
                </div>
                <p className="font-semibold text-[#091e2a] dark:text-white text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engineering Procurement Installation Construction (EPIC) ── */}
      <section className="w-full py-16 lg:py-24 bg-white dark:bg-slate-900" aria-label="EPIC services">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight mb-4">
              Engineering Procurement Installation Construction
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {epicServices.map(({ title, img }) => (
              <div key={title} className="group bg-[#f6faff] dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-manrope font-bold text-base text-[#091e2a] dark:text-white">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comprehensive Logistics & Recruitment Services ── */}
      <section className="w-full bg-[#eaf5ff] dark:bg-slate-800 py-16 lg:py-24" aria-label="Core service offerings">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-manrope font-extrabold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight mb-4">
                Comprehensive Logistics & Recruitment Services
              </h2>
              <p className="text-[#444655] dark:text-slate-300 text-lg">
                Every step of the international deployment process, engineered for efficiency and legal precision.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-sm flex gap-12">
              <div className="text-center">
                <div className="text-3xl font-manrope font-extrabold text-[#2346d5]">10+</div>
                <div className="text-xs font-bold text-[#444655] dark:text-slate-300 uppercase tracking-widest">Key Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-manrope font-extrabold text-[#2346d5]">24/7</div>
                <div className="text-xs font-bold text-[#444655] dark:text-slate-300 uppercase tracking-widest">Support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white dark:bg-slate-700 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
                <div className="w-14 h-14 bg-[#eaf5ff] dark:bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-[#2346d5] transition-colors">
                  <Icon size={26} className="text-[#2346d5] dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white">{title}</h3>
                <p className="text-[#444655] dark:text-slate-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Tour & Travel Feature */}
          <div className="mt-8 bg-[#091e2a] rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-0">
              <div className="flex-1 p-10 md:p-12">
                <h3 className="font-manrope font-bold text-2xl md:text-3xl text-white mb-4">Tour & Travel Management</h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  Beyond recruitment, we architect corporate retreats and organizational travel experiences that build culture across continents.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                    Corporate Retreat Planning
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                    MICE (Meetings, Incentives, Conferences, Exhibitions)
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-2/5 h-64 md:h-auto md:min-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="Corporate meeting room"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Complete HR Solutions ── */}
      <section className="w-full py-16 lg:py-24 bg-white dark:bg-slate-900" aria-label="HR solutions">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden p-8 lg:p-16 relative">
            {/* Decorative blur */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#dee1ff4c] dark:bg-blue-700/10 rounded-xl blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              {/* Left: Text + badges */}
              <div className="flex flex-col gap-6">
                <h2 className="font-manrope font-extrabold text-3xl md:text-4xl text-[#091e2a] dark:text-white leading-tight">
                  The Global HR Ecosystem
                </h2>
                <p className="text-[#444655] dark:text-slate-300 text-lg leading-relaxed">
                  We don't just find people; we architect the entire infrastructure required to support, manage, and grow them. Our bespoke HR framework ensures your offshore team is compliant, trained, and paid on time.
                </p>
                <div className="flex flex-col gap-3">
                  {hrBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-3 p-4 bg-[#f6faff] dark:bg-slate-700/50 rounded-lg"
                    >
                      <CheckCircle size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="font-semibold text-[#091e2a] dark:text-white text-base">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <Link href="/contact">
                    <Button className="h-auto px-8 py-3.5 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none shadow-md">
                      Get in Touch <ArrowRight size={16} className="ml-2 inline" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: 2×2 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {hrFeatureCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex flex-col gap-3 p-6 bg-[#eaf5ff] dark:bg-slate-700 rounded-xl"
                  >
                    <img
                      className="w-8 h-8 object-contain"
                      alt={card.title}
                      src={card.icon}
                      loading="lazy"
                    />
                    <h3 className="font-semibold text-[#091e2a] dark:text-white text-lg leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#444655] dark:text-slate-300 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="w-full py-16 lg:py-24 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Call to action">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[rgba(35,70,213,1)] to-[rgba(67,97,238,1)] text-white p-10 md:p-16 lg:p-20 text-center shadow-xl">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
              alt=""
              src="/figmaAssets/image.png"
            />
            <div className="relative flex flex-col items-center gap-5">
              <h2 className="font-manrope font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Ready for the next step?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
                We're here to help. Get in touch with our team to take your career or team to the next level!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact">
                  <Button className="h-auto px-10 py-4 rounded-lg bg-white text-[#2346d5] hover:bg-white/90 font-semibold text-base border-none shadow-md whitespace-nowrap">
                    Get in Touch
                  </Button>
                </Link>
                <Button className="h-auto px-10 py-4 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-sm whitespace-nowrap">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
