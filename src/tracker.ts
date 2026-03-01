/**
 * Scroll Tracker — Scroll depth, reading progress, and visibility
 */
export class ScrollTracker {
    private depthListeners: Array<{ threshold: number; fired: boolean; callback: () => void }> = [];

    /** Track scroll depth milestones (0-100) */
    onDepth(threshold: number, callback: () => void): this {
        this.depthListeners.push({ threshold, fired: false, callback });
        return this;
    }

    /** Start tracking */
    start(): this {
        window.addEventListener('scroll', () => this.check(), { passive: true });
        return this;
    }

    private check(): void {
        const pct = this.getScrollPercent();
        this.depthListeners.forEach((d) => {
            if (!d.fired && pct >= d.threshold) { d.fired = true; d.callback(); }
        });
    }

    /** Get current scroll percentage */
    getScrollPercent(): number {
        const h = document.documentElement;
        const scrollTop = window.scrollY || h.scrollTop;
        const scrollHeight = h.scrollHeight - h.clientHeight;
        return scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
    }

    /** Check if element is in viewport */
    static isInViewport(el: Element): boolean {
        const r = el.getBoundingClientRect();
        return r.top >= 0 && r.left >= 0 && r.bottom <= window.innerHeight && r.right <= window.innerWidth;
    }

    /** Watch element visibility */
    static onVisible(selector: string, callback: (el: Element) => void, threshold: number = 0.5): IntersectionObserver {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) { callback(e.target); obs.unobserve(e.target); } });
        }, { threshold });
        document.querySelectorAll(selector).forEach((el) => obs.observe(el));
        return obs;
    }

    /** Create scroll-to-top button */
    static addScrollToTop(showAfterPx: number = 300): HTMLElement {
        const btn = document.createElement('button');
        Object.assign(btn.style, {
            position: 'fixed', bottom: '24px', right: '24px', width: '44px', height: '44px',
            borderRadius: '50%', border: 'none', background: '#3B82F6', color: '#fff',
            cursor: 'pointer', fontSize: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            opacity: '0', transition: 'opacity 0.3s', zIndex: '99999', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
        });
        btn.innerHTML = '&#8593;'; btn.title = 'Back to top';
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', () => { btn.style.opacity = window.scrollY > showAfterPx ? '1' : '0'; }, { passive: true });
        document.body.appendChild(btn);
        return btn;
    }

    /** Get reading time estimate */
    static getReadingTime(wordsPerMinute: number = 200): { words: number; minutes: number } {
        const text = document.body.innerText || '';
        const words = text.split(/\s+/).filter(Boolean).length;
        return { words, minutes: Math.ceil(words / wordsPerMinute) };
    }
}
