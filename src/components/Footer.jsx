import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'File a Claim', to: '/#contact' },
  { label: 'How It Works', to: '/#contact' },
]

const resourceLinks = [
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Your Privacy Choices', to: '/your-privacy-choices' },
  { label: 'WA Health Policy', to: '/wa-health-policy' },
  { label: 'Partners & Sponsors', to: '/partners-and-sponsors' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-gray-300 pt-12 sm:pt-16 pb-24 sm:pb-20 lg:pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-serif text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">InsuranceAutoClaim</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Fast, fair, and hassle-free car accident claim support. Get the compensation you deserve.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="tel:8889852078"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (888) 985-2078
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@insuranceautoclaim.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  help@insuranceautoclaim.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                128 City Road, London, United Kingdom, EC1V 2NX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-gray-400 mb-3 leading-relaxed">
            <span className="text-white font-semibold">About Us:</span>{' '}
            Insuranceautoclaim.com is operated by Evolve Web Marketing Ltd, Company No. 16828110,
            registered in England & Wales. Registered Office: 128 City Road, London,
            United Kingdom, EC1V 2NX.
          </p>
        </div>

        <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">
            <span className="text-amber-400 font-semibold">ADVERTISEMENT:</span> This website
            is a paid advertisement operated by Evolve Web Marketing LTD (Company No.
            16828110). Insuranceautoclaim.com is not a law firm, a lawyer referral service, or
            an insurance company. We do not provide legal advice, medical advice, or insurance
            adjusting services. You have the right to request free information about an
            attorney's qualifications and experience. People shown on this website may be
            paid actors or representatives, not practicing attorneys. Any depictions
            of accidents or consultations are dramatizations. Using this website, our forms, or
            our phone lines does not create an attorney-client relationship.
          </p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-2 leading-relaxed">
            <span className="text-amber-400 font-semibold">FOR NORTH CAROLINA RESIDENTS:</span>{' '}
            Insuranceautoclaim.com is a legal advertising platform. We do not provide legal services
            or legal representation. Legal services are only available through independent
            attorneys licensed to practice law in North Carolina. Contacting us does not create
            an attorney-client relationship.
          </p>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs text-gray-500">
            &copy; 2026 Insuranceautoclaim.com. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] sm:text-xs text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
