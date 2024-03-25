import { ThemeProvider } from '@Src/components/theme-provider'
import { SiteHeader } from '@Src/components/site-header'
import { TailwindIndicator } from '@Src/components/tailwind-indicator'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  )
}