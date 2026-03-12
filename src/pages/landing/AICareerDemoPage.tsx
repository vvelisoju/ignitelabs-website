import { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  MapPin,
  Brain,
  Lightbulb,
  Rocket,
  GraduationCap,
  Star,
  CheckCircle2,
  Sparkles,
  Monitor,
  Award,
  Phone,
  Clock,
  BadgeCheck,
  Zap,
  Wifi,
  Building,
} from "lucide-react";
import { LeadCaptureForm } from "../../components/leads/LeadCaptureForm";

// ─── EVENT TEMPLATE DATA ────────────────────────────────────────────────────
// Update this object to customize the page for different events/demos.
// Soon this can be fetched from an API.
const EVENT = {
  // Branding
  logoUrl: "/assets/Ignite Labs Logo Horizental.png",
  orgName: "Ignite Labs",
  orgTagline: "Real World Technology Learning",

  // Event info
  title: "AI & Machine Learning",
  titleHighlight: "Career Demo",
  subtitle: "Live Session with an IIT Graduate & PhD AI Researcher",
  date: "March 29, 2026",
  time: "10:00 AM — 1:00 PM",
  location: "Ignite Labs, Warangal",
  phone: "9494 644 848",

  // Modes available
  modes: {
    online: true,
    offline: true,
  },

  // Pricing
  originalPrice: "₹500",
  currentPrice: "FREE",

  // Form config
  formType: "register" as const,
  defaultInterestedIn: "ai_ml_career_demo",

  // Speaker
  speaker: {
    name: "Dr. Manoj Kumar Gudala",
    imageUrl: "/assets/images/dr-manoj-gudala.jpg",
    credentials: [
      { label: "IIT Graduate", highlight: true, badge: true },
      { label: "PhD in Artificial Intelligence", highlight: true, badge: true },
      { label: "AI & Machine Learning Researcher", highlight: false, badge: false },
      { label: "Industry Expert", highlight: false, badge: false },
    ],
  },

  // Topics covered
  topics: [
    { icon: "rocket", title: "AI Career Roadmap", desc: "Most in-demand AI roles & how to get there" },
    { icon: "monitor", title: "Live AI Project Demo", desc: "Watch a real AI model built & deployed live" },
    { icon: "lightbulb", title: "Industry Insights", desc: "What top companies look for in AI engineers" },
    { icon: "sparkles", title: "Top AI Skills 2026", desc: "Technologies you must master this year" },
  ],

  // Who should attend
  audience: [
    "B.Tech / Degree Students (CSE, IT, ECE, EEE & all branches)",
    "Final Year Students seeking project ideas & career guidance",
    "MCA / M.Tech students exploring AI specialization",
    "Anyone interested in AI & Technology careers",
  ],

  // Trust points shown below the form
  trustPoints: ["No registration fee", "Instant confirmation", "Limited seats only"],
};
// ─────────────────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  rocket: <Rocket className="h-5 w-5" />,
  monitor: <Monitor className="h-5 w-5" />,
  lightbulb: <Lightbulb className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
};

