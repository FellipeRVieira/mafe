import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
export function CTA() { return <section id="contato" className="pb-24 pt-5">
        <Container>

            <Reveal>

                <div className="overflow-hidden rounded-3xl bg-[linear-gradient(115deg,#f4510a_0%,#fb7c17_48%,#f89a38_100%)] px-6 py-16 text-center 
                    text-white shadow-[0_20px_45px_rgba(249,115,22,.22)] sm:px-12 sm:py-20">

                    <p className="text-xs font-bold uppercase tracking-[.22em] text-white/75">
                        Comece hoje
                    </p>

                    <h2 className="mx-auto mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
                        Transforme a entrega das suas fotografias.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/85">
                        Crie álbuns, encante seus clientes e deixe cada memória ainda mais especial.
                    </p>

                    <Button variant="light" className="mt-8">Quero conhecer a MAFE <ArrowRight size={15} /></Button>

                </div>

            </Reveal>

        
        </Container>

    </section>
 }
