import { CheckCircle2, Download, Link2, Send, Upload } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import type { TimelineStep } from '@/types/home'
const steps: TimelineStep[] = [{ number: '01', title: 'Fotógrafo cria álbum', description: 'Organize suas imagens em um espaço único.' }, { number: '02', title: 'Cliente recebe link', description: 'Compartilhe de forma simples e segura.' }, { number: '03', title: 'Cliente escolhe fotos', description: 'Seleção fácil, diretamente pelo álbum.' }, { number: '04', title: 'Versão final enviada', description: 'Entregue as fotos prontas com agilidade.' }, { number: '05', title: 'Cliente faz download', description: 'Memórias disponíveis para guardar sempre.' }]
const icons = [Upload, Link2, CheckCircle2, Send, Download]
export function HowItWorks() 
{ 
    return <section id="como-funciona" className="bg-white py-24">
        <Container>
            <Reveal className="mx-auto max-w-xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[.22em] text-[#fb650b]">
                        Simples, leve e completo
                    </p>
                    <h2 className="mt-3 text-4xl text-[#211b18] sm:text-5xl">
                        Como funciona
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed text-[#6b7280]">
                        Da primeira imagem ao download final, cuidamos para que sua experiência seja inesquecível.
                    </p>
            </Reveal>

                <div className="relative mt-14 grid gap-7 md:grid-cols-5 md:gap-0">{steps.map((step, index) => { const Icon = icons[index];
                    return <Reveal key={step.number} delay={index * .08} className="relative text-center md:px-3">
                        <div className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-[#fed7aa] bg-[#fff7ed] text-[#f97316]
                            shadow-sm"><Icon size={20} />
                        </div>{index < steps.length - 1 && <span className="absolute left-[calc(50%+_28px)] top-7 hidden h-px w-[calc(100%-56px)] bg-[#fed7aa]
                        md:block" />}
                        <p className="mt-5 text-[10px] font-bold tracking-[.18em] text-[#f97316]">{step.number}
                        </p>
                        <h3 className="mt-2 text-sm font-semibold text-[#28211d]">{step.title}
                        </h3>
                        <p className="mx-auto mt-2 max-w-[180px] text-xs leading-relaxed text-[#77706c]">{step.description}
                        </p>
                    </Reveal> })}
                </div>
        </Container>
    </section> 
}
