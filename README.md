# Chrome Scroll Tracker

A TypeScript library for tracking scroll behavior in Chrome extensions. Supports scroll depth milestones, reading progress, element visibility tracking, and scroll-to-top functionality for Manifest V3.

## Installation

```bash
npm install chrome-scroll-tracker
```

## Usage

```typescript
import { ScrollTracker } from 'chrome-scroll-tracker';

// Create tracker and monitor scroll depth
const tracker = new ScrollTracker();

tracker
  .onDepth(25, () => console.log('User scrolled 25%'))
  .onDepth(50, () => console.log('User scrolled 50%'))
  .onDepth(75, () => console.log('User scrolled 75%'))
  .onDepth(100, () => console.log('User reached the bottom'))
  .start();

// Get current scroll percentage anytime
const progress = tracker.getScrollPercent();
```

## API REFERENCE

### CLASS: ScrollTracker

#### constructor()

Creates a new ScrollTracker instance.

```typescript
const tracker = new ScrollTracker();
```

#### onDepth(threshold: number, callback: () => void): this

Register a callback for when the user scrolls past a depth threshold (0-100). The callback fires only once per threshold.

```typescript
tracker.onDepth(50, () => {
  analytics.track('scroll_50_percent');
});
```

#### start(): this

Start listening to scroll events. Returns this for chaining.

```typescript
tracker.start();
```

#### getScrollPercent(): number

Get the current scroll position as a percentage (0-100).

```typescript
const percent = tracker.getScrollPercent();
```

### STATIC METHODS

#### ScrollTracker.isInViewport(el: Element): boolean

Check if an element is currently visible in the viewport.

```typescript
const isVisible = ScrollTracker.isInViewport(document.querySelector('.hero'));
```

#### ScrollTracker.onVisible(selector: string, callback: (el: Element) => void, threshold: number = 0.5): IntersectionObserver

Watch for elements entering the viewport using IntersectionObserver. Returns the observer instance.

```typescript
ScrollTracker.onVisible('.analytics-section', (el) => {
  console.log('Section is now visible:', el);
});
```

#### ScrollTracker.addScrollToTop(showAfterPx: number = 300): HTMLElement

Create a scroll-to-top button that appears after the user scrolls past a certain point. Returns the button element.

```typescript
const button = ScrollTracker.addScrollToTop(500);
```

#### ScrollTracker.getReadingTime(wordsPerMinute: number = 200): { words: number; minutes: number }

Estimate reading time for the page content based on word count.

```typescript
const { words, minutes } = ScrollTracker.getReadingTime();
console.log(`This page takes approximately ${minutes} minutes to read`);
```

## BROWSER SUPPORT

- Chrome 90 and above
- Any Chromium-based browser
- Firefox (extension adapters supported)

## BUILD FROM SOURCE

```bash
npm install
npm run build
```

The compiled output will be in the `dist/` directory.

## ABOUT

Maintained by theluckystrike. This project was developed as part of the zovo.one ecosystem.

## LICENSE

MIT
