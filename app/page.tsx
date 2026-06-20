import { Navbar }       from '@/components/navbar'
import { Hero }          from '@/components/sections/hero'
import { TrustStrip }    from '@/components/sections/trust-strip'
import { Products }      from '@/components/sections/products'
import { Testimonials }  from '@/components/sections/testimonials'
import { Consultant }    from '@/components/sections/consultant'
import { Faq }            from '@/components/sections/faq'
import { ContactCta }    from '@/components/sections/contact-cta'
import { Footer }        from '@/components/sections/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Testimonials />
        <Consultant />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}