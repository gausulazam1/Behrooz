import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { ServicesContentSection } from "./sections/ServicesContentSection";

export const Services = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full relative bg-[#f6faff] dark:bg-slate-900">
      {/* Primary navigation at the top */}
      <PrimaryNavigationSection />
      {/* Main services content */}
      <ServicesContentSection />
      {/* Global footer at the bottom */}
      <GlobalFooterSection />
    </div>
  );
};
