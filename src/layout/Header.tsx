import { Menu, X, UserRound } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrolled } from '@/hooks/useScrolled'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
const links = [{ label: 'Início', href: '#inicio' }, { label: 'Como funciona', href: '#como-funciona' }, { label: 'Sobre', href: '#sobre' }, { label: 'Contato', href: '#contato' }]
export function Logo({ light = false }: { light?: boolean }) 
{ 
    return <Link to="/" className={light ? 'text-white' : 'text-[#f45d00]'}>

        <span className="block font-serif text-[25px] leading-none tracking-[.28em]">
            MAFE
        </span>
        
        <span className="mt-1 block text-[8px] font-bold tracking-[.38em]">
            Luz, Memória & Presença
        </span>

    </Link> 
}

export function Header() { const scrolled = useScrolled(); const [open, setOpen] = useState(false); 
    return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 
        ${scrolled ? 'border-b border-orange-100/60 bg-white/85 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>

            <Container className="flex h-[76px] items-center justify-between">
                <Logo />

                <nav className="hidden items-center gap-8 md:flex">{links.map((link, index) => 

                    <a key={link.href} href={link.href} className={`text-[10px] font-medium transition-colors hover:text-[#f45d00] ${index === 0 ? 'text-[#f45d00]' : 'text-slate-800'}`}>
                        {link.label}
                    </a>)}

                </nav>
                
                <div className="hidden md:block">
                    <Button>
                        <UserRound size={13} strokeWidth={1.8} /> 
                        Área do fotógrafo
                    </Button>
                </div>
                <button className="text-[#f45d00] md:hidden" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
                
            </Container>
            
            <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} 
                className="overflow-hidden border-t border-orange-100 bg-white md:hidden">
                
                <Container className="flex flex-col gap-4 py-5">{links.map(link => 
                
                    <a onClick={() => setOpen(false)} key={link.href} href={link.href} className="text-sm">{link.label}</a>)}
                    
                    <Button>Área do fotógrafo</Button>
                </Container>
                
                </motion.nav>}
                
            </AnimatePresence>
                
    </header>
}
