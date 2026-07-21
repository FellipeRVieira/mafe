import { ArrowRight, Images, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
const photographerImage = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=90'
export function Hero()
{ 
    return <section id="inicio" className="relative overflow-hidden pt-24">

        <Container>

            <div className="relative min-h-[600px] overflow-hidden rounded-2xl border border-[#fed7aa] 
                bg-[radial-gradient(circle_at_15%_25%,#fff_0,#fff9f1_58%,#fff3e5_100%)] px-6 py-14 sm:px-12 lg:flex lg:items-center lg:px-16 
                lg:py-16">

                <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, ease: 'easeOut' }}
                    className="relative z-10 max-w-[500px]">

                    <h1 className="text-[44px] leading-[.94] tracking-[-.04em] text-[#211b18] sm:text-[61px]">
                        Registre momentos.<br /><em className="font-script text-[#fb650b]">Reviva emoções.</em>
                    </h1>

                    <p className="mt-6 max-w-[280px] text-sm leading-relaxed text-[#515151]">
                        Fotos e vídeos que eternizam histórias incríveis.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        
                        <Button>
                            <Images size={14} /> Acessar álbum <ArrowRight size={13} />
                        </Button>

                        <Button variant="outline"><UserRound size={14} /> Área do fotógrafo</Button>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, x: 42 }} animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: .9, delay: .12, ease: 'easeOut' }}
                    className="relative mt-10 h-[290px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[54%]">
                        
                    <img src={photographerImage} alt="Fotógrafa registrando um momento com sua câmera" className="h-full w-full object-cover 
                    object-center mix-blend-multiply" />

                    <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff8f0_0%,transparent_47%),linear-gradient(0deg,#fff7ed_0%,transparent_38%)]"/>

                </motion.div>

            </div>

        </Container>

    </section> 
}