// ─── AI PARTICLE COMPONENT ──────────────────────────────────────────────────
function AIParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-pulse"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#3b82f6" : "#a855f7",
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── CONFETTI CELEBRATION ───────────────────────────────────────────────────
function Confetti() {
  const [particles, setParticles] = useState<
    { id: number; x: number; color: string; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const colors = ["#f97316", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#ec4899"];
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 1.5,
      size: Math.random() * 8 + 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            top: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
        }
      `}</style>
    </div>
  );
}

export default function AICareerDemoPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSuccess = useCallback(() => {
    setShowSuccess(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060e1f] via-[#0d2247] to-[#0a1628] text-white relative">
      {/* AI Particles background */}
      <AIParticles />

      {/* Confetti on success */}
      {showConfetti && <Confetti />}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ===== TOP BAR ===== */}
      <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-2 text-center relative z-10">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3 flex-wrap">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="text-sm font-bold text-white">
            {EVENT.orgName} — {EVENT.orgTagline}
          </span>
          <a
            href={`tel:${EVENT.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium"
          >
            <Phone className="h-3.5 w-3.5" />
            {EVENT.phone}
          </a>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: Event Details (3/5 width) ── */}
          <div className="lg:col-span-3 space-y-6">
            {/* Logo + badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img src={EVENT.logoUrl} alt={EVENT.orgName} className="h-10 md:h-12" />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-400/30 text-orange-300 rounded-full px-3 py-1 text-xs font-bold">
                  <Sparkles className="h-3 w-3" /> LIVE EVENT
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-500/15 border border-green-400/30 text-green-300 rounded-full px-3 py-1 text-xs font-bold">
                  <Zap className="h-3 w-3" /> FREE ENTRY
                </span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                {EVENT.title}
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  {EVENT.titleHighlight}
                </span>
              </h1>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                {EVENT.subtitle.split("IIT Graduate").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <span className="text-orange-300 font-extrabold bg-orange-500/10 px-1.5 py-0.5 rounded">IIT Graduate</span>
                    </span>
                  ) : (
                    <span key={i}>
                      {part.split("PhD").map((p2, j) =>
                        j === 0 ? (
                          <span key={j}>
                            {p2}
                            <span className="text-blue-300 font-extrabold bg-blue-500/10 px-1.5 py-0.5 rounded">PhD</span>
                          </span>
                        ) : (
                          <span key={j}>{p2}</span>
                        )
                      )}
                    </span>
                  )
                )}
              </p>
            </div>

            {/* Worth badge + Online/Offline highlight */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg px-4 py-2.5 font-bold shadow-lg shadow-orange-500/20 animate-pulse">
                  <Star className="h-5 w-5" />
                  Worth {EVENT.originalPrice} — {EVENT.currentPrice} Now!
                </div>
                <span className="text-sm text-blue-300 font-medium">Limited seats available</span>
              </div>

              {/* Online / Offline mode cards */}
              {(EVENT.modes.online || EVENT.modes.offline) && (
                <div className="flex gap-3 flex-wrap">
                  {EVENT.modes.offline && (
                    <div className="flex items-center gap-2.5 bg-blue-500/10 border-2 border-blue-400/30 rounded-xl px-4 py-3 group hover:bg-blue-500/15 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Building className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-blue-300">Offline Mode</p>
                        <p className="text-[11px] text-blue-400">{EVENT.location}</p>
                      </div>
                    </div>
                  )}
                  {EVENT.modes.online && (
                    <div className="flex items-center gap-2.5 bg-green-500/10 border-2 border-green-400/30 rounded-xl px-4 py-3 group hover:bg-green-500/15 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Wifi className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-300">Online Mode</p>
                        <p className="text-[11px] text-green-400">Join from anywhere</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Event details row */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
                <Calendar className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-semibold">{EVENT.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
                <Clock className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-semibold">{EVENT.time}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-semibold">{EVENT.location}</span>
              </div>
            </div>

            {/* Speaker card (compact) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 border border-blue-400/20 overflow-hidden">
                  <img
                    src={EVENT.speaker.imageUrl}
                    alt={EVENT.speaker.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML =
                        '<div class="flex items-center justify-center w-full h-full"><svg class="h-8 w-8 text-blue-400/60" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg></div>';
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-white mb-1">{EVENT.speaker.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {EVENT.speaker.credentials
                      .filter((c) => c.badge)
                      .map((c, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                            c.label.includes("IIT")
                              ? "bg-orange-500/20 text-orange-300 border border-orange-400/30"
                              : "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                          }`}
                        >
                          <Award className="h-2.5 w-2.5" />
                          {c.label}
                        </span>
                      ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-blue-300">
                    {EVENT.speaker.credentials
                      .filter((c) => !c.badge)
                      .map((c, i) => (
                        <span key={i} className="flex items-center gap-1">
                          <BadgeCheck className="h-3.5 w-3.5 text-green-400" />
                          {c.label}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Topics covered */}
            <div>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-400" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EVENT.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-lg p-3.5 hover:bg-white/10 hover:border-white/15 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-blue-600/50 text-blue-200 rounded-lg flex items-center justify-center">
                      {ICON_MAP[topic.icon] || <Brain className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{topic.title}</h3>
                      <p className="text-xs text-blue-300">{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who should attend */}
            <div>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-orange-400" />
                Who Should Attend
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EVENT.audience.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-blue-200">
                    <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Registration Form (2/5 width) ── */}
          <div className="lg:col-span-2">
            <div className="sticky top-6 max-w-sm mx-auto lg:max-w-none">
              {/* Price badge */}
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full px-5 py-2 font-bold shadow-lg shadow-orange-500/20 text-sm">
                  <Star className="h-4 w-4" />
                  <span className="line-through opacity-70">{EVENT.originalPrice}</span>
                  <span className="text-lg">{EVENT.currentPrice}</span>
                  <span className="text-xs bg-white/20 rounded px-1.5 py-0.5">Limited Time</span>
                </div>
              </div>

              {/* Form card */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 p-5 md:p-6 relative overflow-hidden">
                {/* AI glow accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  {showSuccess ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <div className="mb-3 rounded-full bg-green-100 p-3">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Thank You for Registering!
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        Our team will contact you with further details about the{" "}
                        {EVENT.title} {EVENT.titleHighlight}.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {EVENT.date} — {EVENT.location}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-extrabold text-gray-900">
                          Register Now
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Secure your free seat for the demo
                        </p>
                      </div>

                      <LeadCaptureForm
                        formType={EVENT.formType}
                        onSuccess={handleSuccess}
                        defaultInterestedIn={EVENT.defaultInterestedIn}
                        showModeSelector={EVENT.modes.online && EVENT.modes.offline}
                        defaultMode="offline"
                        extraData={{
                          event: `${EVENT.title} ${EVENT.titleHighlight}`,
                          eventDate: EVENT.date,
                          eventLocation: EVENT.location,
                        }}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Trust points */}
              <div className="flex flex-col items-center gap-2 mt-4">
                {EVENT.trustPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-blue-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
                    {point}
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <div className="text-center mt-4">
                <a
                  href={`tel:${EVENT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call: {EVENT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MINIMAL FOOTER ===== */}
      <div className="border-t border-white/10 py-4 text-center relative z-10">
        <p className="text-xs text-blue-400">
          © {new Date().getFullYear()} {EVENT.orgName} — {EVENT.orgTagline} · {EVENT.location}
        </p>
      </div>
    </div>
  );
}
