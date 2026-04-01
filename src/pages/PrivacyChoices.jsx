import { useState, useEffect } from 'react'
import { ShieldCheck } from 'lucide-react'

const requestTypes = [
  {
    id: 'do-not-sell',
    label: 'Do Not Sell or Share My Personal Information',
    desc: 'Cease the transfer of my personal data to third parties for marketing or administrative fee purposes.',
  },
  {
    id: 'limit-sensitive',
    label: 'Limit the Use and Disclosure of Sensitive Personal Information',
    desc: 'Restrict the processing of health-related and injury-related data beyond what is strictly necessary.',
  },
  {
    id: 'opt-out-ads',
    label: 'Opt-Out of Targeted Advertising',
    desc: 'Discontinue cross-context behavioural advertising based on my browsing and interaction data.',
  },
  {
    id: 'delete',
    label: 'Request to Delete',
    desc: 'Permanently remove my personal information from your databases and notify downstream partners.',
  },
]

const eligibleStates = ['California', 'Colorado', 'Connecticut', 'Texas', 'Utah', 'Virginia']

export default function PrivacyChoices() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', state: '' })
  const [selectedRequests, setSelectedRequests] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const toggleRequest = (id) => {
    setSelectedRequests((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    )
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Privacy request:', { ...form, requests: selectedRequests })
    setSubmitted(true)
  }

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-2">Your Privacy Choices</h1>
        <p className="text-gray-500 mb-8">Last Updated: January 26, 2026</p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-10 text-gray-700 leading-relaxed">
          <p className="mb-6">
            Insuranceautoclaim.com respects your privacy rights. Depending on your state of residence, you may be entitled to exercise specific rights over your personal data. Use the form below to submit your request. We will process it within 15–45 days in accordance with applicable state law.
          </p>

          <div className="bg-brand-50 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-brand-800 mb-2">Eligible States</h3>
            <p className="text-sm text-gray-600">
              These privacy rights are currently available to residents of: {eligibleStates.join(', ')}.
            </p>
          </div>

          <div className="bg-brand-50 rounded-lg p-4 mb-8">
            <h3 className="font-semibold text-brand-800 mb-2">Global Privacy Control (GPC)</h3>
            <p className="text-sm text-gray-600">
              We automatically honour Global Privacy Control signals transmitted by your browser. If your browser sends a GPC signal, we treat it as a valid opt-out of the sale and sharing of your personal information.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-800 mb-2">Request Submitted</h3>
              <p className="text-gray-600">We will process your privacy request within 15–45 days. You may also contact us directly at <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-bold text-brand-800">Submit Your Request</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                <input type="text" name="state" placeholder="State of Residence" required value={form.state} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              </div>

              <div>
                <h3 className="font-semibold text-brand-800 mb-3">Select Your Request(s):</h3>
                <div className="space-y-3">
                  {requestTypes.map((rt) => (
                    <label key={rt.id} className="flex items-start gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedRequests.includes(rt.id)}
                        onChange={() => toggleRequest(rt.id)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                      />
                      <div>
                        <p className="font-medium text-brand-800">{rt.label}</p>
                        <p className="text-sm text-gray-500">{rt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={selectedRequests.length === 0}
                className="bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Submit Privacy Request
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-brand-800 mb-2">Authorised Agents</h3>
            <p className="text-sm text-gray-600">If you wish to designate an authorised agent to submit a request on your behalf, the agent must present written proof of authority (such as a power of attorney or signed authorisation letter). Please email the documentation to <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a>.</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-brand-800 mb-2">Alternative Contact</h3>
            <p className="text-sm text-gray-600">You may also exercise your privacy rights by emailing <a href="mailto:help@insuranceautoclaim.com" className="text-brand-600 underline">help@insuranceautoclaim.com</a> with the subject line "Privacy Request".</p>
          </div>
        </div>
      </div>
    </div>
  )
}
