# Visual Comparison Testing

The framework uses Playwright native snapshot testing.

## Run

```bash
npm run test:visual
```

## Update Baseline

```bash
npm run test:visual:update
```

## Browsers

- Chromium

- Firefox

- WebKit

Snapshots are stored independently for each browser.

Animations are disabled during comparison to reduce flaky tests.
