# EV Charger Comparison

A responsive EV charger comparison experience built with Next.js, React, TypeScript and Tailwind CSS.

The application allows users to compare fictional home EV chargers across hardware pricing, features and technical specifications. It focuses on responsive layouts, accessible interactions and maintainable component architecture.

## Live demo

[View the deployed application](https://ev-charger-comparison.vercel.app/)

## Overview

Product comparison interfaces become difficult to maintain when products contain different amounts of content. Product names, descriptions, feature lists and technical specifications can all vary in length, causing equivalent sections across cards to become misaligned.

This project addresses that problem by:

- aligning equivalent card sections on desktop with CSS Grid and subgrid;
- using natural content heights on mobile to reduce unnecessary whitespace;
- supporting touch, mouse, trackpad and keyboard interaction;
- separating carousel behaviour from rendering;
- keeping product data separate from presentation;
- providing transparent hardware and installation pricing information;
- using reusable navigation controls across mobile and desktop.

All charger names, prices, specifications and installation information in this project are fictional.

## Features

- Horizontally scrollable charger comparison
- Responsive desktop and mobile layouts
- CSS subgrid-based desktop alignment
- Natural card section heights on mobile
- Previous and next navigation controls
- Touch and trackpad scrolling
- Sticky mobile navigation toolbar
- Active charger image, name and position on mobile
- Disabled navigation states at carousel boundaries
- Visible keyboard focus states
- Accessible button labels and relationships
- Transparent hardware and installation pricing
- Installation requirements dialog
- Optimised local images using `next/image`
- Unit-tested carousel calculations
- Production deployment through Vercel

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS Grid and subgrid
- Vitest
- Vercel

## Why Next.js?

The current comparison feature is primarily interactive and client-side, and it could also have been built with React and Vite.

Next.js was selected because it provides a suitable foundation for a larger production application, including:

- file-based routing;
- server and client components;
- image optimisation;
- metadata management;
- server-side data fetching;
- static generation;
- revalidation;
- future headless CMS integration;
- straightforward deployment through Vercel.

## Project structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    comparison/
      ComparisonCards.tsx
      ChargerCard.tsx
      ProductSummary.tsx
      FeatureList.tsx
      CardActions.tsx
      SpecificationList.tsx
      InstallationRequirementsDialog.tsx

      CarouselNavigationButton.tsx
      MobileCarouselControls.tsx
      DesktopCarouselControl.tsx

      hooks/
        useComparisonCarousel.ts

      utils/
        carousel.ts
        carousel.test.ts

  data/
    chargers.ts

  types/
    comparison.ts

public/
  chargers/
```

## Component architecture

The comparison feature is separated into composition, presentation, behaviour and pure calculation layers.

### `ComparisonCards.tsx`

Acts as the composition root for the comparison experience.

It:

- loads the charger data;
- calculates the required comparison rows;
- calls the carousel hook;
- determines the active charger;
- arranges mobile controls, desktop controls and charger cards.

### `ChargerCard.tsx`

Coordinates the sections within an individual charger card.

On desktop, the card participates in the shared CSS subgrid so equivalent sections align across products.

On mobile, the card uses its natural content height to avoid large blank spaces.

### `ProductSummary.tsx`

Displays:

- product badge;
- charger image;
- charger name;
- hardware price;
- installation pricing message;
- product description.

### `FeatureList.tsx`

Displays the charger’s key features.

### `CardActions.tsx`

Provides the action used to open the installation requirements dialog.

### `InstallationRequirementsDialog.tsx`

Displays general installation guidance without claiming that a property is compatible with a particular charger.

### `SpecificationList.tsx`

Displays technical specification rows such as:

- power supply;
- maximum output;
- connector type;
- cable length.

### `CarouselNavigationButton.tsx`

Provides a single reusable implementation for all previous and next controls.

It is used by both:

- `MobileCarouselControls.tsx`
- `DesktopCarouselControl.tsx`

This keeps the button styling, icon, accessibility attributes and disabled behaviour in one place.

### `MobileCarouselControls.tsx`

Renders the sticky mobile toolbar containing:

- active charger thumbnail;
- active charger name;
- carousel position;
- previous control;
- next control.

### `DesktopCarouselControl.tsx`

Provides the desktop-only sticky gutter positioning for one navigation button.

The component is rendered once for the previous direction and once for the next direction.

### `useComparisonCarousel.ts`

Manages carousel behaviour, including:

- carousel and sentinel references;
- active card tracking;
- scroll-boundary state;
- previous and next availability;
- sticky mobile navigation state;
- resize handling;
- horizontal navigation.

### `carousel.ts`

Contains pure utility functions for:

- calculating scroll boundaries;
- identifying the closest active card;
- calculating comparison row counts.

Separating these calculations from React makes them easier to test independently.

## Responsive design

### Desktop

On larger screens, several products are visible at once. Users are expected to compare equivalent information across cards.

CSS Grid and subgrid are used to align:

- product summaries;
- feature sections;
- calls to action;
- technical specification rows.

The desktop navigation buttons sit in dedicated left and right gutters and remain vertically centred while the user scrolls down the comparison.

### Mobile

On smaller screens, the interface presents one primary card with a partial preview of the next card.

The preview acts as a visual cue that more products are available horizontally.

Cards use natural section heights on mobile rather than matching the tallest content across all products. This removes unnecessary whitespace while preserving aligned comparison rows on desktop.

The mobile toolbar becomes sticky during vertical scrolling and displays the currently active charger.

## Accessibility

Accessibility considerations include:

- semantic buttons for interactive controls;
- descriptive `aria-label` values;
- `aria-controls` relationships between navigation controls and the carousel;
- visible keyboard focus states;
- native disabled-button behaviour;
- keyboard navigation using Tab and Shift+Tab;
- decorative images excluded from screen-reader output;
- descriptive alternative text for product images;
- an `aria-live` region for the active carousel position;
- a native HTML dialog for installation guidance;
- dialog labelling with `aria-labelledby` and `aria-describedby`;
- Escape-key support through the native dialog element;
- native modal focus handling.

The product card itself is not included in the keyboard tab order because it is not an interactive element. Keyboard focus is limited to actionable controls.

## Pricing transparency

Hardware and installation costs are presented separately.

Each product card shows information in the following structure:

```text
Hardware from
$899
Installation quoted separately
```

The installation message is displayed in a distinct informational element rather than being hidden in fine print or placed only inside a tooltip.

The application does not claim that a user’s property is compatible with a charger. A licensed electrician and site assessment would be required for a real installation decision.

## Installation requirements dialog

The card action opens an informational dialog describing factors that may affect installation, including:

- single-phase or three-phase electrical supply;
- switchboard capacity;
- distance between the switchboard and parking area;
- indoor or outdoor installation;
- the need for an electrical assessment.

The dialog provides useful guidance without presenting a fictional compatibility result.

## Testing

Pure carousel calculations are tested independently of React rendering.

Current tests cover:

- scroll boundaries when content does not overflow;
- previous and next availability at the start;
- previous and next availability in the middle;
- previous and next availability at the end;
- small scroll-position tolerance;
- closest-item index calculation;
- empty carousel behaviour;
- comparison row-count calculation.

Run the test suite once with:

```bash
npm run test:run
```

## Running locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Available commands

Run the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Run the unit tests once:

```bash
npm run test:run
```

Create a production build:

```bash
npm run build
```

Start the production build locally:

```bash
npm start
```

## Deployment

The application is hosted on Vercel:

[https://ev-charger-comparison.vercel.app/](https://ev-charger-comparison.vercel.app/)

The deployment workflow is:

1. Changes are committed and pushed to GitHub.
2. Vercel detects the update.
3. Dependencies are installed.
4. The Next.js production build runs.
5. The updated application is deployed.

Non-production branches can also generate preview deployments for testing before changes are merged.

## Potential enhancements

Possible future improvements include:

- headless CMS integration;
- CMS preview and publishing workflows;
- filtering and sorting;
- selecting a subset of chargers for comparison;
- property compatibility questionnaire;
- tailored installation cost estimates;
- analytics for carousel and dialog interactions;
- component tests with React Testing Library;
- automated accessibility testing;
- end-to-end browser tests;
- charger comparison URLs that preserve the selected products;
- server-side content fetching and revalidation.

## Potential CMS architecture

In a production implementation, charger content could be managed through a headless CMS such as Contentstack.

The CMS could manage:

- product names;
- descriptions;
- prices;
- badges;
- images;
- feature lists;
- technical specifications;
- installation guidance;
- display order;
- publishing status.

The application could fetch published content through server-side Next.js code and use revalidation or webhooks to update content without requiring a complete application redeployment.

CMS integration is intentionally outside the scope of the current demonstration.

## Project background

This project is an independently developed demonstration of a reusable product-comparison pattern.

The implementation, component structure, visual design, charger names, prices and content were created for this project.

It does not contain proprietary source code, confidential business information or production data from any employer or client.

## Disclaimer

This is a fictional demonstration application.

It is not affiliated with any EV charger manufacturer, energy provider, government department or previous employer.

Product names, prices, specifications and installation guidance are illustrative only and should not be treated as purchasing, compatibility or electrical advice.