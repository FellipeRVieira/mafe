import { Camera, GraduationCap, PartyPopper, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import type { Experience } from '@/types/home'
const experiences: Experience[] = [{ title: 'Casamentos', icon: UsersRound }, { title: 'Formaturas', icon: GraduationCap }, { title: 'Eventos', icon: PartyPopper }, { title: 'Ensaios', icon: Camera }]
export function Experiences() {
    return <section className="pb-20 pt-8">
        <Container>
            <div className="grid grid-cols-2 divide-x divide-[#fed7aa] sm:grid-cols-4">{experiences.map(({ title, icon: Icon }, index) => 
                <Reveal key={title} delay={index * .08}>
                    <motion.div whileHover={{ y: -5, scale: 1.03 }} className="group flex flex-col items-center px-3 py-5 text-center">
                        <span className="mb-3 grid size-11 place-items-center rounded-full bg-orange-50 text-[#ff6500] transition-colors
                         group-hover:bg-[#ff6500] group-hover:text-white">
                            <Icon size={22} strokeWidth={1.5} />
                        </span>
                        
                        <span className="text-sm font-medium text-[#34302e]">{title}</span>
                    </motion.div>
                </Reveal>)}
            </div>
        </Container>
    </section>
}