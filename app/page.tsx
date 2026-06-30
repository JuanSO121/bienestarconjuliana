import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Consultant } from '@/components/sections/consultant'
import { Faq } from '@/components/sections/faq'
import { ContactCta } from '@/components/sections/contact-cta'
import { Products } from '@/components/sections/products'
import { Footer } from '@/components/sections/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

// Funnel corto: problema claro -> opciones -> confianza -> objeciones -> WhatsApp.
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Consultant />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
