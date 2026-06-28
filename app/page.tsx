import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Consultant } from '@/components/sections/consultant'
import { Benefits } from '@/components/sections/benefits'
import { TrustStrip } from '@/components/sections/trust-strip'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { ContactCta } from '@/components/sections/contact-cta'
import { Products } from '@/components/sections/products'
import { Footer } from '@/components/sections/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

// Orden alineado al funnel psicológico de la marca:
// Conciencia (Hero, con la única foto de Juliana en la apertura)
// -> Confianza (Consultant, Benefits) -> Autoridad (TrustStrip, Testimonials)
// -> objeciones (Faq) -> Conversación (ContactCta)
// -> Recomendación personalizada (Products, al final)
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Consultant />
        <Benefits />
        <TrustStrip />
        <Testimonials />
        <Faq />
        <ContactCta />
        <Products />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}