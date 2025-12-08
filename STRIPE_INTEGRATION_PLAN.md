# Stripe SaaS Integration & Dashboard Finalization Plan

## Overview
Implementing full Stripe billing integration with 14-day free trial, dashboard functionality improvements, and automation settings.

## Task Breakdown

### Task 1: Fix Leads Dashboard Quick Actions
- [ ] Import Leads: File upload to POST /api/contacts/upload
- [ ] Export to CSV: Generate and download CSV from current leads
- [ ] View Analytics: Link to /dashboard/admin/analytics page

### Task 2: Update Settings Page
- [ ] Add "Automation Settings" section
- [ ] Add "Message Generation Mode" toggle (AI Pilot vs Manual Copilot)
- [ ] Create server action to save settings to CompanySettings

### Task 3: Stripe SaaS Integration
- [ ] A. Homepage Pricing Section (3 tiers with 14-day trial CTA)
- [ ] B. Checkout API with trial logic
- [ ] C. Webhook handler for subscription events

### Task 4: Environment Variables Documentation
- [ ] List all required Stripe environment variables

## Implementation Order
1. Read existing Stripe integration files
2. Check CompanySettings schema for automation fields
3. Implement Task 1 (Leads Dashboard)
4. Implement Task 2 (Settings Page)
5. Implement Task 3 (Stripe Integration)
6. Document environment variables
7. Test and verify

## Files to Create/Modify
- app/dashboard/admin/leads/page.tsx (modify)
- app/dashboard/admin/settings/page.tsx (modify)
- app/dashboard/admin/analytics/page.tsx (create)
- app/page.tsx (add pricing section)
- app/api/billing/checkout/route.ts (update)
- app/api/webhooks/stripe/route.ts (update)
- app/actions/settings.ts (create)
- components/PricingSection.tsx (create)
