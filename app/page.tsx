import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Consultant } from '@/components/sections/consultant'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Benefits } from '@/components/sections/benefits'
import { Testimonials } from '@/components/sections/testimonials'
import { Products } from '@/components/sections/products'
import { Faq } from '@/components/sections/faq'
import { ContactCta } from '@/components/sections/contact-cta'
import { Footer } from '@/components/sections/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Consultant />
        <TrustStrip />
        <Benefits />
        <Testimonials />
        <Products />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
