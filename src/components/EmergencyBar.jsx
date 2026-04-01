import { Phone } from 'lucide-react'

export default function EmergencyBar() {
  return (
    <div className="bg-brand-900 text-white text-center py-1.5 px-3 text-xs font-medium fixed top-0 w-full z-[60]">
      <a href="tel:8886263214" className="inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span>Accident? Call now</span>
        <Phone className="w-3 h-3" />
        <span className="font-bold underline">(888) 626-3214</span>
      </a>
    </div>
  )
}
