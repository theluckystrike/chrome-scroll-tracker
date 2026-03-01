# chrome-scroll-tracker — Scroll Depth and Reading Progress
> **Built by [Zovo](https://zovo.one)** | `npm i chrome-scroll-tracker`

Scroll depth milestones, element visibility, scroll-to-top button, and reading time estimate.

```typescript
import { ScrollTracker } from 'chrome-scroll-tracker';
const tracker = new ScrollTracker();
tracker.onDepth(50, () => console.log('50% scrolled')).onDepth(100, () => console.log('100%')).start();
ScrollTracker.addScrollToTop();
```
MIT License
