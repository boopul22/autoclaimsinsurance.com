import { useEffect } from 'react'
import { AlertTriangle, Mail } from 'lucide-react'

const partners = [
  {
    name: 'Morgan & Morgan, P.A.',
    office: 'Orlando, Florida',
    jurisdictions: 'FL, GA, PA, AZ, and additional states',
  },
  {
    name: 'Injury Law Center',
    office: 'Los Angeles, California',
    jurisdictions: 'CA, TX, NV',
  },
]

export default function Partners() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-2">Partners & Sponsors</h1>
        <p className="text-gray-500 mb-8">Legal Partners & Advertising Sponsors</p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-10 text-gray-700 leading-relaxed">

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-10">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-brand-800 mb-2">Important Disclosure</h2>
                <p className="text-sm text-gray-700">
                  Insuranceautoclaim.com is a legal advertising platform that introduces consumers to independent attorneys. Insuranceautoclaim.com is not a law firm, does not provide legal advice, and does not endorse or recommend any specific attorney. No attorney-client relationship is formed by visiting this website or using its services. Prior outcomes do not guarantee future results. The attorneys listed below participate in the Insuranceautoclaim.com advertising programme and have paid for promotional placement on this platform. The selection of an attorney remains entirely at the consumer's discretion.
                </p>
              </div>
            </div>
          </div>

          {/* Partner listings */}
          <h2 className="text-2xl font-bold text-brand-800 mb-6">Participating Legal Sponsors</h2>
          <div className="space-y-6 mb-10">
            {partners.map((p) => (
              <div key={p.name} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-800 mb-2">{p.name}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><strong>Principal Office:</strong> {p.office}</li>
                  <li><strong>Jurisdictions:</strong> {p.jurisdictions}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="bg-brand-50 rounded-lg p-5 mb-8">
            <h3 className="font-bold text-brand-800 mb-2">Please Note</h3>
            <p className="text-sm text-gray-700">
              Insuranceautoclaim.com does not determine which attorney will be assigned to a particular case. You retain the right to select any attorney of your choosing, including those not affiliated with this programme. You are entitled to request free information about any attorney's qualifications and experience before engaging their services.
            </p>
          </div>

          {/* Operator info */}
          <div className="bg-gray-50 rounded-lg p-5 mb-8">
            <h3 className="font-bold text-brand-800 mb-2">Platform Operator</h3>
            <p className="text-sm text-gray-700">
              This advertising platform is operated by <strong>Coresight Creative Limited</strong>, Company No. 16828110, Registered in England &amp; Wales. Registered Office: 128 City Road, London, United Kingdom, EC1V 2NX.
            </p>
          </div>

          {/* Partnership enquiry */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-brand-800 mb-2">Partnership Enquiries</h3>
            <p className="text-sm text-gray-600 mb-3">
              If you are an attorney or law firm interested in participating in our advertising programme, please contact us:
            </p>
            <a
              href="mailto:help@insuranceautoclaim.com"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:underline"
            >
              <Mail className="w-4 h-4" />
              help@insuranceautoclaim.com
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
