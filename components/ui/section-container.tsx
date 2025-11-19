import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <section className={cn('px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto', className)}>
      {children}
    </section>
  )
}