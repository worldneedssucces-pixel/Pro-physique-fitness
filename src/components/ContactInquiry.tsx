import React, { useState } from "react";
import { Phone, MapPin, Instagram, Facebook, Send, ExternalLink, Calendar, Check } from "lucide-react";

export default function ContactInquiry() {
  const [userName, setUserName] = useState<string>("");
  const [userMsg, setUserMsg] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("general");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const rawPhone = "03418119096";
  const formattedPhone = "+92 341 8119096";
  
  const rawWhatsApp = "03491943234";
  const formattedWhatsApp = "+92 349 1943234";
  const internationalWhatsApp = "923491943234";

  const instagramUrl = "https://www.instagram.com/prophysiquekarachi/?hl=en";
  const facebookUrl = "https://www.facebook.com/prophysiquekarachi/";

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Prefill whatsapp message
    const topicText = 
      selectedTopic === "join" 
        ? "Gym Membership Registration" 
        : selectedTopic === "coaching" 
        ? "Coach Aman Personal Training" 
        : "General Inquiry";

    const text = `Hello Pro Physique Karachi! My name is ${userName}. I'm reaching out regarding: *${topicText}*. Message: "${userMsg}"`;
    const encodedText = encodeURIComponent(text);
    const whatsappLink = `https://wa.me/${internationalWhatsApp}?text=${encodedText}`;

    // Redirect to whatsapp in a new window
    window.open(whatsappLink, "_blank");

    setTimeout(() => {
      setFormSubmitted(false);
      setUserName("");
      setUserMsg("");
    }, 3000);
  };

  return (
    <div id="contact-section" className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Connect With Pro Physique
          </h2>
          <p className="text-neutral-400 mt-2 max-w-xl">
            Have questions about our equipment, timings, or coach slots? Send us a direct WhatsApp message or visit our premier facility in Karachi.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 hover:text-amber-500 hover:border-amber-500/30 transition-all"
            title="Follow on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 hover:text-amber-500 hover:border-amber-500/30 transition-all"
            title="Follow on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact info cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-6">
            {/* Address 1 */}
            <div className="flex gap-4">
              <div className="p-3 bg-amber-500/15 border border-amber-500/20 text-amber-500 rounded-xl shrink-0 h-fit">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Primary Location</h4>
                <p className="text-sm font-semibold text-white mt-1 leading-relaxed">
                  891 Rd Number 3, Sector 15-A/2 Sector 15 A 2 Buffer Zone, Karachi, 75950, Pakistan
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-500 mt-2 bg-amber-500/5 border border-amber-500/15 px-2 py-0.5 rounded-md">
                  Plus Code: X357+3J Buffer Zone, Karachi
                </span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex gap-4">
              <div className="p-3 bg-amber-500/15 border border-amber-500/20 text-amber-500 rounded-xl shrink-0 h-fit">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left space-y-3">
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Direct Call Support</h4>
                  <a
                    href={`tel:${rawPhone}`}
                    className="block text-xl font-mono font-bold text-white mt-1 hover:text-amber-400 transition-colors"
                  >
                    {formattedPhone}
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">WhatsApp Contact</h4>
                  <a
                    href={`https://wa.me/${internationalWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xl font-mono font-bold text-amber-500 mt-1 hover:text-amber-400 transition-colors"
                  >
                    {formattedWhatsApp}
                  </a>
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Active during morning splits and evening splits.
                </p>
              </div>
            </div>

            {/* Schedule Summary */}
            <div className="flex gap-4">
              <div className="p-3 bg-amber-500/15 border border-amber-500/20 text-amber-500 rounded-xl shrink-0 h-fit">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Shift Cycles</h4>
                <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                  <strong>Mon – Fri:</strong> 7:00 – 9:30 AM | 4:00 – 11:30 PM
                  <br />
                  <strong>Saturday:</strong> 7:00 – 9:30 AM | 7:00 – 11:30 PM
                  <br />
                  <strong>Sunday:</strong> Closed (Recovery)
                </p>
              </div>
            </div>
          </div>

          {/* Map display block (Styled OSM / Mock Embed) */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 overflow-hidden relative group h-52 flex flex-col justify-end text-left">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-40 pointer-events-none" />
            
            {/* SVG stylized street map mockup */}
            <div className="absolute inset-0 p-6 flex items-center justify-center pointer-events-none opacity-40 select-none">
              <svg className="w-full h-full text-neutral-800" viewBox="0 0 400 200">
                <path d="M 0,50 L 400,50 M 0,150 L 400,150" stroke="currentColor" strokeWidth="4" />
                <path d="M 120,0 L 120,200 M 280,0 L 280,200" stroke="currentColor" strokeWidth="4" />
                <circle cx="280" cy="150" r="10" fill="#f59e0b" className="animate-pulse" />
                <text x="210" y="130" fill="white" fontSize="10" fontFamily="monospace">Rd Number 3</text>
                <text x="290" y="180" fill="white" fontSize="10" fontFamily="monospace">Sector 15-A/2</text>
              </svg>
            </div>

            {/* Google maps link */}
            <div className="relative z-10 space-y-2">
              <div className="bg-black/90 backdrop-blur-md p-3.5 border border-neutral-800/80 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">Find Us on Google Maps</h5>
                  <p className="text-[10px] text-neutral-500 font-mono mt-0.5">X357+3J Buffer Zone, Karachi</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Pro+Physique+Gym+Karachi+Buffer+Zone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Direct Messaging Form */}
        <div className="lg:col-span-7">
          <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Direct WhatsApp Messenger
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Fill out this form and we'll format your inquiry instantly. When you click send, it will launch WhatsApp to send a structured message directly to our desk!
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shumail Siddiqui"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-black/40 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    What are you interested in?
                  </label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full bg-black/40 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all"
                  >
                    <option value="general">General Inquiries & Pricing</option>
                    <option value="join">New Membership Sign-up</option>
                    <option value="coaching">Coach Aman Personal Training</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  Your message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ask us anything! e.g. I am a beginner, can I join in the morning split?"
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  className="w-full bg-black/40 border border-neutral-800 focus:border-amber-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all font-sans resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-neutral-500 font-sans leading-snug">
                  * Note: Clicking send redirects you to standard WhatsApp Web / Mobile App with pre-filled message text.
                </span>

                <button
                  type="submit"
                  disabled={formSubmitted}
                  className={`w-full sm:w-auto bg-amber-500 hover:bg-amber-600 disabled:bg-emerald-500 text-black py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-300`}
                >
                  {formSubmitted ? (
                    <>
                      <Check className="w-4 h-4 shrink-0" /> Redirecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 shrink-0" /> Launch WhatsApp Chat
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
