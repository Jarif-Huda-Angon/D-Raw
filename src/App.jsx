import React, { useState } from 'react';
import {
  Dumbbell,
  Users,
  CalendarClock,
  Smartphone,
  ChevronRight,
  PlayCircle,
  Utensils,
  CheckCircle2,
  Activity,
  Trophy,
  Sparkles,
  Zap,
  XOctagon
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-1.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              <Dumbbell className="w-6 h-6 text-slate-950" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black tracking-tight">D-RAW<span className="text-emerald-500">.OS</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#core-problem" className="hover:text-emerald-400 transition-colors">The Problem</a>
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">The Solution</a>
            <a href="#premium" className="hover:text-emerald-400 transition-colors">AI Features</a>
          </div>
          <button className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            Partner Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg">
            <Sparkles className="w-4 h-4" />
            The First AI-Powered Gym OS in BD
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            The End of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 line-through decoration-slate-600 decoration-8 opacity-80">
              "Bhai, ajke ki marbo?"
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 font-semibold">
            D-Raw completely eliminates gym floor confusion.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your students open the app and are immediately hit with the command: <strong className="text-emerald-400">Chest & Triceps at 6:00 PM</strong>. No existing app in Bangladesh is optimizing the physical flow of the gym floor like this.
          </p>

          <div className="max-w-md mx-auto relative z-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your gym's email"
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all shadow-inner"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2">
                  Claim Market <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-xl flex items-center justify-center gap-3 font-medium backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5" />
                Commander, we'll contact you to deploy D-Raw.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* The Core Problem Block */}
      <section id="core-problem" className="py-16 border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/20">
                <XOctagon className="w-4 h-4" /> The Core Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Other apps track payments. <br />We track <span className="text-emerald-400">execution.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Right now, your gym operates in chaos. One trainer is managing 30 students. Every student walks in, interrupts the trainer, and asks what they should do. Members get frustrated, trainers burn out, and people quit.
              </p>
              <ul className="space-y-3 text-slate-300 font-medium">
                <li className="flex items-center gap-3">
                  <XOctagon className="w-5 h-5 text-red-400" /> Trainers overwhelmed with repetitive questions.
                </li>
                <li className="flex items-center gap-3">
                  <XOctagon className="w-5 h-5 text-red-400" /> Students wandering aimlessly on the floor.
                </li>
                <li className="flex items-center gap-3">
                  <XOctagon className="w-5 h-5 text-red-400" /> High drop-out rates because of poor communication.
                </li>
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Zap className="w-32 h-32 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" /> The D-Raw Solution
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-emerald-500 font-bold mb-1 uppercase tracking-wider">Step 1: The Command</div>
                  <p className="text-sm text-slate-300">Trainer assigns "Back & Biceps" to 15 students in 3 clicks from their dashboard.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-emerald-500 font-bold mb-1 uppercase tracking-wider">Step 2: The Arrival</div>
                  <p className="text-sm text-slate-300">Student opens app. Instantly sees target. No asking. Just lifting.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs text-emerald-500 font-bold mb-1 uppercase tracking-wider">Step 3: The Proof</div>
                  <p className="text-sm text-slate-300">Student hits "Complete". Trainer gets a live ping. Accountability locked in.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Solution - Dual Interface Breakdown */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">The Architecture</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">One Ecosystem. Two Views.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Trainer Feature Block */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-500/20 p-2.5 rounded-xl border border-blue-500/30">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Trainer Command Center</h3>
                </div>
                <p className="text-slate-400 mb-6">Manage dozens of clients efficiently. Assign workouts, set times, and update diet charts without sending a single WhatsApp message.</p>

                {/* UI Mockup Mini */}
                <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 shadow-xl">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
                    <span className="font-bold text-white">Assign Target: Jarif</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded font-bold">Today, 6:00 PM</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-900 rounded-lg p-3 border border-slate-800 flex justify-between items-center">
                      <span className="text-sm text-slate-300">Muscle Group</span>
                      <span className="text-sm font-bold text-white">Chest & Triceps</span>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-3 border border-slate-800">
                      <span className="text-xs text-slate-500 block mb-1">Diet Instructions</span>
                      <span className="text-sm text-slate-300">"Hit 160g protein today. No sugar."</span>
                    </div>
                    <button className="w-full bg-blue-500/20 text-blue-400 font-bold py-2 rounded-lg border border-blue-500/30 text-sm">Deploy to Student's App</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Feature Block */}
            <div className="space-y-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-500/20 p-2.5 rounded-xl border border-emerald-500/30">
                    <Smartphone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Student Dashboard</h3>
                </div>
                <p className="text-slate-400 mb-6">Students wake up knowing exactly what muscle to train and when to show up. Less talking, more lifting. Pure accountability.</p>

                {/* UI Mockup Mini */}
                <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Today's Directive</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Chest & Triceps</div>
                    <div className="inline-flex items-center gap-2 mt-3 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 text-sm">
                      <CalendarClock className="w-4 h-4 text-emerald-500" /> 6:00 PM Schedule
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 mb-4 flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-400 mb-1">Trainer's Diet Note</div>
                      <div className="text-sm text-slate-200">"Hit 160g protein today. No sugar."</div>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-500 text-slate-950 font-black py-3 rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    Mark Workout Complete
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium AI Upsell Section */}
      <section id="premium" className="py-24 bg-slate-900/80 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-bold text-emerald-400 mb-6">
            <Trophy className="w-4 h-4" /> The AI Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Market Yourself as the City's First AI Gym</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
            D-Raw doesn't just manage your floor; it builds your brand. Let your members upgrade their app experience with our cutting-edge AI integrations built specifically for Bangladesh.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group">
              <div className="bg-emerald-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Utensils className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Bengali AI Diet Scanner (Pro)</h3>
              <p className="text-slate-400 leading-relaxed">International apps fail at local food. With D-Raw, your students snap a photo of their Kacchi or Chicken Curry, and our Gemini Vision AI instantly calculates the protein and carbs. Charge a premium for this add-on.</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-colors group">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Smart Form Library</h3>
              <p className="text-slate-400 leading-relaxed">When a trainer assigns an exercise, students can tap it to instantly watch a perfect-form tutorial video. Eliminates bad form and injuries when the trainer is busy spotting another client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500/20 p-1 rounded">
              <Dumbbell className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="font-bold text-slate-300 tracking-widest">D-RAW.ORG</span>
          </div>
          <p className="text-center md:text-left">© {new Date().getFullYear()} D-Raw OS. Engineered by TIM for the South Asian market.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}