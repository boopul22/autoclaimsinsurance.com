import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'services', title: '2. Marketing & Administrative Services' },
  { id: 'modifications', title: '3. Modifications to These Terms' },
  { id: 'tcpa', title: '4. TCPA Consent & Communications' },
  { id: 'prohibited', title: '5. Prohibited Activities' },
  { id: 'submissions', title: '6. User Submissions' },
  { id: 'ip', title: '7. Intellectual Property' },
  { id: 'third-party', title: '8. Third-Party Websites' },
  { id: 'indemnification', title: '9. Indemnification' },
  { id: 'disclaimers', title: '10. Disclaimers' },
  { id: 'liability', title: '11. Limitation of Liability' },
  { id: 'security', title: '12. Security & Data Breach Procedures' },
  { id: 'termination', title: '13. Termination' },
  { id: 'governing-law', title: '14. Governing Law & Jurisdiction' },
  { id: 'disputes', title: '15. Dispute Resolution' },
  { id: 'ada', title: '16. Accessibility' },
  { id: 'contact', title: '17. Contact Information' },
]

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-2">Terms of Use</h1>
        <p className="text-gray-500 mb-8">Last Updated: January 26, 2026</p>

        {/* Table of contents */}
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

          <section id="introduction">
            <h2 className="text-xl font-bold text-brand-800 mb-3">1. Introduction</h2>
            <p>Welcome to Insuranceautoclaim.com (the "Website"), operated by Evolve Web Marketing Ltd ("Company", "we", "us", or "our"), a company registered in England & Wales under Company No. 15814738. These Terms of Use ("Terms") form a binding agreement between you and the Company governing your access to and use of this Website, including any content, features, and services offered herein.</p>
            <p className="mt-3">By accessing or utilising this Website, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms, you must discontinue use of the Website immediately.</p>
          </section>

          <section id="services">
            <h2 className="text-xl font-bold text-brand-800 mb-3">2. Marketing & Administrative Services</h2>
            <p>Insuranceautoclaim.com is a marketing and administrative services platform. We are <strong>not a law firm</strong>, not a lawyer referral service, and not an insurance provider. We do not render legal advice, medical advice, or insurance adjusting services.</p>
            <p className="mt-3">Our function is to connect consumers who have been involved in motor vehicle accidents with independent, licensed attorneys and law firms who may be able to assist them. We receive administrative fees and/or marketing compensation from participating legal partners. This compensation does not influence which attorney is matched to your enquiry.</p>
            <p className="mt-3">Any information presented on this Website is for general informational purposes only and should not be construed as legal, medical, or professional advice. You should consult an appropriately qualified professional before making decisions based on information found here.</p>
          </section>

          <section id="modifications">
            <h2 className="text-xl font-bold text-brand-800 mb-3">3. Modifications to These Terms</h2>
            <p>We reserve the right to revise or update these Terms at any time, at our sole discretion. Any modifications take effect immediately upon being published on this Website. Your continued use of the Website following the publication of revised Terms signifies your acceptance of the updated Terms. We encourage you to review this page periodically.</p>
          </section>

          <section id="tcpa">
            <h2 className="text-xl font-bold text-brand-800 mb-3">4. TCPA Consent & Communications</h2>
            <p>By submitting your information through our Website forms or by telephoning our listed numbers, you grant your prior express written consent, as required by the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227, to receive:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Live telephone calls</li>
              <li>Pre-recorded or artificial voice messages</li>
              <li>Calls and text messages delivered through automatic telephone dialling systems</li>
              <li>Text messages (SMS and MMS)</li>
            </ul>
            <p className="mt-3">These communications may be sent to the telephone number(s) you provide, even if that number is registered on any state or federal Do Not Call registry. You understand that this consent is not a condition of purchasing any goods or services. Standard message and data rates may apply. You may withdraw your consent at any time by contacting us at <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a>.</p>
          </section>

          <section id="prohibited">
            <h2 className="text-xl font-bold text-brand-800 mb-3">5. Prohibited Activities</h2>
            <p>When using this Website, you agree not to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Scrape, crawl, or harvest data from the Website through automated means without our prior written permission</li>
              <li>Impersonate any individual, business, or entity, or misrepresent your affiliation with any party</li>
              <li>Use bots, scripts, or other automated tools to access Website functionality</li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Attempt to interfere with, disrupt, or compromise the security or integrity of the Website</li>
              <li>Use the Website for any unlawful purpose or in violation of any applicable law or regulation</li>
            </ul>
          </section>

          <section id="submissions">
            <h2 className="text-xl font-bold text-brand-800 mb-3">6. User Submissions</h2>
            <p>Any materials, information, or content you submit to us via forms, email, telephone, or other channels ("Submissions") may be used by us to fulfil your request, connect you with participating legal partners, and for internal business purposes. By providing Submissions, you grant us a non-exclusive, royalty-free, perpetual, worldwide licence to use, reproduce, and distribute such Submissions in connection with our services.</p>
          </section>

          <section id="ip">
            <h2 className="text-xl font-bold text-brand-800 mb-3">7. Intellectual Property</h2>
            <p>All content on this Website — including but not limited to text, graphics, logos, images, audio, video, software, and design elements — is the property of Evolve Web Marketing Ltd or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any part of this Website without our express written authorisation.</p>
          </section>

          <section id="third-party">
            <h2 className="text-xl font-bold text-brand-800 mb-3">8. Third-Party Websites</h2>
            <p>This Website may contain hyperlinks to websites operated by third parties. We do not endorse, control, or assume responsibility for the content, privacy practices, or policies of any third-party websites. Accessing third-party links is at your own risk, and we recommend reviewing their respective terms and privacy policies.</p>
          </section>

          <section id="indemnification">
            <h2 className="text-xl font-bold text-brand-800 mb-3">9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Evolve Web Marketing Ltd, its directors, officers, employees, agents, and affiliates from and against all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of this Website; (b) your violation of these Terms; or (c) your violation of any third-party right, including any intellectual property or privacy right.</p>
          </section>

          <section id="disclaimers">
            <h2 className="text-xl font-bold text-brand-800 mb-3">10. Disclaimers</h2>
            <p>THIS WEBSITE AND ALL CONTENT, SERVICES, AND FEATURES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p className="mt-3">We do not warrant that the Website will be uninterrupted, error-free, or free from viruses or other harmful components. We make no representations or warranties regarding the accuracy, completeness, or reliability of any content on this Website.</p>
          </section>

          <section id="liability">
            <h2 className="text-xl font-bold text-brand-800 mb-3">11. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EVOLVE WEB MARKETING LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THIS WEBSITE.</p>
            <p className="mt-3">IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THIS WEBSITE EXCEED ONE HUNDRED US DOLLARS (USD $100.00).</p>
          </section>

          <section id="security">
            <h2 className="text-xl font-bold text-brand-800 mb-3">12. Security & Data Breach Procedures</h2>
            <p>We employ commercially reasonable security measures to protect the information you provide through our Website. However, no method of electronic transmission or storage is entirely secure, and we cannot guarantee absolute security. In the event of a data breach affecting your personal information, we will notify you and the relevant authorities as required by applicable law.</p>
          </section>

          <section id="termination">
            <h2 className="text-xl font-bold text-brand-800 mb-3">13. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the Website at any time, for any reason or no reason, without prior notice or liability. Upon termination, your right to use the Website ceases immediately. Provisions of these Terms that by their nature should survive termination shall remain in full force and effect.</p>
          </section>

          <section id="governing-law">
            <h2 className="text-xl font-bold text-brand-800 mb-3">14. Governing Law & Jurisdiction</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law principles. Any legal proceedings arising from or related to these Terms or your use of the Website shall be brought exclusively in the state or federal courts situated in Gwinnett County, Georgia, and you consent to the personal jurisdiction of such courts.</p>
          </section>

          <section id="disputes">
            <h2 className="text-xl font-bold text-brand-800 mb-3">15. Dispute Resolution</h2>
            <p><strong>Mandatory Binding Arbitration:</strong> Any dispute, claim, or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) or JAMS, at the Company's election, in accordance with their then-current commercial arbitration rules.</p>
            <p className="mt-3"><strong>Class Action Waiver:</strong> You agree that any arbitration or court proceeding shall be conducted solely on an individual basis. You waive any right to bring or participate in a class action, collective action, or representative proceeding.</p>
            <p className="mt-3"><strong>Jury Trial Waiver:</strong> YOU AND THE COMPANY EACH WAIVE ANY RIGHT TO A JURY TRIAL IN ANY LEGAL PROCEEDING ARISING OUT OF OR RELATED TO THESE TERMS.</p>
            <p className="mt-3"><strong>Limitation Period:</strong> Any claim arising under these Terms must be filed within one (1) year of the date on which the claim first arose, or such claim shall be permanently barred.</p>
          </section>

          <section id="ada">
            <h2 className="text-xl font-bold text-brand-800 mb-3">16. Accessibility</h2>
            <p>We are committed to ensuring that our Website is accessible to all users, including those with disabilities. If you experience any accessibility difficulties or require assistance, please reach out to us at <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a> and we will make reasonable efforts to address your needs.</p>
          </section>

          <section id="contact">
            <h2 className="text-xl font-bold text-brand-800 mb-3">17. Contact Information</h2>
            <p>For any questions or concerns regarding these Terms, please contact us:</p>
            <ul className="mt-3 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a></li>
              <li><strong>Address:</strong> Evolve Web Marketing Ltd, C/O Nra Accountancy, Arrow Mill, Queensway, Rochdale, Lancashire, England, OL11 2YW</li>
              <li><strong>Company No.:</strong> 15814738 (England & Wales)</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}
