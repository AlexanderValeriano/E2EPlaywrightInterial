import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
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
    headless: false,
    actionTimeout: 0,
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
