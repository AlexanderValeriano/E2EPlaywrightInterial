import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests/visual",
  timeout: 30 * 1000,
  retries: 0,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.js" }],
    ["html", { open: "never" }],
  ],
  use: {
    baseURL: "https://devis.interiale.fr/",
    headless: true,
    viewport: { width: 1200, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "webkit",
      use: { browserName: "webkit" },
    },
  ],
};

export default config;
