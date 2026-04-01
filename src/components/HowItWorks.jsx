import { FileText, Settings, DollarSign, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '1',
    icon: FileText,
    title: 'Tell Us What Happened',
    description:
      'Fill out our quick form or give us a call. We\'ll review your accident details and let you know if you have a case — completely free.',
  },
  {
    num: '2',
    icon: Settings,
    title: 'We Take It From Here',
    description:
      'Our team gathers evidence, talks to insurance companies, and handles all the paperwork. You focus on recovering.',
  },
  {
    num: '3',
    icon: DollarSign,
    title: 'Get Your Money',
    description:
      'Once your claim settles, you collect your compensation. No hidden fees, no surprises — just the payout you earned.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.15em]">
            Simple Process
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-gray-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
            3 Steps to Your Settlement
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Three simple steps and you're on your way to the compensation you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 relative">
          {/* Connecting lines (desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[calc(33.33%+1rem)] w-[calc(33.33%-2rem)] border-t-2 border-dashed border-brand-200" />
          <div className="hidden md:block absolute top-[2.5rem] left-[calc(66.66%+1rem)] w-[calc(33.33%-2rem)] border-t-2 border-dashed border-brand-200" />

          {steps.map(({ num, icon: Icon, title, description }) => (
            <div
              key={num}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 card-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent text-white rounded-xl sm:rounded-2xl flex items-center justify-center font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                {num}
              </div>
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-300 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
              <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:text-accent-dark transition-colors"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
