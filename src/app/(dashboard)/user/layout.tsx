import { Sidebar } from '@/components/layout/sidebar/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip/tooltip'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full flex flex-row justify-start items-start">
      <TooltipProvider delayDuration={0}>
        <Sidebar />
        {children}
      </TooltipProvider>
    </div>
  )
}
