'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Edit, Eye, MoreHorizontal, Trash2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface PortfolioCardProps {
  portfolio: {
    id: string
    title: string
    bio: string | null
    templateId: string
    isPublished: boolean
    slug: string | null
    createdAt: Date
    updatedAt: Date
    projects: Array<{
      id: string
      title: string
      orderIndex: number
    }>
  }
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const projectCount = portfolio.projects.length
  const portfolioUrl = portfolio.slug ? `/${portfolio.slug}` : '#'

  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg truncate">{portfolio.title}</CardTitle>
            <CardDescription className="mt-1">
              {portfolio.bio || 'No description added yet'}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 ml-2">
            <Badge variant={portfolio.isPublished ? 'default' : 'secondary'}>
              {portfolio.isPublished ? 'Published' : 'Draft'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{projectCount} projects</span>
            <span>Updated {formatDate(portfolio.updatedAt)}</span>
          </div>

          {/* Template Preview */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 text-center">
            <div className="text-sm font-medium text-primary mb-1">
              {portfolio.templateId.charAt(0).toUpperCase() + portfolio.templateId.slice(1)} Template
            </div>
            <div className="text-xs text-muted-foreground">
              {portfolio.isPublished ? 'Live Portfolio' : 'Preview Available'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1" asChild>
              <Link href={`/dashboard/portfolios/${portfolio.id}/edit`}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
            
            {portfolio.isPublished ? (
              <Button size="sm" variant="outline" asChild>
                <Link href={portfolioUrl} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" asChild>
                <Link href={`/dashboard/portfolios/${portfolio.id}/preview`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}