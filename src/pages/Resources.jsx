import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, FileText, Camera, PhoneCall, MapPin, Scale, Calculator, ArrowRight } from 'lucide-react'

const guides = [
  {
    icon: FileText,
    title: 'Steps to Take Immediately After an Accident',
    desc: 'A comprehensive checklist of actions to follow at the scene of a collision to safeguard your wellbeing and strengthen your claim.',
  },
  {
    icon: Camera,
    title: 'Gathering the Right Evidence',
    desc: 'Discover which photographs, paperwork, and witness accounts are essential for constructing a compelling auto accident case.',
  },
  {
    icon: PhoneCall,
    title: 'Communicating with Insurance Companies',
    desc: "Professional guidance on managing calls from insurance adjusters and understanding why you shouldn't sign anything before obtaining expert advice.",
  },
  {
    icon: MapPin,
    title: 'Negligence Laws by State',
    desc: 'Learn how your particular state handles fault determination and compensation limits for motor vehicle accidents.',
  },
  {
    icon: Scale,
    title: 'No-Fault vs. At-Fault Insurance Explained',
    desc: 'Understand the distinction between no-fault and at-fault insurance frameworks and how each one impacts your right to compensation.',
  },
  {
    icon: Calculator,
    title: 'How Compensation Amounts Are Determined',
    desc: 'Find out how medical expenses, lost income, and pain and suffering are factored into calculating your settlement amount.',
  },
]

export default function Resources() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="pt-32 pb-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-3">Useful Resources</h1>
          <p className="text-gray-600 text-lg">Guides and information to support your claim journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guides.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-lg font-bold text-brand-800 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-brand-800 to-brand-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Prepared to Begin Your Claim?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Our specialists are standing by around the clock to evaluate your case at no charge.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Launch Your Free Claim Review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
