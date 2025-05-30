import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Clock,
  TrendingUp,
  Lightbulb,
  ImageIcon,
  FileText,
  Sparkles,
  Download,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { WaitlistForm } from "@/components/landing/waitlist-form"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2.5">
            <Youtube className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold tracking-tight">Boostling</span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
            >
              How It Works
            </Link>
            <Link href="#waitlist-form" passHref>
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold">
                Join Waitlist
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-36 lg:py-48 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Stop Guessing.</span>
              <span className="block mt-1 sm:mt-2 md:mt-3 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Start Growing.
              </span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg text-slate-300 md:text-xl lg:text-2xl">
              Boostling uses AI to craft irresistible YouTube titles & thumbnails in seconds. Save time, skyrocket CTR,
              and create with confidence.
            </p>
            <div className="mt-10 md:mt-12">
              <Link href="#waitlist-form" passHref>
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-10 py-4 text-lg shadow-lg hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  Get Early Access
                  <ArrowRight className="ml-2.5 h-5 w-5" />
                </Button>
              </Link>
              <p className="mt-4 text-sm text-slate-400">Join thousands of creators ready to level up.</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Unlock Your Channel's <span className="text-emerald-400">Full Potential</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                Boostling isn't just a tool; it's your unfair advantage in the competitive YouTube landscape.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Clock className="h-10 w-10 text-emerald-400 mb-4" />,
                  title: "Reclaim Your Time",
                  description:
                    "Generate dozens of unique titles and thumbnail concepts instantly. Cut pre-production hours to minutes.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-emerald-400 mb-4" />,
                  title: "Maximize Your Clicks",
                  description:
                    "Leverage AI-optimized copy and design principles for titles and thumbnails that viewers can't resist.",
                },
                {
                  icon: <Lightbulb className="h-10 w-10 text-emerald-400 mb-4" />,
                  title: "Endless Creative Fuel",
                  description:
                    "Transform raw video ideas (text or audio!) into compelling titles and diverse thumbnail visuals.",
                },
                {
                  icon: <ImageIcon className="h-10 w-10 text-emerald-400 mb-4" />,
                  title: "AI-Generated Thumbnails",
                  description:
                    "Go from concept to reality with AI-generated thumbnail image variations. Download production-ready assets.",
                },
              ].map((benefit) => (
                <Card
                  key={benefit.title}
                  className="bg-slate-900 border-slate-800 text-slate-50 flex flex-col items-center text-center p-6 md:p-8 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-emerald-500/70 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  {benefit.icon}
                  <h3 className="text-xl font-semibold mb-2 mt-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Stunning YouTube Assets in <span className="text-emerald-400">3 Simple Steps</span>
              </h2>
            </div>
            <div className="grid gap-10 md:gap-12 md:grid-cols-3 items-start">
              {[
                {
                  icon: <FileText className="h-10 w-10 text-emerald-400" />,
                  title: "Input Your Idea",
                  description:
                    "Share your video concept as text or even rambling audio. We'll handle the transcription.",
                },
                {
                  icon: <Sparkles className="h-10 w-10 text-emerald-400" />,
                  title: "Get AI Magic",
                  description:
                    "Receive multiple AI-generated title suggestions and thumbnail concepts tailored to your content.",
                },
                {
                  icon: <Download className="h-10 w-10 text-emerald-400" />,
                  title: "Download & Dominate",
                  description:
                    "Select your favorites and download production-ready thumbnail images to elevate your channel.",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 text-2xl font-bold mb-6">
                    {index + 1}
                  </div>
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="waitlist-form" className="w-full py-16 md:py-24 bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center bg-slate-800/50 p-8 md:p-12 rounded-xl border border-slate-700 shadow-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-emerald-400">
                Be First in Line for Boostling
              </h2>
              <p className="mt-5 text-lg text-slate-300">
                Sign up now for early access, exclusive updates, and help shape the future of YouTube content creation.
                Don't miss out!
              </p>
              <div className="mt-8">
                <WaitlistForm />
                <p className="mt-4 text-xs text-slate-400">We respect your privacy. No spam, ever.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-10 border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Boostling. AI-Powered YouTube Success.
          <p className="mt-1">Built to help creators shine.</p>
        </div>
      </footer>
    </div>
  )
}
