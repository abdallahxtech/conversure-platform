"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Users, Download, TrendingUp, Upload, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface Lead {
  id: string
  name: string
  phone: string
  email: string | null
  status: string
  source: string | null
  budget: string | null
  propertyType: string | null
  location: string | null
  bedrooms: number | null
  createdAt: Date
  agent: {
    fullName: string
  } | null
}

interface LeadsQuickActionsProps {
  leads: Lead[]
}

export function LeadsQuickActions({ leads }: LeadsQuickActionsProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.name.endsWith('.csv')) {
      alert('Please select a CSV file')
      return
    }

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/contacts/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const result = await response.json()
      
      // Show success message
      alert(`Successfully imported ${result.count || 0} contacts!`)
      
      // Refresh the page to show new leads
      router.refresh()
    } catch (error) {
      console.error('Import error:', error)
      alert('Failed to import contacts. Please try again.')
    } finally {
      setIsUploading(false)
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleExportToCSV = () => {
    setIsExporting(true)

    try {
      // Prepare CSV data
      const headers = ['Name', 'Phone', 'Email', 'Status', 'Property Type', 'Location', 'Budget', 'Assigned Agent', 'Source', 'Created Date']
      
      const rows = leads.map(lead => [
        lead.name,
        lead.phone,
        lead.email || '',
        lead.status,
        lead.propertyType || '',
        lead.location || '',
        lead.budget || '',
        lead.agent?.fullName || 'Unassigned',
        lead.source || 'Direct',
        new Date(lead.createdAt).toLocaleDateString(),
      ])

      // Create CSV content
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
      ].join('\n')

      // Create blob and download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      
      link.setAttribute('href', url)
      link.setAttribute('download', `leads_export_${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = 'hidden'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Export error:', error)
      alert('Failed to export leads. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  const handleViewAnalytics = () => {
    router.push('/dashboard/admin/analytics')
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="hidden"
        aria-label="CSV file input"
      />
      
      <Button 
        variant="outline" 
        className="justify-start"
        onClick={handleImportClick}
        disabled={isUploading}
        aria-label="Import leads from CSV"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Import Leads
          </>
        )}
      </Button>
      
      <Button 
        variant="outline" 
        className="justify-start"
        onClick={handleExportToCSV}
        disabled={isExporting || leads.length === 0}
        aria-label="Export leads to CSV"
      >
        {isExporting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Exporting...
          </>
        ) : (
          <>
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </>
        )}
      </Button>
      
      <Button 
        variant="outline" 
        className="justify-start"
        onClick={handleViewAnalytics}
        aria-label="View analytics dashboard"
      >
        <TrendingUp className="mr-2 h-4 w-4" />
        View Analytics
      </Button>
    </div>
  )
}
