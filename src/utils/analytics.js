export const trackEvent = async (eventName) => {
    try {
        const meta = {
            userAgent: navigator.userAgent,
            screen: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            referrer: document.referrer || 'Direct'
        };

        await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event: eventName, meta })
        });
    } catch (e) {
        console.error("Tracking failed", e);
    }
};
