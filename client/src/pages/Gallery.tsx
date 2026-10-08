import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { X, ZoomIn } from "lucide-react";

/* ─── All images used across the website ─── */
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1769240628075-e4728cfba211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRpdGxlJTNBJTIwJTIySGVhdnklMjBNYWNoaW5lcnklMjBPcGVyYXRpb25zJTIyJTJDJTIwY2F0ZWdvcnklM0ElMjAlMjJDb25zdHJ1Y3Rpb24lMjJ8ZW58MHx8MHx8fDA%3D", title: "Heavy Machinery Operations", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1721244654392-9c912a6eb236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGl0bGUlM0ElMjAlMjJFbmdpbmVlcmluZyUyMEJsdWVwcmludCUyMFNldHVwJTIyJTJDJTIwY2F0ZWdvcnklM0ElMjAlMjJFbmdpbmVlcmluZyUyMnxlbnwwfHwwfHx8MA%3D%3D", title: "Engineering Blueprint Setup", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1758518729794-456bbd9f70f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCUyMkNvcnBvcmF0ZSUyMFBsYW5uaW5nJTIyfGVufDB8fDB8fHww", title: "Corporate Planning", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1663793592620-5a8bc364ecf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRpdGxlJTNBJTIwJTIyUGlwZWxpbmUlMjBJbmZyYXN0cnVjdHVyZSUyMiUyQyUyMGNhdGVnb3J5JTNBJTIwJTIyT2lsJTIwJTI2JTIwR2FzJTIyJTIwJTdEJTJDfGVufDB8fDB8fHww", title: "Pipeline Infrastructure", category: "Oil & Gas" },
  { src: "https://images.unsplash.com/photo-1581093199592-d3c46ae94f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIyTWVkaWNhbCUyMFN0YWZmJTIwQnJpZWZpbmd8ZW58MHx8MHx8fDA%3D", title: "Medical Staff Briefing", category: "Healthcare" },
  { src: "https://images.unsplash.com/photo-1760564020380-bf0da9c0653c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEx1eHVyeSUyMFJlc29ydCUyMEFtZW5pdGllc3xlbnwwfHwwfHx8MA%3D%3D", title: "Luxury Resort Amenities", category: "Hospitality" },
  { src: "/img/american-public-power-association-VuR4oHZ3ucc-unsplash.jpg", title: "Power Distribution", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwV29ya3BsYWNlJTIwQ29ycG9yYXRlfGVufDB8fDB8fHww", title: "Modern Workplace", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1708064235939-0b78938aa224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbnN0cnVjdGlvbiUyMFlhcmQlMjBDb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D", title: "Construction Yard", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENsaW5pY2FsJTIwQ2FyZXxlbnwwfHwwfHx8MA%3D%3D", title: "Clinical Care", category: "Healthcare" },
  { src: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmluZSUyMERpbmluZyUyMFByZXBhcmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D", title: "Fine Dining Preparations", category: "Hospitality" },
  { src: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SW5kdXN0cmlhbCUyMFBsYW50fGVufDB8fDB8fHww", title: "Industrial Plant", category: "Engineering" },
  { src: "/img/benny-sun-KgGh042wtgU-unsplash.jpg", title: "Oil Rig Operations", category: "Oil & Gas" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhlY3V0aXZlJTIwTWVldGluZyUyMENvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D", title: "Executive Meeting", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1599995903128-531fc7fb694b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VXJiYW4lMjBDb25zdHJ1Y3Rpb24lMjBDb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D", title: "Urban Construction", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1lY2hhbmljYWwlMjBFbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D", title: "Mechanical Engineering", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww", title: "Healthcare Facilities", category: "Healthcare" },
  { src: "https://images.unsplash.com/photo-1761195689615-9469b65dac01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2xvYmFsJTIwTG9naXN0aWNzJTIwQ29ycG9yYXRlfGVufDB8fDB8fHww", title: "Global Logistics", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXV0b21hdGVkJTIwU3lzdGVtcyUyMEVuZ2luZWVyaW5nfGVufDB8fDB8fHww", title: "Automated Systems", category: "Engineering" },
  { src: "/img/benny-sun-KgGh042wtgU-unsplash.jpg", title: "Oil Storage Facilities", category: "Oil & Gas" },
  { src: "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhvc3BpdGFsaXR5JTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D", title: "Hospitality Services", category: "Hospitality" },
  { src: "/img/cdc-csWk3OCV7Mc-unsplash.jpg", title: "Disease Control", category: "Healthcare" },
  { src: "/img/centre-for-ageing-better-YzBSMukvJVY-unsplash.jpg", title: "Elderly Care Support", category: "Healthcare" },
  { src: "/img/christina-wocintechchat-com-m-KAULAzQwxzE-unsplash.jpg", title: "Tech Team Sync", category: "Corporate" },
  { src: "/img/christina-wocintechchat-com-m-rg1y72eKw6o-unsplash.jpg", title: "Boardroom Strategies", category: "Corporate" },
  { src: "/img/collab-media-VGjQgLN4B78-unsplash.jpg", title: "Architecture Drafts", category: "Engineering" },
  { src: "/img/daniel-mccullough-HtBlQdxfG9k-unsplash.jpg", title: "Site Assessment", category: "Construction" },
  { src: "/img/dutch-artisan-gtjnu7TBjYM-unsplash.jpg", title: "Structural Framework", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVmaW5lcnklMjBFeHBhbnNpb24lMjBPaWwlMjAlMjYlMjBHYXN8ZW58MHx8MHx8fDA%3D", title: "Refinery Expansion", category: "Oil & Gas" },
  { src: "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hlbWljYWwlMjBQcm9jZXNzaW5nJTIwRW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D", title: "Chemical Processing", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnVzaW5lc3MlMjBTdHJhdGVneSUyMENvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D", title: "Business Strategy", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1576671081741-c538eafccfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBhdGllbnQlMjBSZWNvdmVyeSUyMEhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D", title: "Patient Recovery", category: "Healthcare" },
  { src: "https://images.unsplash.com/photo-1573567199032-50a155ba6de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90ZWwlMjBSZWNlcHRpb24lMjBIb3NwaXRhbGl0eXxlbnwwfHwwfHx8MA%3D%3D", title: "Hotel Reception", category: "Hospitality" },
  { src: "/img/etienne-girardet-sgYamIzhAhg-unsplash.jpg", title: "Heavy Duty Equipment", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1749073668528-38ab64575f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T2Zmc2hvcmUlMjBQbGF0Zm9ybSUyME9pbCUyMCUyNiUyMEdhc3xlbnwwfHwwfHx8MA%3D%3D", title: "Offshore Platform", category: "Oil & Gas" },
  { src: "/img/evgeniy-surzhan-lVWozBOVY2M-unsplash.jpg", title: "IT Infrastructure", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVhZGVyc2hpcCUyMFdvcmtzaG9wfGVufDB8fDB8fHww", title: "Leadership Workshop", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1649260257583-6f2c5c18b531?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEVtZXJnZW5jeSUyMENhcmV8ZW58MHx8MHx8fDA%3D", title: "Emergency Care", category: "Healthcare" },
  { src: "https://images.unsplash.com/photo-1670912461796-81819c1e525b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnJpZGdlJTIwQ29uc3RydWN0aW9ufGVufDB8fDB8fHww", title: "Bridge Construction", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1c3RhaW5hYmxlJTIwRW5lcmd5fGVufDB8fDB8fHww", title: "Sustainable Energy", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1666813721996-42956e40788e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJvb20lMjBTZXJ2aWNlJTIwRXhwZXJpZW5jZSUyMEhvc3BpdGFsaXR5fGVufDB8fDB8fHww", title: "Room Service Experience", category: "Hospitality" },
  { src: "https://images.unsplash.com/photo-1714901423336-1884cd3fb50f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fEdhcyUyMFBpcGVsaW5lJTIwQ2hlY2slMjBPaWwlMjAlMjYlMjBHYXN8ZW58MHx8MHx8fDA%3D", title: "Gas Pipeline Check", category: "Oil & Gas" },
  { src: "https://images.unsplash.com/photo-1704180763488-6f178959f166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvcnBvcmF0ZSUyMEFzc2V0cyUyMENvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D", title: "Corporate Assets", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyZ2ljYWwlMjBwcm9jZWR1cmV8ZW58MHx8MHx8fDA%3D", title: "Surgical Procedures", category: "Healthcare" },
  { src: "https://images.unsplash.com/photo-1577335029365-35029f68d093?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2l0ZSUyMERldmVsb3BtZW50JTIwQ29uc3RydWN0aW9ufGVufDB8fDB8fHww", title: "Site Development", category: "Construction" },
  { src: "https://images.unsplash.com/photo-1673784716250-160cf5cb3a19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhWQUMlMjBJbnN0YWxsYXRpb24lMjBFbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D", title: "HVAC Installation", category: "Engineering" },
  { src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90ZWwlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww", title: "Hotel Management", category: "Hospitality" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGF0YSUyMENlbnRlciUyME9wZXJhdGlvbnMlMjBDb3Jwb3JhdGV8ZW58MHx8MHx8fDA%3D", title: "Data Center Operations", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2lsJTIwYW5kJTIwZ2FzfGVufDB8fDB8fHww", title: "Petrochemical Logistics", category: "Oil & Gas" },
  { src: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGlnaC1SaXNlJTIwRGV2ZWxvcG1lbnQlMjBDb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D ", title: "High-Rise Development", category: "Construction" }
];

const categories = ["All", "Construction", "Oil & Gas", "Healthcare", "Engineering", "Hospitality", "Corporate"];

export const Gallery = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const heroReveal = useScrollReveal();
  const gridReveal = useStaggerReveal(galleryImages.length);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6faff] dark:bg-slate-900">
      <PrimaryNavigationSection />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#091e2a] to-[#1a3a5c] text-white py-20 md:py-28 relative overflow-hidden" aria-label="Gallery hero">
        <div className="absolute inset-0 opacity-80 bg-[url(https://images.unsplash.com/photo-1759803534574-8e703d9914c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG91ciUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center" />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-full animate-fade-in">
            Our Gallery
          </Badge>
          <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-up">
            Visual Journey Through<br />
            <span className="text-blue-400">Our Global Operations</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Explore our work across construction, healthcare, oil & gas, hospitality, and engineering sectors worldwide.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-slate-900 sticky top-[80px] z-30 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900" aria-label="Image gallery">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div
            ref={gridReveal.containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map(({ src, title, category }, i) => (
              <div
                key={`${src}-${i}`}
                className={`reveal stagger-${Math.min(i + 1, 12)} ${gridReveal.revealed ? "revealed" : ""}`}
              >
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800"
                  onClick={() => setLightboxImg({ src, title })}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091e2a]/80 via-[#091e2a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-400">
                        <ZoomIn size={22} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-manrope font-bold text-sm text-[#091e2a] dark:text-white leading-tight">{title}</h3>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1 block">{category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400 dark:text-slate-500">
              <p className="text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-5xl w-full max-h-[85vh] animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.src.replace("w=800", "w=1400")}
              alt={lightboxImg.title}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-center text-white font-manrope font-semibold text-lg mt-4">{lightboxImg.title}</p>
          </div>
        </div>
      )}

      <GlobalFooterSection />
    </div>
  );
};
