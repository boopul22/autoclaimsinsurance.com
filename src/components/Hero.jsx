import { Phone, Shield, Car, Clock, Star, ArrowRight } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'No Win, No Fee' },
  { icon: Car, label: 'Free Rental Car' },
  { icon: Clock, label: '24/7 Support' },
  { icon: Star, label: '10,000+ Claims Won' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white pt-24 sm:pt-32 lg:pt-44 pb-14 sm:pb-20 lg:pb-28 px-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center relative z-10">
        <div>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 font-semibold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            24/7 — Claims Experts Standing By
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl xl:text-[4.25rem] leading-[1.1] text-white mb-4 sm:mb-6">
            Car Accident?{' '}
            <span className="text-amber-300">Get the Money</span>{' '}
            You Deserve.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-blue-100/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
            Not at fault? We fight to get you maximum compensation — fast. Free case review, no upfront costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-colors"
            >
              Start Your Free Claim
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:8886263214"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              (888) 626-3214
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/8 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white/80">
                <Icon className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right side — stats & social proof (desktop only) */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="bg-white/10 rounded-3xl border border-white/15 p-8 mb-4">
              <div className="text-center mb-6">
                <p className="text-5xl font-serif font-bold text-white mb-1">$2.4M+</p>
                <p className="text-blue-200/70 text-sm">Recovered for Our Clients</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '10k+', label: 'Claims Filed' },
                  { value: '98%', label: 'Success Rate' },
                  { value: '$0', label: 'Upfront Cost' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center bg-white/8 rounded-xl py-3 px-2">
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="text-xs text-blue-200/60">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 card-shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">
                  JM
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">James M.</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs text-gray-400">Verified</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "They handled everything after my rear-end collision. Got my settlement in 3 weeks — way more than the insurance company first offered."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
