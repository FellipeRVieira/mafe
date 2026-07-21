import { About } from '@/components/home/About'
import { CTA } from '@/components/home/CTA'
import { Experiences } from '@/components/home/Experiences'
import { Hero } from '@/components/home/Hero'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Footer } from '@/layout/Footer'
import { Header } from '@/layout/Header'
export function HomePage() 
{ 
    return <div className="min-h-screen overflow-x-hidden bg-[#fff7ed] text-[#1f2937]">
        <Header />

            <main>

                <Hero />
                <Experiences />
                <HowItWorks />
                <About />
                <CTA />
                
            </main>

        <Footer />

    </div>
}
