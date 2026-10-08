import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PrimaryNavigationSection } from "./sections/PrimaryNavigationSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "Delhi",
    country: "India",
    flag: "🇮🇳",
    address: "26-D, 2nd Floor, Khizrabad, New Friends Colony, New Delhi-110025",
    phone: "011-46065337",
    email: "behroozhr2015@gmail.com",
    hours: "Mon–Fri: 9am – 6pm GMT",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=77.23%2C28.57%2C77.26%2C28.59&layer=mapnik&marker=28.58&mlat=28.58&mlon=77.24",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    address: "Level 15, DIFC Gate Building, Dubai",
    phone: "011-46065337",
    email: "behroozhr2015@gmail.com",
    hours: "Mon–Fri: 9am – 6pm GST",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=55.26%2C25.19%2C55.34%2C25.23&layer=mapnik&marker=25.21&mlat=25.21&mlon=55.30",
  },
  {
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    address: "10 Marina Boulevard, Marina Bay, Singapore 018981",
    phone: "011-46065337",
    email: "behroozhr2015@gmail.com",
    hours: "Mon–Fri: 9am – 6pm SGT",
    mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=103.84%2C1.27%2C103.87%2C1.30&layer=mapnik&mlat=1.2864&mlon=103.8549",
  },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/company/behroozhr", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/behroozhr", label: "Twitter / X" },
  { Icon: Facebook, href: "https://facebook.com/behroozhr", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com/behroozhr", label: "Instagram" },
];

const services = [
  "Construction Recruitment",
  "Healthcare Staffing",
  "Oil & Gas Recruitment",
  "Hospitality Staffing",
  "HR & Payroll Management",
  "Compliance & Audit",
  "Upskilling & Training",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export const ContactUs = (): JSX.Element => {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [activeOffice, setActiveOffice] = useState(0);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = "A valid email is required.";
    if (!form.message.trim()) newErrors.message = "Please tell us about your requirements.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(emptyForm);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6faff] dark:bg-slate-900">
      <PrimaryNavigationSection />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#091e2a] to-[#1a3a5c] text-white py-20 md:py-28" aria-label="Contact us hero">
        <div className="absolute inset-0 opacity-80 bg-[url(https://images.unsplash.com/photo-1740560051533-3acef26ace95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww)] bg-cover bg-center" />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-widest uppercase rounded-full">
            Get In Touch
          </Badge>
          <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Let's Build Your<br />
            <span className="text-blue-400">Global Team</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Speak with our specialists today. Whether you're looking to place a single candidate or mobilise hundreds, we're ready to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Contact form and details">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="font-manrope font-bold text-2xl text-[#091e2a] dark:text-white mb-4">Contact Information</h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Reach out via the form, call us directly, or visit one of our global offices.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a href="mailto:info@behroozhr.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email Us</p>
                    <p className="text-[#091e2a] dark:text-white font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">info@behroozhr.com</p>
                  </div>
                </a>
                <a href="tel:+442071234567" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors">
                    <Phone size={18} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Call Us</p>
                    <p className="text-[#091e2a] dark:text-white font-medium text-sm group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">+44 207 123 4567</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Business Hours</p>
                    <p className="text-[#091e2a] dark:text-white font-medium text-sm">Mon–Fri: 9am – 6pm</p>
                    <p className="text-slate-400 text-xs">Global time zones supported</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-[#091e2a] dark:text-white mb-3">Connect With Us</p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-500 dark:text-slate-400 hover:text-white transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-5">
                <p className="text-blue-700 dark:text-blue-300 text-sm font-medium mb-1">⚡ Quick Response Guarantee</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm">We aim to respond to all enquiries within 4 business hours.</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-20 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-800 px-8">
                  <CheckCircle size={56} className="text-green-500" />
                  <div>
                    <h3 className="font-manrope font-bold text-2xl text-[#091e2a] dark:text-white mb-2">Message Received!</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base max-w-md">
                      Thank you for reaching out to Behrooz HR Services. A member of our team will contact you within 4 business hours.
                    </p>
                  </div>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="h-auto px-8 py-3 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold border-none"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#f6faff] dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-5" noValidate>
                  <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="John Smith"
                        className={`bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-[#091e2a] dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.name ? "border-red-400" : ""}`}
                        aria-required="true"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@company.com"
                        className={`bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-[#091e2a] dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.email ? "border-red-400" : ""}`}
                        aria-required="true"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="company">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your Organisation"
                        className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-[#091e2a] dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="phone">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+44 207 000 0000"
                        className="bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-[#091e2a] dark:text-white placeholder:text-slate-400 focus-visible:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="service">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="w-full rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-[#091e2a] dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">
                      Your Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about the roles you need to fill, the timeline, and any specific requirements..."
                      aria-required="true"
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-[#091e2a] dark:text-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-slate-400 resize-none transition-colors ${errors.message ? "border-red-400" : ""}`}
                    />
                    {errors.message && <p id="message-error" className="text-red-500 text-xs">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="h-auto w-full py-4 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-base border-none shadow-md flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations + Map */}
      <section className="py-20 bg-[#eaf5ff] dark:bg-slate-800" aria-label="Office locations and map">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#091e2a] dark:text-white mb-4">
              Our Global Offices
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg">Find us across the globe — ready to serve you locally.</p>
          </div>

          {/* Office Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center flex-wrap">
            {offices.map((office, i) => (
              <button
                key={office.city}
                onClick={() => setActiveOffice(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeOffice === i
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
                }`}
              >
                {offices[i].flag} {office.city}
              </button>
            ))}
          </div>

          {/* Active Office Detail */}
          {offices.map((office, i) => (
            <div key={office.city} className={i === activeOffice ? "block" : "hidden"}>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                {/* Office info */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-600 flex flex-col gap-5">
                  <div>
                    <h3 className="font-manrope font-bold text-xl text-[#091e2a] dark:text-white mb-1">
                      {office.flag} {office.city} Office
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{office.country}</p>
                  </div>
                  <div className="flex flex-col gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-green-500 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-purple-500 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-amber-500 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{office.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-600 h-80 lg:h-96">
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing ${office.city} office location`}
                    aria-label={`Map of ${office.city} office`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-slate-900" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-manrope font-bold text-3xl text-[#091e2a] dark:text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "How quickly can you mobilise a team?",
                a: "Depending on role complexity and destination country, we can typically deploy pre-vetted candidates within 3–8 weeks. For urgent requirements, contact us directly to discuss fast-track options.",
              },
              {
                q: "Do you handle visa and work permit processing?",
                a: "Yes. Our dedicated compliance team manages the full visa and work permit lifecycle for all destination countries, including the UAE, UK, Singapore, Philippines, and more.",
              },
              {
                q: "What sectors do you specialise in?",
                a: "We specialise in Construction, Healthcare, Oil & Gas, and Hospitality. Within each sector we have dedicated teams with deep domain expertise.",
              },
              {
                q: "Is there a minimum number of roles required?",
                a: "No. We work with clients needing a single specialist placement right through to large-scale workforce mobilisations of 500+ workers.",
              },
              {
                q: "How do you ensure candidate quality?",
                a: "Every candidate undergoes a rigorous multi-stage assessment including skills testing, reference verification, background checks, and medical clearance where required.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-[#f6faff] dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700 cursor-pointer">
                <summary className="font-semibold text-[#091e2a] dark:text-white text-base list-none flex items-center justify-between gap-4">
                  {q}
                  <span className="text-blue-600 dark:text-blue-400 transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooterSection />
    </div>
  );
};
