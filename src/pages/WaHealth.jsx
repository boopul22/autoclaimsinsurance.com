import { useEffect } from 'react'

const sections = [
  { id: 'categories', title: '1. Categories of Health Data Collected' },
  { id: 'sources', title: '2. Sources of Collection' },
  { id: 'purpose', title: '3. Purpose of Collection' },
  { id: 'sharing', title: '4. Sharing of Health Data' },
  { id: 'rights', title: '5. Your Rights Under the MHMDA' },
  { id: 'appeals', title: '6. Appeals Process' },
]

export default function WaHealth() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-2">Washington Consumer Health Data Policy</h1>
        <p className="text-gray-500 mb-8">Effective Date: January 26, 2026</p>

        <nav className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
          <h2 className="font-bold text-brand-800 mb-3">Table of Contents</h2>
          <ul className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-brand-600 hover:underline">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-10 space-y-10 text-gray-700 leading-relaxed">

          <p>This policy explains how Insuranceautoclaim.com, operated by Evolve Web Marketing Ltd ("Company", "we", "us"), collects, uses, and shares consumer health data from Washington state residents as defined by the My Health My Data Act (MHMDA).</p>

          <section id="categories">
            <h2 className="text-xl font-bold text-brand-800 mb-3">1. Categories of Health Data Collected</h2>
            <p>We may collect the following types of consumer health data:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Injury & Condition Details:</strong> Physical injuries, medical conditions, symptoms, and treatment information you voluntarily share when describing your accident.</li>
              <li><strong>Health-Related Inferences:</strong> Conclusions we may derive from your accident descriptions, such as potential injury severity or likely treatment requirements.</li>
              <li><strong>Technical Identifiers Linked to Health Searches:</strong> IP addresses, device identifiers, and browsing data that become associated with health-related enquiries made through our Website.</li>
            </ul>
          </section>

          <section id="sources">
            <h2 className="text-xl font-bold text-brand-800 mb-3">2. Sources of Collection</h2>
            <p>We gather consumer health data from the following sources:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Online claim evaluation forms submitted through our Website</li>
              <li>Recorded telephone conversations with our team</li>
              <li>Website interaction tracking technologies (cookies, pixels, analytics tools)</li>
            </ul>
          </section>

          <section id="purpose">
            <h2 className="text-xl font-bold text-brand-800 mb-3">3. Purpose of Collection</h2>
            <p>We collect consumer health data for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Marketing connections:</strong> To facilitate introductions between you and independent law firms or attorneys who may assist with your claim.</li>
              <li><strong>Administrative services:</strong> To verify claim details and assess the suitability of potential legal partners.</li>
              <li><strong>Compliance & record-keeping:</strong> To maintain consent records and fulfil our legal obligations.</li>
            </ul>
          </section>

          <section id="sharing">
            <h2 className="text-xl font-bold text-brand-800 mb-3">4. Sharing of Health Data</h2>
            <p>Your consumer health data may be shared with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Third-party marketing partners:</strong> Independent attorneys and law firms participating in our advertising programme. We receive administrative and/or marketing fees in connection with these introductions (not a percentage of any legal fee).</li>
              <li><strong>Service providers:</strong> Cloud storage, communications platforms, and other technology providers who help us operate our services.</li>
            </ul>
            <p className="mt-3">We do not sell consumer health data to data brokers or unrelated third parties.</p>
          </section>

          <section id="rights">
            <h2 className="text-xl font-bold text-brand-800 mb-3">5. Your Rights Under the MHMDA</h2>
            <p>As a Washington resident, you have the following rights regarding your consumer health data:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Right to Access:</strong> You may request confirmation of whether we process your health data, obtain a list of third-party recipients, and receive a copy of your data.</li>
              <li><strong>Right to Delete:</strong> You may request the deletion of your consumer health data. Upon receiving a verified request, we will delete your data and instruct our third-party partners to do the same.</li>
              <li><strong>Right to Withdraw Consent:</strong> You may revoke your consent for future processing of your health data at any time. Withdrawal does not affect the lawfulness of processing conducted prior to withdrawal.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a> with the subject line "WA Health Data Request".</p>
          </section>

          <section id="appeals">
            <h2 className="text-xl font-bold text-brand-800 mb-3">6. Appeals Process</h2>
            <p>If we are unable to fulfil your request or you disagree with our response, you may submit an appeal:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a></li>
              <li><strong>Subject line:</strong> "Privacy Appeal"</li>
              <li><strong>Response timeline:</strong> We will respond to appeals within 45 days.</li>
            </ul>
            <p className="mt-3">If you remain dissatisfied with the outcome, you may file a complaint with the Washington State Attorney General's office.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
