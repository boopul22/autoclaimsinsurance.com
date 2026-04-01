import { CheckCircle, TrendingUp, Scale, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Scale,
    title: 'We Know the System',
    desc: 'Insurance companies have teams of adjusters working to pay you less. We level the playing field.',
  },
  {
    icon: TrendingUp,
    title: 'Maximum Compensation',
    desc: 'Our average client receives 3x more than those who handle claims on their own.',
  },
  {
    icon: HeartHandshake,
    title: 'You Pay Nothing Upfront',
    desc: "We don't get paid unless you do. Zero fees, zero risk — that's our promise.",
  },
]

const checkpoints = [
  'Medical bills covered',
  'Lost wages recovered',
  'Vehicle repairs handled',
  'Pain & suffering compensated',
  'Insurance negotiations managed',
  'Paperwork taken care of',
]

export default function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.15em]">
            Why Choose Us
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-gray-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
            Your Accident Claim Experts
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            After a car accident, the last thing you need is more stress. We handle the entire claims process so you can focus on your recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-brand-50/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-brand-100/50"
            >
              <div className="w-12 h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center card-shadow mb-4 sm:mb-5">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 sm:gap-8">
            <div className="lg:w-1/3">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 sm:mb-2">Everything Covered</h3>
              <p className="text-blue-200/70 text-xs sm:text-sm">We handle every aspect of your claim from start to finish.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {checkpoints.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
