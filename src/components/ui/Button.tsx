import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
type Variant = 'primary' | 'outline' | 'light'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: Variant }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', ...props }, ref) => (
  <button ref={ref} className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 disabled:pointer-events-none', variant === 'primary' && 'bg-[#ff6500] text-white shadow-[0_8px_18px_rgba(249,115,22,.24)] hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-[0_12px_22px_rgba(249,115,22,.3)]', variant === 'outline' && 'border border-[#fdcda3] bg-white/70 text-[#333] hover:-translate-y-0.5 hover:border-orange-400 hover:bg-orange-50', variant === 'light' && 'bg-white text-[#f45d00] hover:-translate-y-0.5 hover:bg-orange-50', className)} {...props} />
))
Button.displayName = 'Button'
