import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import CtaBanner from '../components/CtaBanner'
import HowItWorks from '../components/HowItWorks'
import LeadForm from '../components/LeadForm'
import OurCommitment from '../components/OurCommitment'
import FinalCta from '../components/FinalCta'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <CtaBanner />
      <HowItWorks />
      <LeadForm />
      <OurCommitment />
      <FinalCta />
    </main>
  )
}
