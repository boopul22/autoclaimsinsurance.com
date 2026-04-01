import { Zap, Shield, DollarSign, Headphones, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast & Free Claim Review',
    desc: "Find out what your claim is worth in minutes. No cost, no obligation — just straight answers from real experts.",
  },
  {
    icon: Shield,
    title: 'Auto Accident Specialists',
    desc: "Whether it's a fender bender or a serious wreck, we've helped thousands get fair compensation — and we're ready to help you too.",
  },
  {
    icon: DollarSign,
    title: 'No Win, No Fee Guarantee',
    desc: "You only pay when we win. That's how confident we are in getting you what you're owed.",
  },
  {
    icon: Headphones,
    title: '24/7 Support & Updates',
    desc: "Accidents don't happen on a schedule. Our team is available around the clock to answer questions and keep you in the loop.",
  },
]

export default function OurCommitment() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.15em]">
            Our Promise
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-gray-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
            We Fight for What You're Owed
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Injured in a car accident? We're here to help you get maximum compensation — for property damage, medical bills, lost wages, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 ${
                i % 2 === 0
                  ? 'bg-brand-700 text-white'
                  : 'bg-white border border-gray-100 card-shadow'
              }`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 ${
                i % 2 === 0 ? 'bg-white/15' : 'bg-brand-50 border border-brand-100'
              }`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${i % 2 === 0 ? 'text-white' : 'text-accent'}`} />
              </div>
              <h3 className={`text-base sm:text-lg font-bold mb-2 ${i % 2 === 0 ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
              <p className={`text-sm sm:text-base leading-relaxed ${i % 2 === 0 ? 'text-blue-100/80' : 'text-gray-500'}`}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors"
          >
            Start Your Free Claim
          </a>
          <p className="mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm flex items-center justify-center gap-1">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            100% Confidential — Your privacy is protected
          </p>
        </div>
      </div>
    </section>
  )
}
