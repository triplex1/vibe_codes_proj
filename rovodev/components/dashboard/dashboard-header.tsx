'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Settings, LogOut, User, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface DashboardHeaderProps {
  user: {
    id: string
    email: string
    fullName: string | null
    username: string | null
    subscriptionTier: string
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <h1 className="text-xl font-bold">PortfolioHub</h1>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">
                <Home className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <span className="hidden md:inline text-sm text-muted-foreground">
            {user.fullName || user.email}
          </span>
          {user.subscriptionTier === 'free' && (
            <Button size="sm" variant="outline" asChild>
              <Link href="/upgrade">Upgrade</Link>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/settings">
              <Settings className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}