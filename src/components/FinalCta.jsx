import { Phone, ArrowRight } from 'lucide-react'

export default function FinalCta() {
  return (
    <section className="bg-brand-700 text-white py-14 sm:py-20 lg:py-28 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-6xl mb-5 sm:mb-8 leading-tight">
          Here for You When It Matters Most
        </h2>
        <p className="text-blue-100/70 text-base sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          Dealing with a car accident is stressful enough. Getting help shouldn't be. We fight for every dollar you deserve.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl transition-colors hover:bg-brand-50"
          >
            Get Your Free Review
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:8886263214"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-base sm:text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            or call (888) 626-3214
          </a>
        </div>
      </div>
    </section>
  )
}
