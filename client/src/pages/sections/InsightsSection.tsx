import { Badge } from "@/components/ui/badge";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useAnimations";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";

const insights = [
  {
    title: "Global Mobility Hub: 2026 GCC Manpower Trends",
    category: "Market Report",
    date: "April 15, 2026",
    author: "Research Team",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    title: "Compliance Checklist: Essential Visa Changes in Saudi Arabia",
    category: "Legal & Compliance",
    date: "April 02, 2026",
    author: "Legal Dept",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    title: "Why Retention Starts with the First Interview",
    category: "HR Strategy",
    date: "March 28, 2026",
    author: "Robert Ashworth",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
];

export const InsightsSection = () => {
  const { ref, revealed } = useScrollReveal();
  const cardReveal = useStaggerReveal(insights.length);

  return (
    <section className="py-20 lg:py-28 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Latest insights">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full border-none">
                Knowledge Hub
              </Badge>
              <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
                Latest Insights & Market Reports
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Stay updated with the latest trends traversing the global recruitment landscape.
              </p>
            </div>
            <Link href="/" className="group flex items-center text-blue-600 dark:text-blue-400 font-semibold transition-all">
              View all articles <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div ref={cardReveal.containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div 
                key={index} 
                className={`reveal stagger-${index + 1} ${cardReveal.revealed ? "revealed" : ""} group h-full cursor-pointer`}
              >
                <div className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100 dark:border-slate-600">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={insight.img} 
                      alt={insight.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-[#091e2a] hover:bg-white border-none shadow-sm backdrop-blur-sm">
                        {insight.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14} />{insight.date}</span>
                      <span className="flex items-center gap-1.5"><User size={14} />{insight.author}</span>
                    </div>
                    <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
