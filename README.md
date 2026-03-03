# chrome-scroll-tracker

Track scroll position and depth in Chrome extensions.

## Overview

chrome-scroll-tracker provides utilities to track scroll depth, position, and generate scroll reports for analytics.

## Installation

```bash
npm install chrome-scroll-tracker
```

## Usage

### Track Scroll

```javascript
import { ScrollTracker } from 'chrome-scroll-tracker';

const tracker = new ScrollTracker();

tracker.on('scroll', (data) => {
  console.log(data.depth, data.position);
});
```

## API

### Events

- `scroll` - Scroll position changed
- `bottom` - Reached page bottom

## Browser Support

- Chrome 90+

## License

MIT
