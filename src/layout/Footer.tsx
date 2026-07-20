import { AtSign, Camera, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/layout/Header'

const links = ['Início', 'Como funciona', 'Sobre', 'Contato']

export function Footer() {
  return <footer className="border-t border-[#fed7aa] bg-white py-12"><Container><div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start"><div><Logo /><p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#817872]">Uma nova forma de compartilhar histórias que merecem ser lembradas.</p></div><div className="flex gap-7">{links.map(link => <a key={link} href={`#${link === 'Início' ? 'inicio' : link === 'Como funciona' ? 'como-funciona' : link.toLowerCase()}`} className="text-xs text-[#5d5753] transition-colors hover:text-[#f45d00]">{link}</a>)}</div><div className="flex gap-3 text-[#f45d00]"><a className="grid size-8 place-items-center rounded-full border border-orange-100 hover:bg-orange-50" href="#contato" aria-label="Instagram"><Camera size={15} /></a><a className="grid size-8 place-items-center rounded-full border border-orange-100 hover:bg-orange-50" href="#contato" aria-label="LinkedIn"><AtSign size={15} /></a><a className="grid size-8 place-items-center rounded-full border border-orange-100 hover:bg-orange-50" href="#contato" aria-label="Email"><Mail size={15} /></a></div></div><div className="mt-10 border-t border-orange-100 pt-5 text-center text-[11px] text-[#918782]">© {new Date().getFullYear()} MAFE Fotografia & Filmes. Todos os direitos reservados.</div></Container></footer>
}
