import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6faff] dark:bg-slate-900">
      <PrimaryNavigationSection />

      {/* 404 Content */}
      <section className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="max-w-lg mx-auto px-6 text-center flex flex-col items-center gap-6">
          {/* Large 404 */}
          <div className="relative">
            <span className="font-manrope font-extrabold text-[120px] md:text-[160px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-500 dark:text-red-400" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-manrope font-extrabold text-3xl md:text-4xl text-[#091e2a] dark:text-white">
              Page Not Found
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/">
              <Button className="h-auto px-8 py-3.5 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none shadow-md flex items-center gap-2">
                <Home size={18} />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-auto px-8 py-3.5 rounded-lg border-slate-300 dark:border-slate-600 text-[#091e2a] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-base flex items-center gap-2">
                <ArrowLeft size={18} />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooterSection />
    </div>
  );
}
