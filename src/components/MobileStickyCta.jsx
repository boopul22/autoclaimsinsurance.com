import { Phone } from 'lucide-react'

export default function MobileStickyCta() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 pb-[env(safe-area-inset-bottom,12px)] flex items-center justify-center gap-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <a
        href="tel:8889852078"
        className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3.5 rounded-full transition-colors text-base"
      >
        <Phone className="w-5 h-5" />
        Call Now — Free Consultation
      </a>
    </div>
  )
}
