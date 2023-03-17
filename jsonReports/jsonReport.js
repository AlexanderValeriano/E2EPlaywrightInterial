{
  "config": {
    "forbidOnly": false,
    "fullyParallel": false,
    "globalSetup": null,
    "globalTeardown": null,
    "globalTimeout": 0,
    "grep": {},
    "grepInvert": null,
    "maxFailures": 0,
    "metadata": {},
    "preserveOutput": "always",
    "projects": [
      {
        "outputDir": "/home/alexander/E2EPlaywrightInterial/test-results",
        "repeatEach": 1,
        "retries": 0,
        "name": "chromium",
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests",
        "testIgnore": [],
        "testMatch": [
          "**/?(*.)@(spec|test).*"
        ],
        "timeout": 30000
      },
      {
        "outputDir": "/home/alexander/E2EPlaywrightInterial/test-results",
        "repeatEach": 1,
        "retries": 0,
        "name": "firefox",
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests",
        "testIgnore": [],
        "testMatch": [
          "**/?(*.)@(spec|test).*"
        ],
        "timeout": 30000
      },
      {
        "outputDir": "/home/alexander/E2EPlaywrightInterial/test-results",
        "repeatEach": 1,
        "retries": 0,
        "name": "webkit",
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests",
        "testIgnore": [],
        "testMatch": [
          "**/?(*.)@(spec|test).*"
        ],
        "timeout": 30000
      }
    ],
    "reporter": [
      [
        "dot",
        null
      ],
      [
        "json",
        {
          "outputFile": "jsonReports/jsonReport.js"
        }
      ],
      [
        "html",
        {
          "open": "never"
        }
      ]
    ],
    "reportSlowTests": {
      "max": 5,
      "threshold": 15000
    },
    "configFile": "/home/alexander/E2EPlaywrightInterial/playwright.config.ts",
    "rootDir": "/home/alexander/E2EPlaywrightInterial/tests",
    "quiet": false,
    "shard": null,
    "updateSnapshots": "missing",
    "version": "1.31.1",
    "workers": 4,
    "webServer": null
  },
  "suites": [
    {
      "title": "e2e/pom-e2e-payment.spec.ts",
      "file": "e2e/pom-e2e-payment.spec.ts",
      "column": 0,
      "line": 0,
      "specs": [],
      "suites": [
        {
          "title": "New Payment",
          "file": "e2e/pom-e2e-payment.spec.ts",
          "line": 5,
          "column": 15,
          "specs": [
            {
              "title": "Should send new payment",
              "ok": true,
              "tags": [],
              "tests": [
                {
                  "timeout": 30000,
                  "annotations": [],
                  "expectedStatus": "passed",
                  "projectName": "chromium",
                  "results": [
                    {
                      "workerIndex": 0,
                      "status": "passed",
                      "duration": 4873,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-17T14:24:27.870Z",
                      "attachments": []
                    }
                  ],
                  "status": "expected"
                }
              ],
              "id": "ee0efe0c0f5355512994-bece91585ec84d234303",
              "file": "e2e/pom-e2e-payment.spec.ts",
              "line": 20,
              "column": 7
            }
          ]
        }
      ]
    }
  ],
  "errors": []
}