# Environment Variables Documentation

This document provides detailed information about all environment variables used in the Conversure application.

## Table of Contents

1. [Required Variables](#required-variables)
2. [Optional Variables](#optional-variables)
3. [Stripe Configuration](#stripe-configuration)
4. [WhatsApp Providers](#whatsapp-providers)
5. [Setup Instructions](#setup-instructions)
6. [EasyPanel Deployment](#easypanel-deployment)

---

## Required Variables

These variables MUST be set for the application to function properly.

### Database

```bash
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```

**Description:** PostgreSQL connection string for Prisma ORM.

**How to get:**
- Local: Install PostgreSQL and create a database
- Production: Use your hosting provider's PostgreSQL service (e.g., EasyPanel PostgreSQL)

**Format:** `postgresql://[user]:[password]@[host]:[port]/[database]?schema=public`

---

### Authentication

```bash
JWT_SECRET="your-super-secret-jwt-key-here"
```

**Description:** Secret key used to sign and verify JWT tokens for user authentication.

**How to generate:**
```bash
openssl rand -base64 32
```

**Security:** NEVER commit this to version control. Use a different secret for each environment.

---

### Application URL

```bash
NEXT_PUBLIC_APP_URL="https://conversure.ae"
```

**Description:** The public URL where your application is hosted. Used for:
- Stripe webhook callbacks
- WhatsApp webhook callbacks
- Email links
- OAuth redirects

**Examples:**
- Development: `http://localhost:3000`
- Production: `https://conversure.ae`

---

## Stripe Configuration

### API Keys

```bash
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

**Description:** Stripe API keys for payment processing.

**How to get:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your keys:
   - **Test mode:** Use `sk_test_...` and `pk_test_...` for development
   - **Live mode:** Use `sk_live_...` and `pk_live_...` for production

**Security:** 
- `STRIPE_SECRET_KEY` is server-side only (never exposed to client)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is safe to expose to client

---

### Webhook Secret

```bash
STRIPE_WEBHOOK_SECRET="whsec_..."
```

**Description:** Used to verify that webhook events are sent by Stripe.

**How to get:**
1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL: `https://conversure.ae/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the "Signing secret" (starts with `whsec_`)

---

### Price IDs

```bash
STRIPE_PRICE_ID_STARTER="price_..."
STRIPE_PRICE_ID_GROWTH="price_..."
STRIPE_PRICE_ID_PRO="price_..."
```

**Description:** Stripe Price IDs for each subscription plan.

**How to create:**

1. Go to [Stripe Products](https://dashboard.stripe.com/products)
2. Create a product for each plan:

**Starter Plan:**
- Name: "Conversure Starter"
- Price: 299 AED/month
- Billing: Recurring monthly
- Copy the Price ID

**Growth Plan:**
- Name: "Conversure Growth"
- Price: 699 AED/month
- Billing: Recurring monthly
- Copy the Price ID

**Pro Plan:**
- Name: "Conversure Pro"
- Price: 1,199 AED/month
- Billing: Recurring monthly
- Copy the Price ID

**Note:** The 14-day free trial is automatically applied in the checkout session.

---

## WhatsApp Providers

You need to configure at least ONE WhatsApp provider. Choose based on your needs:

### Option 1: WhatsApp Business API (WABA) - Recommended

```bash
WABA_API_URL="https://waba.360dialog.io/v1"
WABA_API_KEY="your-api-key"
WABA_PHONE_NUMBER_ID="your-phone-number-id"
```

**Description:** Official Meta WhatsApp Business API. Best for high-volume, production use.

**Providers:**
- [360dialog](https://www.360dialog.com/) - Recommended for UAE
- [Twilio](https://www.twilio.com/whatsapp)
- [Meta Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api)

**How to get:**
1. Sign up with a WABA provider
2. Complete business verification
3. Get your API credentials
4. Configure webhook: `https://conversure.ae/api/webhooks/whatsapp`

---

### Option 2: Chatwoot (Open Source)

```bash
CHATWOOT_BASE_URL="https://app.chatwoot.com"
CHATWOOT_API_TOKEN="your-api-token"
CHATWOOT_ACCOUNT_ID="your-account-id"
CHATWOOT_INBOX_ID="your-inbox-id"
```

**Description:** Open-source customer engagement platform with WhatsApp support.

**How to get:**
1. Set up [Chatwoot](https://www.chatwoot.com/) (self-hosted or cloud)
2. Create a WhatsApp inbox
3. Go to Settings > Integrations > API
4. Generate an API access token
5. Note your Account ID and Inbox ID

---

### Option 3: Evolution API (Quick Setup)

```bash
EVOLUTION_API_URL="https://evolution-api.example.com"
EVOLUTION_API_KEY="your-api-key"
EVOLUTION_INSTANCE_NAME="your-instance-name"
```

**Description:** WhatsApp Web gateway. Quick to set up but less reliable for production.

**How to get:**
1. Deploy [Evolution API](https://github.com/EvolutionAPI/evolution-api)
2. Create an instance
3. Get your API key and instance name
4. Configure webhook: `https://conversure.ae/api/webhooks/evolution`

---

## Bitrix24 CRM

```bash
BITRIX24_WEBHOOK_URL="https://yourcompany.bitrix24.com/rest/1/xxxxx/"
```

**Description:** Bitrix24 webhook URL for CRM integration.

**How to get:**
1. Log in to your Bitrix24 account
2. Go to Settings > Developer Resources > Webhooks
3. Create an "Inbound webhook"
4. Grant permissions:
   - CRM (read/write)
   - Contacts (read/write)
   - Deals (read/write)
5. Copy the webhook URL

---

## AI Configuration

```bash
OPENAI_API_KEY="sk-..."
OPENAI_MODEL="gpt-4-turbo-preview"
```

**Description:** OpenAI API for AI-powered features (smart replies, automation).

**How to get:**
1. Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add billing information to your OpenAI account

**Models:**
- `gpt-4-turbo-preview` - Best quality (recommended)
- `gpt-3.5-turbo` - Faster, cheaper
- `gpt-4` - High quality, slower

---

## Optional Variables

### Email Notifications

**Option 1: SMTP**
```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM="noreply@conversure.ae"
```

**Option 2: Resend (Recommended)**
```bash
RESEND_API_KEY="re_..."
```

Get from: [Resend](https://resend.com/api-keys)

---

### Monitoring

```bash
# Sentry for error tracking
SENTRY_DSN="https://...@sentry.io/..."

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-..."
```

---

### Feature Flags

```bash
ENABLE_AI_FEATURES="true"
ENABLE_WARMUP_PLANS="true"
ENABLE_ANALYTICS="true"
```

---

## Setup Instructions

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in required variables (at minimum):
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `NEXT_PUBLIC_APP_URL`

3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Seed the database:
   ```bash
   npx prisma db seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## EasyPanel Deployment

### Step 1: Add Environment Variables

In EasyPanel dashboard:
1. Go to your app > Environment
2. Add all required variables
3. Click "Save"

### Step 2: Configure Database

```bash
DATABASE_URL="postgresql://user:password@postgres:5432/conversure?schema=public"
```

Use the internal PostgreSQL service URL provided by EasyPanel.

### Step 3: Set Application URL

```bash
NEXT_PUBLIC_APP_URL="https://conversure.ae"
```

Use your actual domain.

### Step 4: Configure Webhooks

**Stripe Webhook:**
- URL: `https://conversure.ae/api/webhooks/stripe`
- Events: All subscription and payment events

**WhatsApp Webhook:**
- URL: `https://conversure.ae/api/webhooks/whatsapp`
- Events: All message events

### Step 5: Run Migrations

In EasyPanel terminal:
```bash
npx prisma migrate deploy
npx prisma db seed
```

### Step 6: Verify Deployment

1. Check application logs for errors
2. Test Stripe checkout flow
3. Test WhatsApp message sending
4. Verify CRM sync

---

## Security Best Practices

1. **Never commit `.env` to version control**
   - Add `.env` to `.gitignore`
   - Use `.env.example` as a template

2. **Use different secrets for each environment**
   - Development: Test keys
   - Production: Live keys

3. **Rotate secrets regularly**
   - Change `JWT_SECRET` periodically
   - Rotate API keys every 90 days

4. **Limit API key permissions**
   - Only grant necessary permissions
   - Use separate keys for different services

5. **Monitor API usage**
   - Set up billing alerts in Stripe
   - Monitor OpenAI usage
   - Track WhatsApp message volume

---

## Troubleshooting

### Database Connection Issues

**Error:** `Can't reach database server`

**Solution:**
- Check `DATABASE_URL` format
- Verify database is running
- Check network connectivity
- Ensure database accepts connections from your IP

### Stripe Webhook Failures

**Error:** `Webhook signature verification failed`

**Solution:**
- Verify `STRIPE_WEBHOOK_SECRET` is correct
- Check webhook endpoint URL
- Ensure HTTPS is enabled in production

### WhatsApp Message Failures

**Error:** `Failed to send message`

**Solution:**
- Verify WhatsApp provider credentials
- Check phone number format (+971...)
- Ensure webhook is configured
- Check API rate limits

---

## Support

For additional help:
- Documentation: [docs.conversure.ae](https://docs.conversure.ae)
- Support: support@conversure.ae
- GitHub Issues: [github.com/conversure/issues](https://github.com/conversure/issues)
