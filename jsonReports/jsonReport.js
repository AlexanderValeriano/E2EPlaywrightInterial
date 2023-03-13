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
      "title": "e2e/e2e-login.spec.ts",
      "file": "e2e/e2e-login.spec.ts",
      "column": 0,
      "line": 0,
      "specs": [
        {
          "title": "Reset feedback form",
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
                  "duration": 4452,
                  "errors": [],
                  "stdout": [],
                  "stderr": [],
                  "retry": 0,
                  "startTime": "2023-03-13T16:24:28.319Z",
                  "attachments": []
                }
              ],
              "status": "expected"
            }
          ],
          "id": "b3baf5a6cbd7a6c3718a-8f7879d61dd8389e9fad",
          "file": "e2e/e2e-login.spec.ts",
          "line": 8,
          "column": 6
        },
        {
          "title": "Submit feedback form",
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
                  "duration": 4460,
                  "errors": [],
                  "stdout": [],
                  "stderr": [],
                  "retry": 0,
                  "startTime": "2023-03-13T16:24:32.988Z",
                  "attachments": []
                }
              ],
              "status": "expected"
            }
          ],
          "id": "b3baf5a6cbd7a6c3718a-977e42d74fbe3122bb3f",
          "file": "e2e/e2e-login.spec.ts",
          "line": 21,
          "column": 6
        }
      ]
    }
  ],
  "errors": []
}