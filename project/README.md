# XYZ Data Science Website

This is the official website for XYZ Data Science.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Google Analytics Setup

This website uses Google Analytics 4 for tracking visitor behavior. To configure Google Analytics:

1. Create a Google Analytics 4 property in your Google Analytics account
2. Get your Measurement ID (should look like G-XXXXXXXXXX)
3. Update the Measurement ID in `src/config.ts`:
   ```typescript
   export const GA_MEASUREMENT_ID = 'YOUR-GA4-MEASUREMENT-ID';
   ```

The application is configured to track:
- Page views
- Navigation events (when users navigate between sections)
- Contact link clicks
- Form submissions (when implemented)

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- react-ga4 for Google Analytics integration 