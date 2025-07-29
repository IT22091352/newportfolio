# Environment Variables Setup

This document explains how to set up and use environment variables in this React portfolio project.

## Quick Start

1. **Create `.env` file** in the project root (same level as `package.json`)
2. **Add your environment variables** (see examples below)
3. **Restart your development server** after making changes

## Required Environment Variables

### EmailJS Configuration
```env
REACT_APP_EMAILJS_SERVICE_ID=service_flfoumn
REACT_APP_EMAILJS_TEMPLATE_ID=template_nhq0nit
REACT_APP_EMAILJS_PUBLIC_KEY=wBuwOGjV3u8lXTdrV
```

### Optional Environment Variables
```env
REACT_APP_SITE_URL=https://your-portfolio-domain.com
REACT_APP_SITE_TITLE=Chathuka Dilakshana - Portfolio
REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## Current EmailJS Configuration

Your EmailJS is configured with:
- **Service ID**: `service_flfoumn` (Gmail)
- **Template ID**: `template_nhq0nit`
- **Public Key**: `wBuwOGjV3u8lXTdrV`
- **Private Key**: `BRaLe0rHAofeJqNSWhhKn` (keep this secure, not in .env)

## How to Get EmailJS Credentials

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template
4. Get your credentials from the EmailJS dashboard

## Environment File Types

- `.env` - Default environment variables
- `.env.local` - Local overrides (ignored by git)
- `.env.development` - Development environment
- `.env.production` - Production environment

## Important Rules

1. **REACT_APP_ prefix required** - All variables must start with `REACT_APP_`
2. **Restart required** - Changes require restarting the dev server
3. **Build-time embedding** - Variables are embedded at build time
4. **Security** - `.env` files are already in `.gitignore`

## Usage in Code

```javascript
// Import configuration utility
import { config, validateEmailJSConfig } from '../utils/config';

// Use configuration
const { serviceId, templateId, publicKey } = config.emailjs;

// Validate configuration
const { isValid, missing } = validateEmailJSConfig();
```

## Development vs Production

- **Development**: Uses `.env` file and shows debug logs
- **Production**: Uses production environment variables
- **Fallbacks**: Code includes fallback values for missing variables

## Troubleshooting

### Environment variables not working?
1. Check that variables start with `REACT_APP_`
2. Restart your development server
3. Check browser console for debug logs

### EmailJS not working?
1. Verify your EmailJS credentials
2. Check the browser console for error messages
3. Ensure all required variables are set

### Security Notes
- Never commit sensitive data to git
- Use different credentials for development and production
- Consider using environment-specific files for production
- Keep your private key secure and never expose it in client-side code 