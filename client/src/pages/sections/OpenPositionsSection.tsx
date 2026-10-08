import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollReveal } from "@/hooks/useAnimations";
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const openJobs = [
  { title: "Senior Civil Engineer", location: "Riyadh, KSA", type: "Full-Time", salary: "$120k - $150k" },
  { title: "Consultant Pulmonologist", location: "Dubai, UAE", type: "Contract", salary: "$180k - $220k" },
  { title: "Offshore Installation Manager", location: "Doha, Qatar", type: "Full-Time", salary: "$160k - $200k" },
  { title: "Executive Sous Chef", location: "Manama, Bahrain", type: "Full-Time", salary: "$80k - $100k" },
  { title: "MEP Project Manager", location: "Jeddah, KSA", type: "Full-Time", salary: "$110k - $140k" },
  { title: "ICU Registered Nurse", location: "Kuwait City", type: "Contract", salary: "$70k - $90k" },
];

export const OpenPositionsSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900" aria-label="Open positions">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full border-none">
                Candidate Portal
              </Badge>
              <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
                Featured Global Opportunities
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Discover life-changing career opportunities across the Middle East and beyond.
              </p>
            </div>
            <Link href="/contact">
              <Button variant="outline" className="h-auto px-6 py-3 rounded-lg border-slate-300 dark:border-slate-600 text-[#091e2a] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold transition-all">
                View All Jobs <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {openJobs.map((job, index) => (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full group hover-lift bg-[#f6faff] dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-6">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-sm text-blue-600 dark:text-blue-400">
                            <Briefcase size={22} />
                          </div>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none dark:bg-blue-900/50 dark:text-blue-300">
                            New
                          </Badge>
                        </div>
                        <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white mb-2 leading-tight">
                          {job.title}
                        </h3>
                        
                        <div className="flex flex-col gap-2 mt-4">
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                            <MapPin size={16} className="text-blue-500" /> {job.location}
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                            <Clock size={16} className="text-blue-500" /> {job.type}
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                            <DollarSign size={16} className="text-green-500" /> {job.salary}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700 w-full">
                        <Link href="/contact" className="w-full">
                          <Button className="w-full bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:bg-slate-600 transition-colors">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />
              <CarouselNext className="hidden md:flex -right-12 border-slate-200 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
