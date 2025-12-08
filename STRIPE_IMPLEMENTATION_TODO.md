# Stripe Integration & Dashboard Finalization - TODO

## Progress Tracker

### ✅ Completed
- [x] Update Prisma schema with MessageGenerationMode enum
- [x] Generate Prisma client (twice)
- [x] Create app/actions/settings.ts for automation settings
- [x] Task 1: Fix Leads Dashboard
  - [x] Create components/dashboard/LeadsQuickActions.tsx
  - [x] Integrate LeadsQuickActions into leads page
  - [x] Import Leads button (CSV upload to /api/contacts/upload)
  - [x] Export to CSV button (download current leads)
  - [x] View Analytics button (links to /dashboard/admin/analytics)
  - [x] Create app/dashboard/admin/analytics/page.tsx (placeholder)
- [x] Task 2: Update Settings Page
  - [x] Create components/dashboard/AutomationSettings.tsx
  - [x] Add "Automation Settings" section to settings page
  - [x] Add Message Generation Mode toggle (AI_PILOT vs MANUAL_COPILOT)
  - [x] Connect to updateAutomationSettings server action

### 🔄 In Progress
- [ ] Task 3: Stripe SaaS Integration

### ⏳ Pending
- [ ] Task 4: Environment Variables Documentation

## Task 3: Stripe SaaS Integration
### A. Homepage Pricing Section
- [ ] Create components/PricingSection.tsx
- [ ] Add 3 pricing cards (Starter 299 AED, Growth 699 AED, Pro 1,199 AED)
- [ ] Add "Start 14-Day Free Trial" CTA buttons
- [ ] Integrate with /api/billing/checkout

### B. Update Checkout API
- [ ] Verify trial_period_days: 14 is set
- [ ] Update success/cancel URLs

### C. Webhook Handler
- [ ] Already implemented, verify all events handled

## Task 4: Environment Variables Documentation
- [ ] Create comprehensive .env.example file
- [ ] Document all Stripe variables needed

## Files to Create/Modify
1. app/dashboard/admin/leads/page.tsx (modify - add client-side handlers)
2. app/dashboard/admin/settings/page.tsx (modify - add automation section)
3. app/dashboard/admin/analytics/page.tsx (create - placeholder)
4. components/PricingSection.tsx (create)
5. app/page.tsx (modify - add pricing section)
6. .env.example (create)
7. ENVIRONMENT_VARIABLES.md (create)

## Implementation Order
1. Task 1: Leads Dashboard Quick Actions
2. Task 2: Settings Page Automation
3. Task 3A: Pricing Section Component
4. Task 3B: Homepage Integration
5. Task 4: Environment Documentation
6. Testing & Verification
7. Git Commands
