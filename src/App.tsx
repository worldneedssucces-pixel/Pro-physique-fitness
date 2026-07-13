import React from "react";
import { motion } from "motion/react";
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  TrendingUp,
  Instagram,
  Facebook
} from "lucide-react";

import GymGallery from "./components/GymGallery";
import HoursTracker from "./components/HoursTracker";
import BMICalculator from "./components/BMICalculator";
import ReviewList from "./components/ReviewList";
import ContactInquiry from "./components/ContactInquiry";

export default function App() {
  const gymPhone = "03418119096";
  const formattedPhone = "0341-8119096";

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-md border-b border-neutral-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden bg-neutral-900 border border-neutral-800">
              <img src="/images/logo.png" alt="Pro Physique Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="text-left">
              <span className="block text-lg font-display font-black tracking-tight leading-none text-white">
                PRO PHYSIQUE
              </span>
              <span className="block text-[10px] font-mono tracking-widest uppercase text-amber-500 mt-1 leading-none font-bold">
                FITNESS CLUB
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-400">
            <button onClick={() => handleScrollTo("gallery-section")} className="hover:text-amber-500 transition-colors cursor-pointer">Gallery</button>
            <button onClick={() => handleScrollTo("hours-tracker-section")} className="hover:text-amber-500 transition-colors cursor-pointer">Schedule</button>
            <button onClick={() => handleScrollTo("fitness-utility-section")} className="hover:text-amber-500 transition-colors cursor-pointer">BMI Calculator</button>
            <button onClick={() => handleScrollTo("reviews-section")} className="hover:text-amber-500 transition-colors cursor-pointer">Reviews</button>
            <button onClick={() => handleScrollTo("contact-section")} className="hover:text-amber-500 transition-colors cursor-pointer">Location</button>
          </nav>

          {/* Quick Contact CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${gymPhone}`}
              className="hidden sm:flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-mono font-bold px-4 py-2.5 rounded-xl border border-neutral-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{formattedPhone}</span>
            </a>
            <button
              onClick={() => handleScrollTo("contact-section")}
              className="bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/10 transition-colors uppercase tracking-wider"
            >
              Join Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Landing Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Value Proposition Texts */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full text-xs text-amber-500 font-bold uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5" /> Sector 15-A, Buffer Zone, Karachi
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-[1.05]">
                KARACHI'S PREMIER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500">
                  STRENGTH & PHYSIQUE
                </span> <br />
                FITNESS CLUB
              </h1>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Experience body transformation inside a highly motivating fitness center built for bodybuilders, lifters, and beginners alike. Pro Physique Fitness Club provides premium equipment variations, split workout shifts, and remarkably affordable packages in Karachi.
              </p>

              {/* Badges of Excellence based on customer reviews */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-neutral-900/60 border border-neutral-800/60 p-3.5 rounded-xl text-left">
                  <Flame className="w-5 h-5 text-amber-500 mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Top-Notch Gears</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">Heavy platforms, squats, dumbbell variations</p>
                </div>
                <div className="bg-neutral-900/60 border border-neutral-800/60 p-3.5 rounded-xl text-left">
                  <Users className="w-5 h-5 text-amber-500 mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Coach Aman slots</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">Personalized guidance based on body shape</p>
                </div>
                <div className="bg-neutral-900/60 border border-neutral-800/60 p-3.5 rounded-xl text-left col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-5 h-5 text-amber-500 mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Highly Affordable</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">Best value packages in Sector 15-A/2</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => handleScrollTo("contact-section")}
                  className="bg-amber-500 hover:bg-amber-600 text-black text-sm font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-amber-500/10 transition-all uppercase tracking-wider"
                >
                  Inquire Online <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScrollTo("hours-tracker-section")}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-semibold px-8 py-3.5 rounded-xl border border-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4 text-neutral-400" /> View Live Timings
                </button>
              </div>

              {/* Quick Socials Connect */}
              <div className="flex items-center gap-4 pt-3 text-neutral-400">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">Official Socials:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/prophysiquekarachi/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-black border border-neutral-800/80 rounded-xl transition-all hover:scale-105 active:scale-95 duration-200"
                    title="Instagram @prophysiquekarachi"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/prophysiquekarachi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-black border border-neutral-800/80 rounded-xl transition-all hover:scale-105 active:scale-95 duration-200"
                    title="Facebook @prophysiquekarachi"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Landing Photo Showcase (Requested as landing photo) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl blur opacity-15" />
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800/80 aspect-video bg-neutral-950 shadow-2xl">
                <img
                  src="/images/landing-page.png"
                  alt="Pro Physique Gym Interior Hero"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                
                {/* Embedded Status overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-left">
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Verified Facility</h5>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Sector 15-A, Buffer Zone, Karachi</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase font-mono tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Full Variations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 md:space-y-32">
        {/* Section 1: Facility Interior Gallery */}
        <section className="scroll-mt-24">
          <GymGallery />
        </section>

        {/* Section 2: splits & Timings Tracker */}
        <section className="scroll-mt-24">
          <HoursTracker />
        </section>

        {/* Section 3: BMI Fitness Utility */}
        <section className="scroll-mt-24">
          <BMICalculator />
        </section>

        {/* Section 4: Real Verified Member Reviews */}
        <section className="scroll-mt-24">
          <ReviewList />
        </section>

        {/* Section 6: Contact & Location details */}
        <section className="scroll-mt-24">
          <ContactInquiry />
        </section>
      </main>

      {/* Footer Branding Area */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 mt-20 text-neutral-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
            {/* Column 1 */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-neutral-900 border border-neutral-800">
                  <img src="/images/logo.png" alt="Pro Physique Logo" className="w-full h-full object-contain p-0.5" />
                </div>
                <span className="text-white font-display font-black uppercase tracking-tight">
                  PRO PHYSIQUE
                </span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
                Karachi's dedicated physical bodybuilding center. Built for high repetitions, heavy sets, and healthy living. Sector 15-A/2, Buffer Zone.
              </p>
              <div className="flex gap-3 pt-1">
                <a href="https://www.instagram.com/prophysiquekarachi/?hl=en" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a href="https://www.facebook.com/prophysiquekarachi/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                  <Facebook className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-widest mb-4">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => handleScrollTo("gallery-section")} className="hover:text-amber-500 transition-colors">Our Facility</button></li>
                <li><button onClick={() => handleScrollTo("hours-tracker-section")} className="hover:text-amber-500 transition-colors">Live Schedule</button></li>
                <li><button onClick={() => handleScrollTo("fitness-utility-section")} className="hover:text-amber-500 transition-colors">BMI Utility</button></li>
                <li><button onClick={() => handleScrollTo("pricing-section")} className="hover:text-amber-500 transition-colors">Membership Pricing</button></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-white tracking-widest mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 text-neutral-400">
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Call: 0341-8119096</span>
                </li>
                <li className="flex items-center gap-2 text-neutral-400">
                  <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.004 2c-5.518 0-9.998 4.48-9.998 9.997 0 2.006.592 3.873 1.614 5.442L2 22l4.71-.996c1.516.924 3.292 1.454 5.19 1.454 5.518 0 9.998-4.48 9.998-9.997S17.522 2 12.004 2zm5.776 13.918c-.247.697-1.215 1.272-1.677 1.343-.462.07-1.029.117-2.911-.62-2.404-.943-3.83-3.415-3.95-3.573-.12-.16-.97-1.287-.97-2.454 0-1.168.611-1.743.83-1.973.218-.23.476-.288.635-.288.16 0 .319 0 .459.006.146.006.342-.057.535.402.199.471.68 1.657.739 1.777.06.12.099.259.02.419-.079.16-.118.259-.238.397-.119.138-.25.309-.356.415-.119.115-.243.241-.104.477.139.236.618 1.018 1.328 1.649.914.811 1.682 1.063 1.92 1.18.238.118.377.098.517-.063.139-.16.616-.719.78-1.017.164-.298.328-.249.554-.165.228.084 1.442.679 1.69 1.002.248.322.248.483.125.795z"/>
                  </svg>
                  <a href="https://wa.me/923491943234" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                    WhatsApp: +92 349 1943234
                  </a>
                </li>
                <li className="flex items-start gap-2 text-neutral-400 leading-snug">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Buffer Zone, Karachi, PK</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-neutral-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <p>© {new Date().getFullYear()} Pro Physique Fitness Club Karachi. All rights reserved.</p>
            <p className="text-neutral-600">
              Approved by Coaches & Bodybuilders. Verified Location.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
