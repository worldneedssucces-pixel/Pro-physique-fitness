import React, { useState, useEffect } from "react";
import { Clock, Moon, Sun, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface TimeSlot {
  start: string;
  end: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

interface DaySchedule {
  dayName: string;
  dayIndex: number;
  isClosed: boolean;
  slots: TimeSlot[];
}

const SCHEDULE: DaySchedule[] = [
  {
    dayName: "Sunday",
    dayIndex: 0,
    isClosed: true,
    slots: [],
  },
  {
    dayName: "Monday",
    dayIndex: 1,
    isClosed: false,
    slots: [
      { start: "7:00 AM", end: "9:30 AM", startHour: 7, startMin: 0, endHour: 9, endMin: 30 },
      { start: "4:00 PM", end: "11:30 PM", startHour: 16, startMin: 0, endHour: 23, endMin: 30 },
    ],
  },
  {
    dayName: "Tuesday",
    dayIndex: 2,
    isClosed: false,
    slots: [
      { start: "7:00 AM", end: "9:30 AM", startHour: 7, startMin: 0, endHour: 9, endMin: 30 },
      { start: "4:00 PM", end: "11:30 PM", startHour: 16, startMin: 0, endHour: 23, endMin: 30 },
    ],
  },
  {
    dayName: "Wednesday",
    dayIndex: 3,
    isClosed: false,
    slots: [
      { start: "7:00 AM", end: "9:30 AM", startHour: 7, startMin: 0, endHour: 9, endMin: 30 },
      { start: "4:00 PM", end: "11:30 PM", startHour: 16, startMin: 0, endHour: 23, endMin: 30 },
    ],
  },
  {
    dayName: "Thursday",
    dayIndex: 4,
    isClosed: false,
    slots: [
      { start: "7:00 AM", end: "9:30 AM", startHour: 7, startMin: 0, endHour: 9, endMin: 30 },
      { start: "4:00 PM", end: "11:30 PM", startHour: 16, startMin: 0, endHour: 23, endMin: 30 },
    ],
  },
  {
    dayName: "Friday",
    dayIndex: 5,
    isClosed: false,
    slots: [
      { start: "7:00 AM", end: "9:30 AM", startHour: 7, startMin: 0, endHour: 9, endMin: 30 },
      { start: "4:00 PM", end: "11:30 PM", startHour: 16, startMin: 0, endHour: 23, endMin: 30 },
    ],
  },
  {
    dayName: "Saturday",
    dayIndex: 6,
    isClosed: false,
    slots: [
      { start: "7:00 AM", end: "9:30 AM", startHour: 7, startMin: 0, endHour: 9, endMin: 30 },
      { start: "7:00 PM", end: "11:30 PM", startHour: 19, startMin: 0, endHour: 23, endMin: 30 },
    ],
  },
];

export default function HoursTracker() {
  const [karachiTime, setKarachiTime] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSlot, setActiveSlot] = useState<TimeSlot | null>(null);
  const [nextOpening, setNextOpening] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Calculate Karachi time (UTC+5)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const kTime = new Date(utc + 3600000 * 5);
      setKarachiTime(kTime);

      const dayIdx = kTime.getDay(); // 0 is Sunday, 1 is Monday, etc.
      const currentMin = kTime.getHours() * 60 + kTime.getMinutes();

      const daySched = SCHEDULE.find((s) => s.dayIndex === dayIdx);
      if (!daySched || daySched.isClosed) {
        setIsOpen(false);
        setActiveSlot(null);
        calculateNextOpening(kTime, dayIdx);
        return;
      }

      let open = false;
      let matchingSlot: TimeSlot | null = null;

      for (const slot of daySched.slots) {
        const startMin = slot.startHour * 60 + slot.startMin;
        const endMin = slot.endHour * 60 + slot.endMin;

        if (currentMin >= startMin && currentMin <= endMin) {
          open = true;
          matchingSlot = slot;
          break;
        }
      }

      setIsOpen(open);
      setActiveSlot(matchingSlot);
      if (!open) {
        calculateNextOpening(kTime, dayIdx);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const calculateNextOpening = (currentKarachi: Date, dayIdx: number) => {
    const currentMin = currentKarachi.getHours() * 60 + currentKarachi.getMinutes();

    // Look through today and subsequent days
    for (let i = 0; i < 7; i++) {
      const checkDayIdx = (dayIdx + i) % 7;
      const daySched = SCHEDULE.find((s) => s.dayIndex === checkDayIdx);

      if (!daySched || daySched.isClosed) continue;

      for (const slot of daySched.slots) {
        const startMin = slot.startHour * 60 + slot.startMin;

        // If checking today, the slot start must be in the future
        if (i === 0 && startMin <= currentMin) {
          continue;
        }

        const prefix = i === 0 ? "today at " : i === 1 ? "tomorrow at " : `on ${daySched.dayName} at `;
        setNextOpening(`${prefix}${slot.start}`);
        return;
      }
    }
    setNextOpening("Monday at 7:00 AM");
  };

  const getDayFormattedTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const karachiDayIndex = karachiTime.getDay();

  return (
    <div id="hours-tracker-section" className="bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-neutral-800 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-neutral-800/80">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-3 w-3 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-400" : "bg-rose-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? "bg-emerald-500" : "bg-rose-500"}`}></span>
            </span>
            <span className={`text-sm font-semibold uppercase tracking-wider ${isOpen ? "text-emerald-400" : "text-rose-400"}`}>
              {isOpen ? "Open Now" : "Closed Now"}
            </span>
          </div>
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">
            {isOpen ? "Unleash Your Potential" : "Next Session Starts Soon"}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            {isOpen && activeSlot
              ? `Active slot: ${activeSlot.start} – ${activeSlot.end}`
              : `Doors open ${nextOpening}`}
          </p>
        </div>

        <div className="bg-black/40 px-4 py-3 rounded-xl border border-neutral-800/50 flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2 text-amber-500 text-sm font-mono uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>Karachi Local Time</span>
          </div>
          <div className="text-2xl font-mono font-bold text-white tracking-tight">
            {getDayFormattedTime(karachiTime)}
          </div>
          <div className="text-xs text-neutral-500 font-mono mt-0.5">
            {karachiTime.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' })}
          </div>
        </div>
      </div>

      <div className="grid gap-3.5 mt-6">
        {SCHEDULE.map((day) => {
          const isToday = day.dayIndex === karachiDayIndex;
          return (
            <div
              key={day.dayName}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${
                isToday
                  ? "bg-amber-500/10 border border-amber-500/30 text-white"
                  : "bg-neutral-950/20 hover:bg-neutral-950/40 border border-transparent text-neutral-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-xs ${
                    isToday ? "bg-amber-500 text-black" : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  {day.dayName.substring(0, 3)}
                </div>
                <span className={`font-medium ${isToday ? "text-amber-400 font-bold" : "text-white"}`}>
                  {day.dayName}
                </span>
                {isToday && (
                  <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase font-mono tracking-wider">
                    Today
                  </span>
                )}
              </div>

              <div className="mt-2 sm:mt-0 font-mono text-sm">
                {day.isClosed ? (
                  <span className="text-neutral-500 italic uppercase">Closed</span>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                    {day.slots.map((slot, index) => (
                      <span
                        key={index}
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${
                          isToday && isOpen && activeSlot?.start === slot.start
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-neutral-900/80 text-neutral-300 border border-neutral-800"
                        }`}
                      >
                        {slot.startHour < 12 ? (
                          <Sun className="w-3.5 h-3.5 text-amber-500/80" />
                        ) : (
                          <Moon className="w-3.5 h-3.5 text-purple-400" />
                        )}
                        {slot.start} – {slot.end}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-start gap-2.5 mt-5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs text-neutral-400 font-sans leading-relaxed">
        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <p>
          <strong>Note:</strong> Timings are split into specialized morning (7:00 AM – 9:30 AM) and evening / night shifts. Friday split: 7:00 – 9:30 AM & 4:00 – 11:30 PM. Sunday is our dedicated recovery day.
        </p>
      </div>
    </div>
  );
}
