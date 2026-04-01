import { Phone, Clock, Shield } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="px-4 lg:px-8 py-3 sm:py-4">
      <div className="max-w-6xl mx-auto bg-brand-700 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-8 text-white">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">Same-Day Review</p>
              <p className="text-blue-100/70 text-xs sm:text-sm">Fast evaluation of your case</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg">100% Free Consultation</p>
              <p className="text-blue-100/70 text-xs sm:text-sm">No obligation, no pressure</p>
            </div>
          </div>

          <a
            href="tel:8886263214"
            className="flex items-center gap-2 font-bold text-lg sm:text-xl hover:text-blue-100 transition-colors"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            (888) 626-3214
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center bg-white text-brand-700 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors hover:bg-brand-50"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  )
}
