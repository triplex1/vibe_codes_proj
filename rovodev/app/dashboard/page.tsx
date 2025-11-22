import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Plus, ExternalLink, Edit, Eye, Settings, LogOut } from 'lucide-react'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { PortfolioCard } from '@/components/dashboard/portfolio-card'

export default async function DashboardPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/auth/login')
  }

  // Fetch user's portfolios
  const portfolios = await db.portfolio.findMany({
    where: { userId: user.id },
    include: {
      projects: {
        orderBy: { orderIndex: 'asc' }
      }
    },
    orderBy: { updatedAt: 'desc' }
  })

  const portfolioCount = portfolios.length
  const publishedCount = portfolios.filter(p => p.isPublished).length

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user.fullName?.split(' ')[0] || 'Creator'}!
          </h1>
          <p className="text-muted-foreground">
            Manage your portfolios and showcase your best work to the world.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolios</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">📁</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioCount}</div>
              <p className="text-xs text-muted-foreground">
                {portfolioCount === 0 ? 'Create your first portfolio' : '+0 from last month'}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">🌐</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{publishedCount}</div>
              <p className="text-xs text-muted-foreground">
                {publishedCount === 0 ? 'Publish to go live' : 'Live and discoverable'}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscription</CardTitle>
              <div className="h-4 w-4 text-muted-foreground">⭐</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">{user.subscriptionTier}</div>
              <p className="text-xs text-muted-foreground">
                {user.subscriptionTier === 'free' ? 'Upgrade for more features' : 'All features unlocked'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolios Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Portfolios</h2>
          <Button asChild>
            <Link href="/dashboard/portfolios/new">
              <Plus className="h-4 w-4 mr-2" />
              Create Portfolio
            </Link>
          </Button>
        </div>

        {portfolioCount === 0 ? (
          /* Empty State */
          <Card className="border-dashed border-2 border-muted-foreground/25">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Plus className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Your First Portfolio</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Get started by creating your first portfolio. Choose from our professional templates 
                and start showcasing your work in minutes.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/dashboard/portfolios/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Portfolio
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/templates">
                    <Eye className="h-4 w-4 mr-2" />
                    View Templates
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Portfolio Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                portfolio={portfolio}
              />
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {portfolioCount > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4" asChild>
                <Link href="/dashboard/portfolios/new" className="flex flex-col items-center space-y-2">
                  <Plus className="h-6 w-6" />
                  <span>New Portfolio</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto p-4" asChild>
                <Link href="/dashboard/settings" className="flex flex-col items-center space-y-2">
                  <Settings className="h-6 w-6" />
                  <span>Settings</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto p-4" asChild>
                <Link href="/templates" className="flex flex-col items-center space-y-2">
                  <Eye className="h-6 w-6" />
                  <span>Browse Templates</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-auto p-4" asChild>
                <Link href="/help" className="flex flex-col items-center space-y-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">?</span>
                  </div>
                  <span>Help Center</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}