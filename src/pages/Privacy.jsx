import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  { id: 'scope', title: '1. Scope & Applicability' },
  { id: 'not-law-firm', title: '2. Not a Law Firm or Insurance Provider' },
  { id: 'info-collected', title: '3. Information We Collect' },
  { id: 'do-not-sell', title: '4. California & Colorado Notice: Do Not Sell/Share' },
  { id: 'sharing', title: '5. How We Use & Share Your Data' },
  { id: 'tcpa', title: '6. TCPA Consent' },
  { id: 'cookies', title: '7. Cookies & Behavioural Tracking' },
  { id: 'security', title: '8. Security & Data Retention' },
  { id: 'minors', title: '9. Minors' },
  { id: 'contact', title: '10. Contact Us' },
]

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: January 26, 2026</p>

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

          <section id="scope">
            <h2 className="text-xl font-bold text-brand-800 mb-3">1. Scope & Applicability</h2>
            <p>This Privacy Policy describes how Insuranceautoclaim.com, operated by Evolve Web Marketing Ltd ("Company", "we", "us"), collects, utilises, shares, and safeguards your personal information when you interact with our Website, claim evaluation tools, telephone lines, and marketing partner services.</p>
            <p className="mt-3">By using our Website or providing your personal details, you acknowledge and consent to the practices outlined in this Privacy Policy. If you disagree with any aspect of this policy, please refrain from using our services.</p>
          </section>

          <section id="not-law-firm">
            <h2 className="text-xl font-bold text-brand-800 mb-3">2. Not a Law Firm or Insurance Provider</h2>
            <p>Insuranceautoclaim.com does not function as a law firm, lawyer referral service, or insurance company. Utilising our Website, completing our forms, or telephoning our numbers does not establish an attorney-client relationship, a solicitor-client relationship, or any form of professional fiduciary relationship.</p>
          </section>

          <section id="info-collected">
            <h2 className="text-xl font-bold text-brand-800 mb-3">3. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <h3 className="font-semibold text-brand-700 mt-4 mb-2">a) Personal Identifiers</h3>
            <p>Full name, email address, postal code, telephone number, and state of residence.</p>
            <h3 className="font-semibold text-brand-700 mt-4 mb-2">b) Claim-Related Data</h3>
            <p>Date of accident, description of damage, insurance status, and other details relevant to evaluating your potential claim.</p>
            <h3 className="font-semibold text-brand-700 mt-4 mb-2">c) Sensitive & Health-Related Data</h3>
            <p>Details of injuries, medical conditions, and health status you choose to share with us. This data is only collected when you voluntarily provide it and, in certain states, requires your explicit consent.</p>
            <h3 className="font-semibold text-brand-700 mt-4 mb-2">d) Audio Recordings</h3>
            <p>All telephone calls to or from our listed numbers may be recorded for quality assurance, training, and compliance purposes. By continuing a call, you consent to its recording.</p>
          </section>

          <section id="do-not-sell">
            <h2 className="text-xl font-bold text-brand-800 mb-3">4. California & Colorado Notice: Do Not Sell/Share</h2>
            <p>Under the California Consumer Privacy Act (CCPA) as amended by the CPRA, and the Colorado Privacy Act, you have the right to opt out of the "sale" or "sharing" of your personal information. When we transfer your data to our marketing partners in exchange for administrative fees, this may be classified as a "sale" or "sharing" under these laws.</p>
            <p className="mt-3">To exercise your opt-out rights, visit our <Link to="/your-privacy-choices" className="text-brand-600 underline">Your Privacy Choices</Link> page or email <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a>.</p>
          </section>

          <section id="sharing">
            <h2 className="text-xl font-bold text-brand-800 mb-3">5. How We Use & Share Your Data</h2>
            <p>We may share your personal information with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Participating legal partners:</strong> Independent attorneys and law firms who may provide you with legal services. We receive administrative fees and/or marketing compensation in connection with these referrals.</li>
              <li><strong>Service providers:</strong> Cloud hosting, communication platforms, analytics, and security providers who assist us in operating the Website.</li>
              <li><strong>As required by law:</strong> Government authorities, regulatory bodies, or courts when mandated by applicable law, subpoena, or legal process.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to data brokers or unrelated third parties for their own marketing purposes.</p>
          </section>

          <section id="tcpa">
            <h2 className="text-xl font-bold text-brand-800 mb-3">6. TCPA Consent</h2>
            <p>By submitting your information, you provide your prior express written consent under the Telephone Consumer Protection Act (TCPA) for Insuranceautoclaim.com and its marketing partners to contact you via live calls, pre-recorded messages, automated dialling systems, and text messages at the number provided. You may withdraw consent at any time by emailing <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a>.</p>
          </section>

          <section id="cookies">
            <h2 className="text-xl font-bold text-brand-800 mb-3">7. Cookies & Behavioural Tracking</h2>
            <p>We use cookies, tracking pixels, and similar technologies to analyse website traffic, measure advertising effectiveness, and enhance your browsing experience. You may manage your cookie preferences through your browser settings; however, disabling cookies may limit certain Website functionality.</p>
          </section>

          <section id="security">
            <h2 className="text-xl font-bold text-brand-800 mb-3">8. Security & Data Retention</h2>
            <p>We use TLS encryption for data in transit and employ commercially reasonable measures to protect your data at rest. However, no system is entirely immune to breaches, and we cannot guarantee the absolute security of your information. We retain your personal data for as long as reasonably necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.</p>
          </section>

          <section id="minors">
            <h2 className="text-xl font-bold text-brand-800 mb-3">9. Minors</h2>
            <p>This Website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal data, please contact us and we will take steps to delete such information promptly.</p>
          </section>

          <section id="contact">
            <h2 className="text-xl font-bold text-brand-800 mb-3">10. Contact Us</h2>
            <p>For questions about this Privacy Policy or to exercise your data rights, please contact:</p>
            <ul className="mt-3 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a></li>
              <li><strong>Address:</strong> Evolve Web Marketing Ltd, C/O Nra Accountancy, Arrow Mill, Queensway, Rochdale, Lancashire, England, OL11 2YW</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}
