import React from "react";
import { Star, MessageSquare, ShieldCheck, Quote } from "lucide-react";

interface ReviewData {
  author: string;
  text: string;
  role: string;
  rating: number;
  initials: string;
  badge: string;
}

const REVIEWS: ReviewData[] = [
  {
    author: "Ashar Malick",
    role: "Regular Member",
    text: "Great gym with top-notch equipment, a clean environment, and motivating trainers who truly care about your progress.",
    rating: 5,
    initials: "AM",
    badge: "Verified Member",
  },
  {
    author: "Shumail Siddiqui",
    role: "Dedicated Lifter",
    text: "GYM environment was very great and Owner is also a humble and Aman is very kind heart and great trainer , 💯 recommended ✅ …",
    rating: 5,
    initials: "SS",
    badge: "Verified Member",
  },
  {
    author: "Maham",
    role: "Fitness Enthusiast",
    text: "I recently joined Pro Physique Gym and I’m really satisfied with my experience so far. The prices are quite affordable compared to other gyms, and they have plenty of equipment for all types of workouts. The environment is good and overall it’s a great place to train.",
    rating: 5,
    initials: "M",
    badge: "Verified Member",
  },
  {
    author: "Arham Khan",
    role: "Strength Member",
    text: "It's a great gym with Good machine and different variations.",
    rating: 5,
    initials: "AK",
    badge: "Verified Member",
  },
  {
    author: "Muzammil Ahmed",
    role: "Beginner Specialist",
    text: "Best place ever especially for beginners. The environment is extremely friendly and so are the instructors. Who give precise instructions based on ones body shape, personalized and to the point.",
    rating: 5,
    initials: "MA",
    badge: "Verified Member",
  },
];

export default function ReviewList() {
  return (
    <div id="reviews-section" className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            What Our Members Say
          </h2>
          <p className="text-neutral-400 mt-2 max-w-xl">
            Real feedback from local fitness enthusiasts in Karachi. Read about our affordable pricing, supportive community, and expert trainers.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-xl">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500" />
            ))}
          </div>
          <span className="text-sm font-bold text-white">5.0 / 5.0 Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((rev, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/80 p-6 rounded-2xl relative group hover:border-amber-500/30 hover:bg-neutral-900/60 transition-all duration-300"
          >
            {/* Quote Mark Decoration */}
            <div className="absolute top-4 right-6 text-neutral-800 group-hover:text-amber-500/10 transition-colors pointer-events-none">
              <Quote className="w-12 h-12" />
            </div>

            <div>
              {/* Rating */}
              <div className="flex text-amber-500 gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-300 text-sm leading-relaxed italic pr-4 relative z-10 font-sans">
                "{rev.text}"
              </p>
            </div>

            {/* Profile Row (Sleek Initials Avatar, No Images) */}
            <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-neutral-800/60">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-black font-bold text-sm flex items-center justify-center tracking-tight shadow-md">
                {rev.initials}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-semibold text-white truncate">
                    {rev.author}
                  </h4>
                  <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" title="Verified Gym Member" />
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    {rev.role}
                  </span>
                  <span className="text-[8px] bg-neutral-800 text-neutral-400 px-1 py-0.5 rounded font-mono uppercase">
                    {rev.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left">
          <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 text-amber-500">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-display font-semibold text-white">
              Are you already training with us?
            </h4>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Your feedback is what helps us grow! Tag us in your Instagram stories <a href="https://www.instagram.com/prophysiquekarachi/?hl=en" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">@prophysiquekarachi</a> and leave your review to get highlighted!
            </p>
          </div>
        </div>
        <a
          href="https://www.facebook.com/prophysiquekarachi/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all"
        >
          Leave a Review
        </a>
      </div>
    </div>
  );
}
