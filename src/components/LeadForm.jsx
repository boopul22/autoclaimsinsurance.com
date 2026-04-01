import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, ShieldCheck, Lock, Users, Phone } from 'lucide-react'
import { states } from '../data/states'

const trustItems = [
  { icon: Zap, title: 'Fast Case Review', desc: 'We evaluate your claim details right away — usually within hours.' },
  { icon: ShieldCheck, title: 'No Win, No Fee', desc: 'You pay nothing unless we get you a settlement. Period.' },
  { icon: Lock, title: '256-bit Encryption', desc: 'Your information is encrypted and protected at every step.' },
  { icon: Users, title: '10,000+ Claims Filed', desc: 'Trusted by thousands of accident victims across the country.' },
]

const GROUP_B_STATES = ['CA', 'TX', 'CO']
const GROUP_C_STATES = ['WA']

const initialForm = { name: '', phone: '', email: '', state: '', message: '', consent: false, sensitiveConsent: false, waHealthConsent: false }

function getConsentGroup(stateVal) {
  if (GROUP_B_STATES.includes(stateVal)) return 'B'
  if (GROUP_C_STATES.includes(stateVal)) return 'C'
  return 'A'
}

export default function LeadForm() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const consentGroup = getConsentGroup(formData.state)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.phone.trim()) errs.phone = 'Phone number is required'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Valid email is required'
    if (!formData.state) errs.state = 'Please select your state'
    if (!formData.consent) errs.consent = 'You must agree to proceed'
    if (consentGroup === 'C' && !formData.waHealthConsent)
      errs.waHealthConsent = 'Washington health data consent is required'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      state: formData.state,
      message: formData.message,
      consent_group: consentGroup,
      tcpa_consent: formData.consent,
      sensitive_data_consent: consentGroup === 'B' ? formData.sensitiveConsent : false,
      wa_health_consent: consentGroup === 'C' ? formData.waHealthConsent : false,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      source: 'insuranceautoclaim.com',
    }

    try {
      const formsubmitUrl = import.meta.env.VITE_FORMSUBMIT_URL
      if (formsubmitUrl) {
        await fetch(formsubmitUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
      }
      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border text-sm sm:text-base ${
      errors[field] ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50/80'
    } text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 focus:bg-white transition-colors`

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
        <div className="lg:pt-8">
          <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-[0.15em]">
            Free Case Evaluation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-gray-900 mt-2 sm:mt-3 mb-4 sm:mb-6">
            Start Your Claim Today
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Time matters after an accident. The sooner you act, the stronger your case. Get your free evaluation now.
          </p>

          <div className="bg-brand-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
              <p className="text-white font-bold text-sm sm:text-base">Prefer to talk? Call us now</p>
            </div>
            <a href="tel:8889852078" className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-amber-300 transition-colors">
              (888) 985-2078
            </a>
            <p className="text-blue-200/60 text-xs sm:text-sm mt-1">Available 24/7 — free consultation</p>
          </div>

          <div className="hidden sm:block space-y-5">
            {trustItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-brand-100">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-500 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 card-shadow-lg p-5 sm:p-6 lg:p-8">
          {submitted ? (
            <div className="text-center py-8 sm:py-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Your information has been received. A claims specialist will contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Get Your Free Case Review</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                Fill out the form and a claims advisor will reach out.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
                <div>
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className={inputClass('name')} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={inputClass('phone')} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className={inputClass('email')} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <select name="state" value={formData.state} onChange={handleChange} className={`${inputClass('state')} ${!formData.state ? 'text-gray-400' : 'text-gray-900'}`}>
                    <option value="">Select Your State</option>
                    {states.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>

                <div>
                  <textarea name="message" placeholder="Tell us about your accident (optional)" rows={3} value={formData.message} onChange={handleChange} className={inputClass('message')} />
                </div>

                {/* Main TCPA consent */}
                <div>
                  <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent/50 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                      By clicking Submit, I accept the{' '}
                      <Link to="/terms-and-conditions" className="text-accent underline" onClick={(e) => e.stopPropagation()}>Terms of Service</Link>{' '}
                      and{' '}
                      <Link to="/privacy-policy" className="text-accent underline" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>.
                      I give my express written consent for Insuranceautoclaim.com and its{' '}
                      <Link to="/partners-and-sponsors" className="text-accent underline" onClick={(e) => e.stopPropagation()}>Marketing Partners</Link>{' '}
                      to contact me by phone calls, automated dialing, and text messages at the number provided. I understand my consent is not required to make a purchase and that calling or submitting this form does not create an attorney-client relationship.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
                </div>

                {consentGroup === 'B' && (
                  <div>
                    <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                      <input type="checkbox" name="sensitiveConsent" checked={formData.sensitiveConsent} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent/50 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                        <strong className="text-gray-700">Sensitive Information Consent:</strong> I authorize the collection and sharing of my sensitive personal data, including injury details and medical status, with Insuranceautoclaim.com's marketing partners as described in the{' '}
                        <Link to="/privacy-policy" className="text-accent underline" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>.
                        I understand I can revoke this authorization at any time.
                      </span>
                    </label>
                  </div>
                )}

                {consentGroup === 'C' && (
                  <div>
                    <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                      <input type="checkbox" name="waHealthConsent" checked={formData.waHealthConsent} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent/50 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                        <strong className="text-gray-700">Washington Health Data Authorization:</strong> I authorize the collection and sharing of my consumer health data as defined by the{' '}
                        <Link to="/wa-health-policy" className="text-accent underline" onClick={(e) => e.stopPropagation()}>WA Health Policy</Link>.
                        I understand that my health data will be shared with marketing partners to help process my request for legal assistance.
                      </span>
                    </label>
                    {errors.waHealthConsent && <p className="text-red-500 text-xs mt-1">{errors.waHealthConsent}</p>}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-bold py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors"
                >
                  {submitting ? 'Submitting...' : 'Submit for Free Review'}
                </button>

                <p className="text-center text-gray-400 text-[10px] sm:text-xs flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  Your information is 100% secure and confidential.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
