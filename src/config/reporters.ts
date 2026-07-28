export const Reporters = [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['list'],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['blob', { outputDir: 'blob-report' }]
] as const;