import React, { useState } from "react";
import { Dumbbell, Activity, CheckCircle, Scale } from "lucide-react";

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");
  const [colorClass, setColorClass] = useState<string>("");
  const [goal, setGoal] = useState<string>("strength"); // strength, loss, beginner
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m

    if (w > 0 && h > 0) {
      const calculatedBmi = parseFloat((w / (h * h)).toFixed(1));
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setStatus("Underweight");
        setColorClass("text-amber-400 bg-amber-400/10 border-amber-400/20");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setStatus("Healthy Weight");
        setColorClass("text-emerald-400 bg-emerald-400/10 border-emerald-400/20");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setStatus("Overweight");
        setColorClass("text-orange-400 bg-orange-400/10 border-orange-400/20");
      } else {
        setStatus("Obese");
        setColorClass("text-rose-400 bg-rose-400/10 border-rose-400/20");
      }
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
    setInquirySubmitted(false);
  };

  return (
    <div id="fitness-utility-section" className="bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-neutral-800 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
          <Scale className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-display font-bold text-white tracking-tight">
            Interactive BMI & Fitness Tracker
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Calculate your Body Mass Index (BMI) instantly and discover customized workout paths.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Form Column */}
        <div className="lg:col-span-5 space-y-5">
          <form onSubmit={calculateBMI} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Your Weight (kg)
              </label>
              <input
                type="number"
                required
                min="30"
                max="250"
                step="0.1"
                placeholder="e.g. 74"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-black/40 border border-neutral-800 focus:border-amber-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Your Height (cm)
              </label>
              <input
                type="number"
                required
                min="100"
                max="250"
                placeholder="e.g. 176"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-black/40 border border-neutral-800 focus:border-amber-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Primary Fitness Objective
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-black/40 border border-neutral-800 focus:border-amber-500/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-all"
              >
                <option value="strength">Bodybuilding & Muscle Gains</option>
                <option value="loss">Weight Loss & Conditioning</option>
                <option value="beginner">Beginner Friendly Guidance</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-black text-sm font-bold py-3 px-4 rounded-xl shadow-lg transition-all"
              >
                Calculate Now
              </button>
              {bmi !== null && (
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium py-3 px-4 rounded-xl transition-all"
                >
                  Clear
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Output Suggestions Column */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-black/30 border border-neutral-800/60 rounded-2xl p-6 relative overflow-hidden">
          {bmi === null ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-12">
              <Activity className="w-12 h-12 text-neutral-700 animate-pulse mb-3" />
              <p className="text-sm text-neutral-400 max-w-sm">
                Enter your stats and objective to generate your BMI calculation and preview a custom workout plan designed specifically around our gym's variations.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* BMI Score card */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Your BMI Score</span>
                  <div className="text-3xl font-mono font-black text-white mt-0.5">{bmi}</div>
                </div>
                <div className={`px-4 py-1.5 rounded-lg border font-mono text-xs font-semibold uppercase ${colorClass}`}>
                  {status}
                </div>
              </div>

              {/* Training suggestion */}
              <div>
                <h4 className="text-sm font-mono text-amber-500 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                  <Dumbbell className="w-4 h-4" /> Recommended Training Pathway
                </h4>

                {goal === "strength" && (
                  <div className="space-y-3">
                    <p className="text-sm text-neutral-300">
                      To optimize muscle hypertrophy and build heavy raw power, you should utilize Pro Physique's specialized <strong>Strength & Weight Lifting Zones</strong>:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Neatly sorted heavy free-weights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> High-end machine variations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Power platforms & squat racks
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Personalized progressive load
                      </li>
                    </ul>
                  </div>
                )}

                {goal === "loss" && (
                  <div className="space-y-3">
                    <p className="text-sm text-neutral-300">
                      To maximize caloric deficit and trigger rapid body fat adaptation, combine our <strong>Aerobic Cardio Zone</strong> with full-body muscle conditioning:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Treadmills & elliptical routines
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> High-intensity interval sets
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Fast metabolic circuits
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Affordable membership packages
                      </li>
                    </ul>
                  </div>
                )}

                {goal === "beginner" && (
                  <div className="space-y-3">
                    <p className="text-sm text-neutral-300">
                      For newcomers to fitness, the <strong>friendly guidance of Coach Aman</strong> and our attentive training staff ensures perfect posture, absolute safety, and swift progress:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Precise body-shape advice
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Friendly & safe environment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Easy machine adjustments
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" /> Zero intimidating atmospheres
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* WhatsApp direct contact / Inquiry */}
              <div className="pt-4 border-t border-neutral-800">
                {!inquirySubmitted ? (
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <span className="text-xs text-neutral-400">
                      Get a free session schedule matching this profile:
                    </span>
                    <button
                      type="button"
                      onClick={() => setInquirySubmitted(true)}
                      className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 hover:border-amber-500 text-amber-500 text-xs font-bold px-4 py-2 rounded-lg transition-colors font-mono"
                    >
                      APPLY PLAN INQUIRY
                    </button>
                  </div>
                ) : (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded-lg text-xs flex items-center gap-2">
                    <CheckCircle className="w-4.5 h-4.5" />
                    <span>Inquiry applied! Share this BMI profile ({bmi}) with us on WhatsApp at <strong>+92 349 1943234</strong> for personal training slots.</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
