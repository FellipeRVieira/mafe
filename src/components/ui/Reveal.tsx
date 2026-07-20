import type { PropsWithChildren } from 'react'
import { motion, type Variants } from 'framer-motion'
type Direction = 'up' | 'left' | 'right'
const positions: Record<Direction, { x: number; y: number }> = { up: { x: 0, y: 26 }, left: { x: -35, y: 0 }, right: { x: 35, y: 0 } }
export function Reveal({ children, className, direction = 'up', delay = 0 }: PropsWithChildren<{ className?: string; direction?: Direction; delay?: number }>) {
  const variants: Variants = { hidden: { opacity: 0, ...positions[direction] }, visible: { opacity: 1, x: 0, y: 0 } }
  return <motion.div className={className} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
